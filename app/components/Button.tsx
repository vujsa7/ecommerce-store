export type ButtonProperties = {
  children: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProperties) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-lg bg-fw-blue text-white py-2
       flex justify-center text-center cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
