import React, { HtmlHTMLAttributes } from "react";

interface CardWrapperProp extends HtmlHTMLAttributes<HTMLDivElement> {}

const CardWrapper = ({ children, className }: CardWrapperProp) => {
  return (
    <div className={`bg-gray-10 border border-gray-15 rounded-xl ${className}`}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default CardWrapper;
