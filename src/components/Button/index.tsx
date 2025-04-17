import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from 'react';
import { Link } from 'react-router';
import { cn } from '../../utils/cn';
import Icon, { IconName } from '../Icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: IconName;
  iconRight?: IconName;
  iconSize?: string;
  active?: boolean;
  link?: string;
  target?: HTMLAttributeAnchorTarget;
}

export default function Button({
  iconLeft,
  iconRight,
  active,
  className,
  children,
  iconSize,
  target,
  link,
  ...props
}: ButtonProps) {
  return (
    <>
      {link ? (
        <Link to={link} target={target} viewTransition>
          <button
            data-active={active}
            className={cn(
              `flex h-[72px] cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#ffffff]/[.16] bg-black px-8 outline-none hover:border-[#ffffff]/[.32] data-[active="true"]:bg-white data-[active="true"]:text-black`,
              { 'w-[72px] p-0': !children },
              className,
            )}
            {...props}
          >
            {iconLeft && (
              <Icon
                name={iconLeft}
                style={{ width: iconSize, height: iconSize }}
                className={cn({ 'size-8': !children })}
              />
            )}
            {children}
            {iconRight && (
              <Icon
                name={iconRight}
                style={{ width: iconSize, height: iconSize }}
                className={cn({ 'size-8': !children })}
              />
            )}
          </button>
        </Link>
      ) : (
        <button
          data-active={active}
          className={cn(
            `flex h-[72px] cursor-pointer items-center justify-center gap-1.5 rounded-full border border-[#ffffff]/[.16] bg-black px-8 outline-none hover:border-[#ffffff]/[.32] data-[active="true"]:bg-white data-[active="true"]:text-black`,
            { 'w-[72px] p-0': !children },
            className,
          )}
          {...props}
        >
          {iconLeft && (
            <Icon
              name={iconLeft}
              style={{ width: iconSize, height: iconSize }}
              className={cn({ 'size-8': !children })}
            />
          )}
          {children}
          {iconRight && (
            <Icon
              name={iconRight}
              style={{ width: iconSize, height: iconSize }}
              className={cn({ 'size-8': !children })}
            />
          )}
        </button>
      )}
    </>
  );
}
