import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import LeftArrow from "../assets/left_arrow.svg"
import RightArrow from "../assets/right_arrow.svg"

const Projects = () => {
    const [properties, setProperties] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if(window.innerWidth >=1024) {
                setCardsToShow(properties.length)
            }else {
                setCardsToShow(1) 
            };
        }    
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow)
            return () => window.removeEventListener('resize', updateCardsToShow)
        
    },[properties.length]);


    useEffect(()=> {
        const fetchProperties = async () => {
            const querySnapshot = await getDocs(collection(db, "properties"));
            const propertyList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProperties(propertyList);
        }

        fetchProperties();
    }, []);

     const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? properties.length - 1 : prevIndex - 1)
    }

    return (
        <div className="continaer mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Our work speaks for itself — Browse completed projects.</p>

            {/* slider buttons */}

            <div className="flex justify-end items-center mb-8">
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project" onClick={prevProject}>
                    <img src={LeftArrow} alt="Previous" />
                </button>
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project" onClick={nextProject}>
                    <img src={RightArrow} alt="Next" />
                </button>
            </div>

            {/* project slider container */}

            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                    {properties.map((property, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img src={property.imageUrls} alt={property.title} className="w-full h-auto mb-14" />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                                    <p className="text-gray-500 text-sm">
                                        {property.price} <span> | </span> {property.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>

        </div>
    )
}


export default Projects; 