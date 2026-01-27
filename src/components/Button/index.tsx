import { motion } from 'framer-motion';
import {
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
  memo,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useDevice } from '@/hooks/useDevice';
import { Link } from '@tanstack/react-router';
import { cn } from '../../utils/cn';
import Icon, { IconName } from '../Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: IconName;
  iconRight?: IconName;
  iconSize?: string;
  active?: boolean;
  link?: string;
  target?: HTMLAttributeAnchorTarget;
  animation?: boolean;
}

interface ButtonContentProps {
  isHovered: boolean;
  animation: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconSize?: string;
  onChangeWidth: (width: number) => void;
}

const ButtonContent = ({
  children,
  isHovered,
  animation,
  iconLeft,
  iconRight,
  iconSize,
  onChangeWidth,
}: PropsWithChildren<ButtonContentProps>) => {
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!childRef.current) return;
    onChangeWidth(childRef.current.clientWidth);
  });

  return (
    <>
      <motion.div
        initial={false}
        transition={{ duration: 0.3 }}
        // style={{ transform: 'translateX(-50%)' }}
        ref={childRef}
        className={cn('flex items-center gap-1.5', {
          'absolute left-1/2 -translate-x-1/2': animation,
        })}
        animate={{ y: isHovered && animation ? -100 : 0 }}
      >
        {iconLeft && (
          <Icon name={iconLeft} style={{ width: iconSize, height: iconSize }} className={cn({ 'size-8': !children })} />
        )}
        {children}
        {iconRight && (
          <Icon
            name={iconRight}
            style={{ width: iconSize, height: iconSize }}
            className={cn({ 'size-8': !children })}
          />
        )}
      </motion.div>
      <motion.div
        initial={false}
        transition={{ duration: 0.3 }}
        style={{ transform: 'translateX(-50%)' }}
        className={cn('hidden items-center gap-1.5', {
          'left-1/2 flex': animation,
        })}
        animate={{ y: isHovered && animation ? 0 : 100 }}
      >
        {iconLeft && (
          <Icon name={iconLeft} style={{ width: iconSize, height: iconSize }} className={cn({ 'size-8': !children })} />
        )}
        {children}
        {iconRight && (
          <Icon
            name={iconRight}
            style={{ width: iconSize, height: iconSize }}
            className={cn({ 'size-8': !children })}
          />
        )}
      </motion.div>
    </>
  );
};

const Button = ({
  iconLeft,
  iconRight,
  active,
  className,
  children,
  iconSize,
  target,
  link,
  animation = true,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(100);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { browser } = useDevice();
  const animationEnabled = browser !== 'firefox' && animation;

  const getHorizontalPadding = () => {
    if (!buttonRef.current) return 0;
    if (browser === 'Firefox' || !('computedStyleMap' in buttonRef.current)) return 0;
    const computedPadding = buttonRef.current?.computedStyleMap().get('padding')?.toString();
    const computedGap = buttonRef.current?.computedStyleMap().get('gap')?.toString().replace('px', '');
    if (!buttonRef.current || !computedPadding || !computedGap) return 0;
    const paddingArray = computedPadding.split(' ');
    const numberGap = Number.isNaN(Number(computedGap)) ? 0 : Number(computedGap);
    // console.log(computedGap.toString(), numberGap, Number.isNaN(Number(computedGap)));
    return Number(paddingArray[paddingArray.length > 1 ? 1 : 0].replace('px', '')) * 2 + numberGap;
  };

  const changeWidth = (width: number) => {
    if (!buttonRef.current) return;
    const xPadding = getHorizontalPadding();
    setWidth(width + xPadding);
  };

  return (
    <>
      {link ? (
        <Link className='block w-full' to={link} from='/' onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
          <button
            ref={buttonRef}
            data-active={active}
            cursor-scale={2}
            style={{ minWidth: animationEnabled ? width : 'unset' }}
            className={cn(
              `relative flex h-[72px] cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-full border
                border-[#ffffff]/[.16] px-8 outline-none hover:border-[#ffffff]/[.32] data-[active="true"]:bg-white
                data-[active="true"]:text-black`,
              { 'w-[72px] p-0': !children },
              className,
            )}
            {...props}
          >
            <ButtonContent
              animation={!!animationEnabled}
              iconLeft={iconLeft}
              iconRight={iconRight}
              iconSize={iconSize}
              isHovered={hovered}
              onChangeWidth={changeWidth}
            >
              {children}
            </ButtonContent>
          </button>
        </Link>
      ) : (
        <button
          ref={buttonRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          style={{ minWidth: animationEnabled ? width : 'unset' }}
          data-active={active}
          cursor-scale={2}
          className={cn(
            `relative flex h-[72px] cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-full border
              border-[#ffffff]/[.16] px-8 outline-none hover:border-[#ffffff]/[.32] data-[active="true"]:bg-white
              data-[active="true"]:text-black`,
            { 'w-[72px] p-0': !children },
            className,
          )}
          {...props}
        >
          <ButtonContent
            animation={!!animationEnabled}
            iconLeft={iconLeft}
            iconRight={iconRight}
            iconSize={iconSize}
            isHovered={!!animationEnabled && hovered}
            onChangeWidth={changeWidth}
          >
            {children}
          </ButtonContent>
        </button>
      )}
    </>
  );
};

export default memo(Button);
