import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="absolute top-0 right-0 h-[100vh] min-w-[320px] z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white h-[100vh] rounded shadow-lg p-6 min-w-[320px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <div className="h-[100vh] flex flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;