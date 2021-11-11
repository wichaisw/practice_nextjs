import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling

interface MyButtonProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>,
  children: string | React.ComponentType<any>,
  href?: string
}

const MyButton = React.forwardRef(({ onClick, href, children }: MyButtonProps, ref: React.LegacyRef<HTMLAnchorElement>) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})

export default MyButton;
