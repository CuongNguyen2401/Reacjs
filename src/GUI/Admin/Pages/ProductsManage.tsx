import React, { useEffect, useState, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ModuleRegistry, ClientSideRowModelModule, RowSelectedEvent } from 'ag-grid-community';
import { Product } from '../../../Model/Product';
import { getProductData, deleteProducts, getProductById, activeProducts } from '../../../api/ProductAPI';
import { EditProduct } from '../Components/EditProduct';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { getCategoryData } from '../../../api/CategoryAPI';
import { Button } from 'react-bootstrap';
import { showToastMessage } from '../../../Other/CustomToast';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { CustomModal } from '../Components/AddProduct';
import '../css/Button.css';
import '../css/font.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Products: React.FC = () => {
    const [rowData, setRowData] = useState<Product[]>([]);
    const [categoryValues, setCategoryValues] = useState<string[]>([]);
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedListProductId, setSelectedListProductId] = useState<number[]>([]);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const gridRef = useRef<any>(null);

    const fetchData = async () => {
        try {
            const productResponse = await getProductData();
            if (productResponse && productResponse.result) {
                setRowData(productResponse.result);
            } else {
                console.error('Error fetching product data:', productResponse);
                setRowData([]);
            }

            const categoryResponse = await getCategoryData();
            if (categoryResponse !== null) {
                const categories = categoryResponse.result.map((category: { id: number; name: string; description: string; }) => category.name);
                setCategoryValues(categories);

                setColumnDefs([
                    { field: "name", checkboxSelection: true, headerCheckboxSelection: true, headerName: "Name" },
                    {
                        field: "image",
                        headerName: "Image",
                        cellRenderer: ImageRenderer,
                        width: 100,
                        autoHeight: true
                    },
                    { field: "price", headerName: "Price", filter: 'agNumberColumnFilter' },
                    { field: "description", headerName: "Description" },
                    {
                        headerName: "Category",
                        field: "category.name",
                        editable: true,
                        cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: categories
                        },
                        valueGetter: params => params.data.category.name,
                        width: 100
                    },
                    { field: "quantity", headerName: "Quantity" },
                    {
                        field: "productStatus",
                        headerName: "Status",
                        editable: true,
                        cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['ACTIVE', 'INACTIVE']
                        },
                        cellStyle: params => {
                            if (params.value === 'ACTIVE') {
                                return { color: 'green' };
                            } else if (params.value === 'INACTIVE') {
                                return { color: 'red' };
                            }
                        },
                    },

                ]);
            } else {
                console.log("No categories yet.");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setRowData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRowClick = (event: any) => {
        const selectedProductId = event.data.id;
        setSelectedProductId(selectedProductId);
        setModalShow(true);
    };

    const onRowClicked = useCallback(handleRowClick, []);

    const ImageRenderer = (params: any) => {
        const imageUrl = params.value || 'default_image_url';
        return <img src={imageUrl} className='img-fluid' />;
    };

    // const EditButton = (params: any) => {
    //     const handleEditClick = () => {
    //         const productId = params.data.id;
    //         setSelectedProductId(productId);
    //         setModalShow(true); // Show the modal when the edit button is clicked
    //     };

    //     return (
    //         <Button variant="info" onClick={handleEditClick}>Edit</Button>
    //     );
    // }

    const onSelectionChanged = useCallback((event: RowSelectedEvent) => {
        const rows = event.api.getSelectedNodes();
        const productIds = rows.map(node => node.data.id);
        setSelectedListProductId(productIds);
    }, []);

    const handleActiveSelectedProducts = async () => {
        if (selectedListProductId.length === 0) {
            console.log('No products selected');
            return;
        }

        try {
            const response = await activeProducts(selectedListProductId);
            console.log('Activating products:', selectedListProductId);
            if (response.code !== 1000) {
                throw new Error("Error activating the products");
            }
            fetchData();
            showToastMessage("Products activated successfully", 'success');
            setSelectedListProductId([]);
            console.log('Products activated successfully');
        } catch (error) {
            showToastMessage("Failed to activate selected products", 'error');
            console.error("Failed to activate selected products:", error);
        }
    };

    const handleDeleteSelectedProducts = async () => {
        if (selectedListProductId.length === 0) {
            console.log('No products selected');
            return;
        }

        try {
            const response = await deleteProducts(selectedListProductId);
            console.log('Deleting products:', selectedListProductId);
            if (response.code !== 1000) {
                throw new Error("Error deleting the products");
            }
            fetchData();
            showToastMessage("Products deleted successfully", 'success');
            setSelectedListProductId([]);
            console.log('Products deleted successfully');
        } catch (error) {
            showToastMessage("Failed to delete selected products", 'error');
            console.error("Failed to delete selected products:", error);
        }
    };

    return (
        <div className='custom'>
            <h1 className="pt-5 m-0">Products</h1>
            <CustomModal show={modalShow} onHide={() => setModalShow(false)} />

            <EditProduct productId={selectedProductId} show={modalShow} onHide={() => setModalShow(false)} isEdit={true} />

            {selectedListProductId.length > 0 && (
                <>
                    <button onClick={handleDeleteSelectedProducts} className="mb-3 delete-button">
                        Delete Selected Products
                    </button>
                    <button onClick={handleActiveSelectedProducts} className="mb-3 active-button">
                        Active Selected Products
                    </button>
                </>
            )}

            <div className="ag-theme-quartz pt-5" style={{ height: 700 }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    enableRangeSelection={true}
                    rowSelection="multiple"
                    suppressRowClickSelection={true}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 20, 50, 100]}
                    onSelectionChanged={onSelectionChanged}
                    onRowClicked={onRowClicked}
                    onRowSelected={onSelectionChanged}
                />
            </div>
        </div>
    );
}

export default Products;
