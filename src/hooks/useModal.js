import { useState } from 'react';

export const useModal = ({ onOpen, onClose, onToggle } = {}) => {
    const [status, setStatus] = useState(false);
    const open = () => {
        setStatus(true);
        onOpen && onOpen();
    };
    const close = () => {
        setStatus(false);
        onClose && onClose();
    };
    const toggle = () => {
        setStatus(!status);
        onToggle && onToggle();
    };
    return { status, open, close, toggle };
}