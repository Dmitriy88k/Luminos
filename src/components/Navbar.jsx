import Logo from "../assets/logo.png"
import MenuIcon from "../assets/menu_icon.svg"
import CloseIcon from "../assets/cross_icon.svg"
import { useState, useEffect } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=> {
        if(menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    },[menuOpen])

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }    

    return (
        <div className="absolute top-0 left-0 w-full z-10">
        
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={Logo} alt="" className="w-28 lg:w-32"/>
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="" className="cursor-pointer hover:text-gray-400">Home</a>
                    <a href="" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="" className="cursor-pointer hover:text-gray-400">Testimonials</a>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
                <img src={MenuIcon} className="md:hidden w-7 cursor-pointer" alt="" onClick={handleMenuClick}/>
            </div>

            {/*--Mobile Menu--*/}
            <div className={`md:hidden ${menuOpen ? "fixed w-full" : "h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer" onClick={handleMenuClick}>
                    <img src={CloseIcon} className="w-6" alt="" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block" onClick={handleMenuClick}>Home</a>
                    <a href="#About" className="px-4 py-2 rounded-full inline-block" onClick={handleMenuClick}>About</a>
                    <a href="#Projects" className="px-4 py-2 rounded-full inline-block" onClick={handleMenuClick}>Projects</a>
                    <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block" onClick={handleMenuClick}>Testimonials</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;