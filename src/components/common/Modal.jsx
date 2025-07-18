import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ isOpen, onClose, logo, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-start bg-black bg-opacity-40">
      <div
        className={`flex relative flex-col items-center p-4 sm:p-8 mt-32 sm:mt-32 w-full max-w-full sm:max-w-lg bg-white rounded-2xl shadow-lg transition-all duration-700 ease-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        style={{
          transitionProperty: 'opacity, transform',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-2xl font-bold text-gray-400 bg-white rounded-full sm:-top-2 sm:-right-2 hover:text-gray-600 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>
        {/* Logo */}
        {logo && <div className="mb-4">{logo}</div>}
        {/* Modal content */}
        <div className="w-full max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  logo: PropTypes.node,
  children: PropTypes.node,
};
