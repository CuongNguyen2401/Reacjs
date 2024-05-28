import React from 'react';

interface FunctionCellRendererProps {
    productId: number; // Assuming productId is a string, change it accordingly if it's a different type
    onDelete: (productId: number) => void; // Modify onDelete to accept productId
    onEdit: () => void;
}

const FunctionCellRenderer: React.FC<FunctionCellRendererProps> = ({ productId, onDelete, onEdit }) => {
    const handleDeleteClick = () => {
        onDelete(productId);
    };

    return (
        <div>
            <span onClick={handleDeleteClick} style={{ cursor: 'pointer' }}>
                <i className="fa fa-trash"></i> {/* Font Awesome delete icon */}
            </span>
            <span onClick={onEdit} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                <i className="fa fa-pencil"></i> {/* Font Awesome edit icon */}
            </span>
        </div>
    );
}

export default FunctionCellRenderer;
