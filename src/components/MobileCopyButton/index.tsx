import { cn } from '@/utils/cn';
import { delay } from '@/utils/delay';
import { useState } from 'react';
import Button from '../Button';
import { CopyButtonProps } from '../CopyButton';

export const MobileCopyButton = ({ content, children, className, mode = 'dark', ...props }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const onCopyClick = async () => {
    if (!children) return;
    navigator.clipboard.writeText(content ?? String(children));
    setCopied(true);
    await delay(1000);
    setCopied(false);
  };

  return (
    <Button
      className={cn(className, {
        'border-[#00000029] hover:border-black/50': mode === 'light',
      })}
      iconLeft={copied ? 'check' : 'mail'}
      {...props}
      onClick={onCopyClick}
    />
  );
};
