import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { ColDef, ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';
import { Product, products } from '../../../BLL/Product';
import { CustomModal } from '../Components/Modal';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';



ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Products: React.FC = () => {
    const [rowData, setRowData] = useState<Product[]>(products);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [columnDefs] = useState<ColDef[]>([
        {
            field: "make",
            checkboxSelection: true,
            headerCheckboxSelection: true,
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"],
            },
        },
        { field: "model" },
        { field: "price", filter: 'agNumberColumnFilter' },
        { field: "electric" },
        {
            field: "month",
            comparator: (valueA: string, valueB: string) => {
                const months = [
                    'January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December',
                ];
                const idxA = months.indexOf(valueA);
                const idxB = months.indexOf(valueB);
                return idxA - idxB;
            },
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
                    paginationPageSizeSelector={[10, 25, 50]}
                />
            </div>
        </div>

    );
}

export default Products;
