import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => (
  <motion.button
    ref={ref}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center rounded-full transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${{
        primary: 'bg-brand-primary text-[#0a0e17] hover:bg-brand-accent shadow-lg shadow-brand-primary/20 font-bold',
        secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90',
        ghost: 'bg-transparent text-slate-600 hover:text-brand-primary hover:bg-brand-primary/10',
        outline: 'bg-transparent border border-brand-primary/50 text-brand-primaryText hover:text-brand-primary hover:bg-brand-primary/10'
      }[variant]
      } ${{
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base font-medium',
        lg: 'px-8 py-4 text-lg font-bold'
      }[size]
      } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
));

Button.displayName = 'Button';

export default Button;
