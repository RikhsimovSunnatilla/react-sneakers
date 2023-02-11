import { ReactNode } from 'react';

interface IconButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function IconButton({ children, className = '', onClick }: IconButtonProps) {
  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-100 ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
