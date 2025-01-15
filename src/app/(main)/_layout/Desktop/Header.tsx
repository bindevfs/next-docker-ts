import {memo} from "react";
import {Button} from "@/components/ui/Button/BaseButton";

const Header = memo(() => {
    return (
        <header className="bg-amber-50 h-[60px] transition-all delay-100">
            <div className="flex justify-between items-center container mx-auto h-full transition-all">
                <span className="text-2xl font-bold text-cyan-900">LOGO</span>
                <div className="flex items-center gap-2">
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
            </div>
        </header>
    )
})
Header.displayName = 'Header'
export default Header;