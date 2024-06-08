import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const showToastMessage = (message: string, type: 'success' | 'error' | 'info' | 'warning', options?: ToastOptions) => {
    const toastOptions = { ...defaultToastOptions, ...options };
    switch (type) {
        case 'success':
            toast.success(message, toastOptions);
            break;
        case 'error':
            toast.error(message, toastOptions);
            break;
        case 'info':
            toast.info(message, toastOptions);
            break;
        case 'warning':
            toast.warn(message, toastOptions);
            break;
        default:
            toast(message, toastOptions);
    }
};

const CustomToast: React.FC = () => {
    return <ToastContainer />;
};

export default CustomToast;
