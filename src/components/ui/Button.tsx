import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    btntype?: "outline" | "primary" | "black"
}


const Button = ({ children, btntype = "primary" }: ButtonProps) => {
    return (
        <button className={` rounded-2xl px-5 py-3.5 cursor-pointer 
        ${btntype === "black" ? "bg-gray-80 border border-gray-15" :
                btntype === "outline" ? "border" :
                    "bg-purple-60"}
        `}>
            {children}
        </button>
    )
}

export default Button