import React, { SelectHTMLAttributes } from "react";

interface SelectProp extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id?: string;
  wrapperClassName?: string;
}

const CustomSelect = ({ label, id, wrapperClassName }: SelectProp) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`grid gap-2 ${wrapperClassName} `}>
      <label htmlFor={inputId}>{label}</label>

      <select className="border outline-0 px-4 py-3 bg-gray-10 rounded-lg border-gray-15">
        <option>Helow</option>
        <option>Helow</option>
        <option>Helow</option>
        <option>Helow</option>
      </select>
    </div>
  );
};

export default CustomSelect;
