"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      isLoading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      inline-flex items-center justify-center gap-2 
      font-medium rounded-xl 
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      active:scale-[0.98]
    `;

    // Variant styles
    const variantStyles = {
      primary: `
        bg-primary-light text-white
        hover:bg-primary-hover-light hover:shadow-lg hover:shadow-primary-light/25
        focus-visible:ring-primary-light focus-visible:ring-offset-background-light
        dark:bg-primary-dark dark:text-background-dark
        dark:hover:bg-primary-hover-dark dark:hover:shadow-primary-dark/25
        dark:focus-visible:ring-primary-dark dark:focus-visible:ring-offset-background-dark
      `,
      secondary: `
        bg-surface-light text-text-light
        hover:bg-border-light hover:shadow-md
        focus-visible:ring-primary-light focus-visible:ring-offset-background-light
        dark:bg-surface-dark dark:text-text-dark
        dark:hover:bg-border-dark
        dark:focus-visible:ring-primary-dark dark:focus-visible:ring-offset-background-dark
      `,
      accent: `
        bg-accent-light text-text-light
        hover:bg-accent-hover-light hover:shadow-lg hover:shadow-accent-light/30
        focus-visible:ring-accent-light focus-visible:ring-offset-background-light
        dark:bg-accent-dark dark:text-background-dark
        dark:hover:bg-accent-hover-dark dark:hover:shadow-accent-dark/30
        dark:focus-visible:ring-accent-dark dark:focus-visible:ring-offset-background-dark
      `,
      ghost: `
        bg-transparent text-text-light
        hover:bg-surface-light
        focus-visible:ring-primary-light focus-visible:ring-offset-background-light
        dark:text-text-dark
        dark:hover:bg-surface-dark
        dark:focus-visible:ring-primary-dark dark:focus-visible:ring-offset-background-dark
      `,
      outline: `
        bg-transparent text-primary-light
        border-2 border-primary-light
        hover:bg-primary-light hover:text-white
        focus-visible:ring-primary-light focus-visible:ring-offset-background-light
        dark:text-primary-dark dark:border-primary-dark
        dark:hover:bg-primary-dark dark:hover:text-background-dark
        dark:focus-visible:ring-primary-dark dark:focus-visible:ring-offset-background-dark
      `,
    };

    // Size styles
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${widthStyles}
      ${className}
    `
      .replace(/\s+/g, " ")
      .trim();

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
              <span className="flex-shrink-0">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
