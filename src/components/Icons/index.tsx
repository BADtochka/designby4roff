import { memo, SVGProps } from 'react';
import { cn } from '../../utils/cn';
import { icons } from './icons';

export type IconName = keyof ReturnType<typeof icons>;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const IconRender = ({ name, ...props }: IconProps) => icons(props)[name];

const Icon = ({ name, className, ...props }: IconProps) => {
  return <IconRender name={name} className={cn('size-5', className)} {...props} />;
};

export default memo(Icon);
