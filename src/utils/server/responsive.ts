import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const isMobileDevice = () => {
  if (process === 'undefined') {
    throw new Error('[Server method] server error');
  }
  const { get } = headers();
  const ua = get('user-agent');

  const device = new UAParser(ua || '').getDevice();
  console.log('device', device);
  return device.type === 'mobile';
};
