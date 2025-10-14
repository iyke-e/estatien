import React, { HtmlHTMLAttributes } from "react";

const CardWrapper = ({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`bg-gray-10 border border-gray-15 rounded-xl ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
