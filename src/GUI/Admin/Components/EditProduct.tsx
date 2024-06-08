import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import '../css/Modal.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProduct, updateProduct, getProductById } from '../../../api/ProductAPI'; // Update the import to include updateProduct
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

interface EditProductProps {
    productId: number | null;
    show: boolean;
    onHide: () => void;
    isEdit: boolean;
}

export const EditProduct: React.FC<EditProductProps> = ({ productId, show, onHide, isEdit }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<CategoryRequest[]>([]);
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormFields>(
        { mode: 'all', resolver: zodResolver(productSchema) }
    );

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

        const fetchProduct = async () => {
            if (isEdit && productId !== null) {
                const product = await getProductById(productId);
                if (product) {
                    setValue('name', product.name);
                    setValue('price', product.price);
                    setValue('salePrice', product.salePrice);
                    setValue('description', product.description);
                    setValue('categoryId', product.categoryId);
                    setValue('quantity', product.quantity);
                    setValue('productStatus', product.productStatus);

                }
            }
        };

        fetchCategories();
        fetchProduct();
    }, [isEdit, productId, setValue]);


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const product = {
            id: productId,
            name: data.name,
            price: data.price,
            salePrice: data.salePrice,
            description: data.description || '',
            categoryId: data.categoryId,
            quantity: data.quantity,
            productStatus: data.productStatus
        };

        if (!selectedFile && !isEdit) {
            toast.error('No file selected!');
            return;
        }

        const formdata = new FormData();
        formdata.append('product', JSON.stringify(product));
        if (selectedFile) {
            formdata.append('file', selectedFile);
        }
        setIsLoading(true);

        try {
            if (isEdit) {
                await updateProduct(formdata);
                toast.success('Product updated successfully!');
            } else {
                console.log('Adding product:', product);
                toast.success('Product added successfully!');
            }

            handleClose();
            setSelectedFile(null);
            reset();
        } catch (error) {
            toast.error(`Failed to ${isEdit ? 'update' : 'add'} product.`);
            console.error(`Error ${isEdit ? 'updating' : 'adding'} product:`, error);
        }

        setIsLoading(false);
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        onHide();
    };

    return (
        <>
            <Modal dialogClassName='customModal' show={show} onHide={handleClose}>
                <Modal.Header>
                    <h1>{isEdit ? 'Edit Product' : 'Add Product'}</h1>
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
                        <button className="submit-button">
                            {isLoading ? (
                                <ReactLoading type='spin' color='#fff' height={20} width={20} />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    );
};
