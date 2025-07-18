import React from 'react';


export function ButtonSolid({
    text,
    onClick,
    disable,
    hidden,
    children,
    link,
    title,
    icon,
    className,
}) {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            hidden={hidden}
            className={`button-solid button ${className}`}
            title={title}
            {...(link? { href: link } : {})}
        >
            {icon && <span className={`icon ${icon}`} />}
            {text}
            {children}
        </button>
    );
}

export function ButtonOutline({
    text,
    type = "button",
    className,
    onClick,
    disabled,
    hidden,
    children,
    link,
    title,
    icon,
    position = "left",
  }) {
    return (
      <>
        <button
          className={`button button-outline ${className}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
          hidden={hidden}
          title={title}
        >
          {icon && position === "left" && icon}
          {text ?? children}
          {icon && position === "right" && icon}
        </button>
      </>
    );
  }
   