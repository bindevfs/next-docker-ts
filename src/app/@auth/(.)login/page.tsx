'use client';
import { ModalV2 } from '@/components/Modal/ModalV2';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const handleDismiss = () => {
    router.back();
  };
  return (
    <ModalV2 isOpen onDismiss={handleDismiss}>
      <div>
        <h2>MODAL LOGIN</h2>
      </div>
    </ModalV2>
  );
}
