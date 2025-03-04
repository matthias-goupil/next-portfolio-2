import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  default:
    "bg-gradient-to-r from-[#9123f8] to-[#6a2bff] p-2 rounded-sm border-0",
};
type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  href,
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={twMerge(variants[variant], className)} href={href}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={twMerge(variants[variant], className)} {...props} />
  );
}

export default Button;
