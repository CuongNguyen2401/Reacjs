import React from 'react';

interface FunctionCellRendererProps {
    productId: number;
    onDelete: (productId: number) => void;
    onEdit: () => void;
}

const FunctionCellRenderer: React.FC<FunctionCellRendererProps> = ({ productId, onDelete, onEdit }) => {
    const handleDeleteClick = () => {
        onDelete(productId);
    };

    return (
        <div>
            <span onClick={handleDeleteClick} style={{ cursor: 'pointer' }}>
                <i className="fa fa-trash"></i>
            </span>
            <span onClick={onEdit} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                <i className="fa fa-pencil"></i>
            </span>
        </div>
    );
}

export default FunctionCellRenderer;
