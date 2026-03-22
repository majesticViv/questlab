"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "header";

type BaseProps = {
  variant?: ButtonVariant;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

const variants: Record<ButtonVariant, string> = {
  primary:
    "px-8 py-3.5 text-[1.0625rem] rounded-lg",
  header:
    "px-5 py-2 text-sm rounded-lg",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold text-white bg-purple-accent hover:bg-purple-light active:translate-y-0 hover:-translate-y-px transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px]";
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor;
    return <a href={href} className={cls} {...rest} />;
  }

  return <button className={cls} {...(props as AsButton)} />;
}
