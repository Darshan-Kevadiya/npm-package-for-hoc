import React , { MouseEventHandler, ReactNode } from 'react'
import "./Button.scss"

interface ButtonProps {
    className: string,
    disabled: boolean,
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>,
    backgroundColor?: string,
    defaultBtn?: string,
    label: string
    icon?: string,
    fileName?: string,
    reverse?: boolean
  }

const Button = ({ className, disabled, children, onClick, backgroundColor, defaultBtn, label, icon, fileName, reverse }: ButtonProps) => {
    const style = {
        backgroundColor
      }

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`button ${defaultBtn} ${className} ${disabled ? ' disabledSaveBtn' : ''}${reverse ? 'reverse' : ''}`}
    >
      {icon && <i className={`${icon} btn-icon`} />}
      {label ? label : children}
    </button>
  )
}

export default Button