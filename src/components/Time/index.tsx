import { useI18nContext } from '@/i18n/i18n-react';
import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';

export default function Time() {
  const { LL } = useI18nContext();
  const [tzTime, setTZTime] = useState('');
  const updateTime = () => setTZTime(formatInTimeZone(new Date(), 'Europe/Moscow', 'HH:mm:ss'));

  useEffect(() => updateTime(), []);
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='flex items-center gap-2.5 opacity-30'>
      <p>{LL.blocks.main.moscow()} (GMT +3)</p>
      <span>•</span>
      <p>{tzTime}</p>
    </div>
  );
}
