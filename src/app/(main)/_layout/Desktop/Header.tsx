import { memo } from 'react';
import { Button } from '@/components/ui/Button/BaseButton';

const Header = memo(() => {
  return (
    <header className="h-[60px] bg-amber-50 transition-all delay-100">
      <div className="container mx-auto flex h-full items-center justify-between transition-all">
        <span className="text-2xl font-bold text-cyan-900">LOGO</span>
        <div className="flex items-center gap-2">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
});
Header.displayName = 'Header';
export default Header;
