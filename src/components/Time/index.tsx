import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useLocalization } from '@/hooks/useLocalization';
import { formatInTimeZone } from 'date-fns-tz';
import { memo, useEffect, useState } from 'react';

const Time = () => {
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);

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
      <p>{GL.moscow} (GMT+3)</p>
      <span>•</span>
      <p>{tzTime}</p>
    </div>
  );
};

export default memo(Time);
