import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

function Button({ className = '', children }: ButtonProps) {
  return (
    <button className={`rounded-2xl bg-lime-500 py-4 px-8 text-white  transition-all hover:bg-lime-600 ${className}`}>
      {children}
    </button>
  );
}

export default Button;
