import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-sans font-semibold rounded-full transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg'

  const variants = {
    primary: 'bg-radoc-green text-radoc-cream hover:bg-radoc-green-deep',
    secondary: 'bg-radoc-cream-2 text-radoc-ink hover:bg-radoc-gold-soft',
    outline: 'border-2 border-radoc-gold text-radoc-gold hover:bg-radoc-gold hover:text-radoc-cream',
    danger: 'bg-radoc-red text-radoc-cream hover:opacity-90',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
