import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [show, setShow] = useState(isOpen);

  // isOpen 값이 변할 때 상태 업데이트
  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300); // transition 시간과 동일
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        transition-opacity duration-300 
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* 배경 오버레이 */}
      <div
        className={`
          absolute inset-0 bg-black transition-opacity duration-300
          ${isOpen ? "opacity-50" : "opacity-0"}
        `}
        onClick={onClose}
      />

      {/* 모달 컨텐츠 */}
      <div
        className={`
          relative z-10 bg-white rounded-2xl shadow-xl p-6 w-[400px]
          transform transition-all duration-300
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
