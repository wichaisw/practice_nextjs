import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling

interface IMyButtonProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>,
  children: string | React.ComponentType<any>,
  href?: string
}

const MyButton: ForwardRefExoticComponent<IMyButtonProps & RefAttributes<HTMLAnchorElement>> = React.forwardRef(({ onClick, href, children }: IMyButtonProps, ref: React.LegacyRef<HTMLAnchorElement>) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})

export default MyButton;
