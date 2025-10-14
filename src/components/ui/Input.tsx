import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="grid gap-2  ">
      <label htmlFor={inputId}>{label}</label>
      <input
        className="border px-4 py-3 bg-gray-10 rounded-lg border-gray-15"
        id={inputId}
        {...props}
      />
    </div>
  );
};

export default Input;
