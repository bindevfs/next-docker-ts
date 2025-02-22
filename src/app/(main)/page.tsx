'use client';
import { Button } from '@/components/ui/Button/BaseButton';
import useModal from '@/components/Modal/useModal';

const Common = () => {
  return (
    <div className="min-h-[320px] w-full overflow-hidden border border-neutral-300 bg-neutral-50">
      <div className="p-3">
        <h2>Header Modal</h2>
      </div>
      <div className="flex max-h-[90vh] flex-col overflow-hidden overflow-y-auto">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
    </div>
  );
};

const Page = () => {
  const [onPresentNftClaimModal] = useModal(<Common />);
  return (
    <div>
      Home page
      <Button onClick={onPresentNftClaimModal}>iwefwef</Button>
    </div>
  );
};
export default Page;
