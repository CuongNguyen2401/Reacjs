import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import '../css/Modal.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProduct } from '../../../api/ProductAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(5, 'Name must have at least 5 characters'),
    // title: z.string().min(5, 'Title must have at least 5 characters'),
    price: z.number().min(1, 'Price must be a positive number'),
    description: z.string().optional(),
    // quantity: z.number().min(1, 'Quantity must be at least 1'),
    category: z.string().min(1, 'Category is required'),
    imageUrl: z.string().url('Must be a valid URL'),
    // status: z.string().min(1, 'Status is required'),

});

type FormFields = z.infer<typeof productSchema>;

export const CustomModal = () => {
    const notify = () => {
        toast('🦄 Wow so easy!', {
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
    const { register, handleSubmit, formState: { errors }, trigger, setError } = useForm<FormFields>(
        { mode: 'all', resolver: zodResolver(productSchema) }
    );

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log("data", data)
    };

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (

        <>
            <Button variant="primary btn-lg" onClick={handleShow}>
                Add Product
            </Button>

            <Modal dialogClassName='customModal' show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <h1>Add Product</h1>
                    <a className='x-button' onClick={handleClose}></a>
                </Modal.Header>
                <Modal.Body>
                    <form noValidate className="col-md-12" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register('name')}
                                placeholder="Enter title"
                            // onBlur={() => trigger('title')}
                            />
                            {errors.name && <div className='error-modal'>{errors.name.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                {...register("price", {
                                    setValueAs: value => parseInt(value) || 0
                                })}
                                placeholder="Enter price"
                            // onBlur={() => trigger('price')}
                            />
                            {errors.price && <div className='error-modal'>{errors.price.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                {...register('description')}
                                placeholder="Enter description"
                            // onBlur={() => trigger('description')}
                            />
                            {errors.description && <div className='error-modal'>{errors.description.message}</div>}
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                                {...register("quantity", {
                                    setValueAs: value => parseInt(value) || 0
                                })}
                                placeholder="Enter quantity"
                            // onBlur={() => trigger('quantity')}
                            />
                            {errors.quantity && <div className='error-modal'>{errors.quantity.message}</div>}
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                                {...register('category')}
                                placeholder="Enter category"
                            // onBlur={() => trigger('category')}
                            />
                            {errors.category && <div className='error-modal'>{errors.category.message}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
                                {...register('imageUrl')}
                                placeholder="Enter image URL"
                            // onBlur={() => trigger('image')}
                            />
                            {errors.imageUrl && <div className='error-modal'>{errors.imageUrl.message}</div>}
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input
                                type="text"
                                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                                {...register('status')}
                                placeholder="Enter status"
                            // onBlur={() => trigger('status')}
                            />
                            {errors.status && <div className='error-modal'>{errors.status.message}</div>}
                        </div> */}
                        {/* <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <input
                                type="number"
                                className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                                {...register('rating')}
                                placeholder="Enter rating"
                            // onBlur={() => trigger('rating')}
                            />
                            {errors.rating && <div className='error-modal'>{errors.rating.message}</div>}
                        </div> */}
                        <button onClick={notify} className="submit-button" type="submit" >
                            Submit
                        </button>

                    </form>
                </Modal.Body>


                <Modal.Footer>
                    <button className="close-button" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
