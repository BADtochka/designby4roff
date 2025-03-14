import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import Icon, { IconName } from '../Icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: IconName;
  iconRight?: IconName;
  active?: boolean;
}

export default function Button({ iconLeft, iconRight, active, className, children, ...props }: ButtonProps) {
  return (
    <button
      data-active={active}
      className={cn(
        `flex h-[72px] cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#ffffff]/[.16] bg-black
        px-8 outline-none hover:border-[#ffffff]/[.32] data-[active="true"]:bg-white data-[active="true"]:text-black`,
        { 'w-[72px] p-0': !children },
        className,
      )}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} className={cn({ 'size-8': !children })} />}
      {children}
      {iconRight && <Icon name={iconRight} className={cn({ 'size-8': !children })} />}
    </button>
  );
}
