import { isMobileDevice } from '@/utils/server/responsive';
import { FC } from 'react';

interface ServerLayoutProps<T extends object> {
  Desktop: FC<T>;
  Mobile: FC<T>;
}

const ServerLayout = <T extends object>({ Desktop, Mobile }: ServerLayoutProps<T>): FC<T> => {
  const Component: FC<T> = (props) => {
    const mobile = isMobileDevice();
    return mobile ? <Mobile {...props} /> : <Desktop {...props} />;
  };
  return Component;
};

export default ServerLayout;
