import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import StarIcon from "../assets/star_icon.svg"

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(()=> {
            const fetchTestimonials = async () => {
                const querySnapshot = await getDocs(collection(db, "testimonials"));
                const testimonyList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTestimonials(testimonyList);
            }
    
            fetchTestimonials();
        }, []);
    
    return (
        <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light ">Testimonials</span></h1>
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">True Stories from Happy Homeowners</p>

            <div className="flex flex-wrap justify-center gap-8">
                {testimonials.map((testimony, index) => (
                    <div key={index} className="max-w-[400px] shadow-lg rounded px-8 py-12 text-center hover:scale-105 transform transition duration-300">
                        <img src={testimony.image} alt={testimony.alt} className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl text-gray-700 font-medium">{testimony.name}</h2>
                        <p className="text-gray-500 mb-4 text-sm">{testimony.title}</p>
                        <div className="flex justify-center gap-1 text-red-500 mb-4">
                            {Array.from({length: testimony.rating}, (item, index)=> (
                                <img key={index} src={StarIcon} alt=""/>
                            ))}
                        </div>
                        <p className="text-gray-600">{testimony.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;