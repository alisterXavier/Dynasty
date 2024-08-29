// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client';
import { cn } from '@/utils/cn';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import * as React from 'react';

const Input = React.forwardRef(
  ({ className, isDark, onChange, multiple, type, ...props } : any, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY } : any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-sm transition duration-300 group/input"
      >
        <input
          type={type}
          multiple={multiple}
          className={cn(
            `flex h-10 w-full border-none ${
              isDark ? 'bg-zinc-800' : 'bg-offwhite'
            } ${
              isDark ? 'text-offwhite' : 'text-darkButNotBlack'
            } rounded-sm px-3 py-2 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
          onChange={onChange}
        />
      </motion.div>
    );
  }
);

const TextArea = React.forwardRef(
  ({ isDark, className, type, ...props }: any, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-sm transition duration-300 group/input"
      >
        <textarea
          type={type}
          className={cn(
            `flex w-full border-none  ${
              isDark ? 'bg-zinc-800' : 'bg-offwhite'
            } ${
              isDark ? 'text-offwhite' : 'text-darkButNotBlack'
            } rounded-sm px-3 py-2 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none border-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400 h-[200px]
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = 'Input';
TextArea.displayName = 'Textarea';
export { Input, TextArea };

