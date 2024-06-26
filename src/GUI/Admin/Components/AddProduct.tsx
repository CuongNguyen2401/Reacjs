import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import '../css/Modal.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProduct } from '../../../api/ProductAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Status } from '../../../Model/Enums/Status';
import { CategoryRequest } from '../../../Model/Category';
import { getCategoryData } from '../../../api/CategoryAPI';
import DragFileAndPreview from './DragFileAndPreview';
import ReactLoading from 'react-loading';

// Define the Zod schema
const productSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(5, 'Name must have at least 5 characters'),
    price: z.number().nonnegative('Price must be a non-negative number'),
    salePrice: z.number().nonnegative('Sale price must be a non-negative number'),
    description: z.string().optional(),
    categoryId: z.number().nonnegative('Category ID must be a non-negative number'),
    quantity: z.number().int().nonnegative('Quantity must be a non-negative integer'),
    productStatus: z.enum([Status.ACTIVE, Status.INACTIVE])
});

type FormFields = z.infer<typeof productSchema>;

interface CustomModalProps {
    show: boolean;
    onHide: () => void;

}

export const CustomModal: React.FC<CustomModalProps> = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<CategoryRequest[]>([]);
    const [showModal, setShowModal] = useState(false);

    const notify = (message: string) => {
        toast(message, {

            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategoryData();
                if (response && response.result) {
                    setCategories(response.result);
                } else {
                    setCategories([]);
                    console.error('Error fetching categories:', response);
                }
            } catch (error) {
                setCategories([]);
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormFields>(
        { mode: 'all', resolver: zodResolver(productSchema) }
    );

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const id = data.id || 0;
        const product = {
            id,
            name: data.name,
            price: data.price,
            salePrice: data.salePrice,
            description: data.description || '',
            categoryId: data.categoryId,
            quantity: data.quantity,
            productStatus: data.productStatus
        };

        if (!selectedFile) {
            toast.error('No file selected!');
            return;
        }

        const formdata = new FormData();
        formdata.append('product', JSON.stringify(product));
        formdata.append('file', selectedFile);
        setIsLoading(true);

        try {
            await addProduct(formdata);
            toast.success('Product added successfully!');

            handleClose();
            setSelectedFile(null);
            reset();
        } catch (error) {
            toast.error('Failed to add product.');
            console.error("Error adding product:", error);
        }

        setIsLoading(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        if (setShowModal) {
            setShowModal(false);
        }
    };

    return (
        <>
            <Button variant="primary btn-lg" onClick={handleShow}>
                Add Product
            </Button>
            <Modal dialogClassName='customModal' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <h1>Add Product</h1>
                    <span className='x-button' onClick={handleClose}></span>
                </Modal.Header>
                <Modal.Body>
                    <form noValidate className="col-md-12" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register('name')}
                                placeholder="Enter name"
                            />
                            {errors.name && <div className='error-modal'>{errors.name.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                {...register("price", {
                                    setValueAs: value => parseFloat(value) || 0
                                })}
                                placeholder="Enter price"
                            />
                            {errors.price && <div className='error-modal'>{errors.price.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="salePrice">Sale Price</label>
                            <input
                                type="number"
                                className={`form-control ${errors.salePrice ? 'is-invalid' : ''}`}
                                {...register("salePrice", {
                                    setValueAs: value => parseFloat(value) || 0
                                })}
                                placeholder="Enter sale price"
                            />
                            {errors.salePrice && <div className='error-modal'>{errors.salePrice.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                {...register('description')}
                                placeholder="Enter description"
                            />
                            {errors.description && <div className='error-modal'>{errors.description.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                                {...register("quantity", {
                                    setValueAs: value => parseInt(value) || 0
                                })}
                                placeholder="Enter quantity"
                            />
                            {errors.quantity && <div className='error-modal'>{errors.quantity.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryId">Category</label>
                            <select
                                className={`form-control ${errors.categoryId ? 'is-invalid' : ''}`}
                                {...register('categoryId', {
                                    setValueAs: value => parseInt(value) || 0
                                })}
                            >
                                <option value=''>Select category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                                {/* Add more options as needed */}
                            </select>
                            {errors.categoryId && <div className='error-modal'>{errors.categoryId.message}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="productStatus">Status</label>
                            <select
                                className={`form-control ${errors.productStatus ? 'is-invalid' : ''}`}
                                {...register('productStatus')}
                            >
                                {Object.keys(Status).map((key) => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </select>
                            {errors.productStatus && <div className='error-modal'>{errors.productStatus.message}</div>}
                        </div>
                        <div className="form-group">
                            <DragFileAndPreview
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile}
                            />
                        </div>
                        <button className="submit-button" type="submit">
                            Submit
                        </button>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="close-button" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
                {isLoading && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10
                    }}>
                        <ReactLoading type="spin" color="#ffebcd" height={'10%'} width={'10%'} />
                        <h2 style={{ color: '#ffebcd', marginTop: '10px' }}>Please Wait...</h2>
                    </div>
                )}

            </Modal>
        </>
    )
}
