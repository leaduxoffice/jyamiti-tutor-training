import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, actionType }) => {
    if (!isOpen) return null;

    const getButtonColor = () => {
        switch(actionType) {
            case 'select':
                return 'bg-green-600 hover:bg-green-700';
            case 'interview':
                return 'bg-purple-600 hover:bg-purple-700';
            case 'reject':
                return 'bg-red-600 hover:bg-red-700';
            default:
                return 'bg-blue-600 hover:bg-blue-700';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-slate-300 mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 ${getButtonColor()} text-white rounded-lg transition-colors`}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;