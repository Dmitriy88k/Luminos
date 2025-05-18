import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start pb-10">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={Logo} alt="" className="w-30 cursor-pointer ml-2"/>
                    <p className="text-gray-400 mt-5">Luminous Property — Your trusted partner in finding dream homes and smart investments. We bring transparency, expertise, and personalized service to every step of your real estate journey.</p>
                </div>
                <div className="w-full mt-10 md:w-1/8 mb-8 md:mb-0">
                    <h3 className="text-gray-300 text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className=" hover:text-white">Home</a>
                        <a href="#About" className=" hover:text-white">About Us</a>
                        <a href="#Contact" className=" hover:text-white">Contact Us</a>
                        <a href="#" className=" hover:text-white">Privacy Policy</a>
                    </ul>
                </div>
                <div className="w-full mt-10 md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-gray-300 text-lg font-bold mb-4">Subscribe and Stay Updated</h3>
                    <p className="text-gray-400 mb-4 max-w-80">Weekly updates on everything real estate — from market shifts to dream homes.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"/>
                        <button className="py-2 px-4 rounded bg-blue-500 text-white cursor-pointer active:scale-95 transition-all delay-75 md:ml-3">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 mt-5 text-center text-gray-500 mb-1">
                Copyright &copy; {new Date().getFullYear()} Luminous Properties. <br className="block sm:hidden" />
                <span className="sm:ml-1">All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer;