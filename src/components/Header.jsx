
import NavBar from "../components/Navbar"
import headerImg from "../assets/header_img.png"
import { motion } from "framer-motion"

const Header = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{once: true}}  className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: `url(${headerImg})`}} id="Header">
            <NavBar/>
            <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that match your dreams</h2>
                <div className="space-x-6 mt-16">
                    <a href="#Projects" className="border border-white px-8 py-3 rounded cursor-pointer active:scale-95 transition-all delay-75">Projects</a>
                    <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded cursor-pointer active:scale-95 transition-all delay-75">Contact Us</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Header;