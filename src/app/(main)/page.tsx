'use client';
import {Button} from "@/components/ui/Button/BaseButton";
import useModal from "@/components/Modal/useModal";

const Common = ({ id, onDismiss } ) => {
    console.log(id)
    return (
        <div className="overflow-hidden bg-neutral-50 border border-neutral-300 w-full min-h-[320px]">
            <div className="p-3">
                <h2>Header Modal</h2>
            </div>
            <div className="flex flex-col max-h-[90vh] overflow-hidden overflow-y-auto">
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
    )
}

const Page = () => {
    const [onPresentNftClaimModal] = useModal(<Common id={2} />)
    return (
        <div>
            Home page
            <Button onClick={onPresentNftClaimModal}>
                iwefwef
            </Button>
        </div>
    )
}
export default Page;