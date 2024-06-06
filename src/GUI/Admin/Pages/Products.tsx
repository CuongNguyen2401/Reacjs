import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';
import { Product } from '../../../Model/Product';
import { getProductData, deleteProduct } from '../../../api/ProductAPI';
import { CustomModal } from '../Components/AddProduct';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import FunctionCellRenderer from '../Components/Function';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Products: React.FC = () => {
    const [rowData, setRowData] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProductData();
                console.log('Fetched data:', response);

                if (response && response.result) {
                    setRowData(response.result);
                } else {
                    console.error('Error fetching product data:', response);
                    setRowData([]);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
                setRowData([]);
            }
        }
        fetchData();
    }, []);


    const handleDeleteClick = (id: number) => {
        deleteProduct(id);
        console.log(`Deleting product with ID: ${id}`);
    };

    const handleEdit = () => {
        console.log("Editing product");
    };

    const [columnDefs] = useState<ColDef[]>([
        { field: "name", checkboxSelection: true, headerCheckboxSelection: true, cellEditor: 'agSelectCellEditor', headerName: "Name" },
        { field: "price", headerName: "Price", filter: 'agNumberColumnFilter' },
        { field: "description", headerName: "Description" },
        { field: "imageUrl", headerName: "Image URL" },
        { field: "categoryId", headerName: "Category ID" },
        {
            field: "function",
            headerName: "Actions",
            cellRenderer: FunctionCellRenderer,
            cellRendererParams: {
                onDelete: handleDeleteClick,
                onEdit: handleEdit,
            }
        }
    ]);

    return (
        <div className='custom'>
            <h1 className="pt-5 m-0">Products</h1>
            <CustomModal />
            <div className="ag-theme-quartz pt-5" style={{ height: 500 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    enableRangeSelection={true}
                    rowSelection="multiple"
                    suppressRowClickSelection={true}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
        </div>
    );
}

export default Products;
