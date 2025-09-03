import { useState, useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={twMerge(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* 배경 오버레이 */}
      <div
        onClick={onClose}
        className={twMerge(
          'absolute inset-0 bg-black transition-opacity duration-300',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
      />

      {/* 모달 컨텐츠 */}
      <div
        className={twMerge(
          'relative z-10 bg-white rounded-2xl shadow-xl p-6 w-[400px] transform transition-all duration-300',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        {children}
        <button
          onClick={onClose}
          className={twMerge(
            'absolute top-3 right-3 text-gray-500 transition-all duration-200'
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
