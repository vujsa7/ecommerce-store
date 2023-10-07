import React from "react";

export interface TextInputProperties
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  type?: "text" | "password";
}

const TextInput = ({
  label,
  className,
  type = "text",
  ...properties
}: TextInputProperties) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xsm ml-1">{label}</span>
      <input
        className="border-[0.3px] border-fw-darkgrey rounded-lg bg-fw-grey px-2 py-3 outline-none text-sm"
        type={type}
        {...properties}
      />
    </div>
  );
};

export default TextInput;
