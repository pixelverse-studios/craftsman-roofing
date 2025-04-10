// src/components/ui/button.tsx
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
        | 'primary'
        | 'cta'
        | 'cta-invert'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'

        return (
            <Comp
                className={cn(
                    // Make btn class always apply first
                    'btn',
                    // Then variant classes
                    {
                        'btn-cta': variant === 'cta',
                        'btn-cta-invert': variant === 'cta-invert',
                        'btn-default': variant === 'default',
                        'btn-destructive': variant === 'destructive',
                        'btn-outline': variant === 'outline',
                        'btn-secondary': variant === 'secondary',
                        'btn-ghost': variant === 'ghost',
                        'btn-link': variant === 'link',
                        'btn-primary': variant === 'primary'
                    },
                    // Then size classes
                    {
                        'btn-default-size': size === 'default' || !size,
                        'btn-sm': size === 'sm',
                        'btn-lg': size === 'lg',
                        'btn-icon': size === 'icon'
                    },
                    // Allow custom classes to override
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button }
