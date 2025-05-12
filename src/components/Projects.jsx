import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import LeftArrow from "../assets/left_arrow.svg"
import RightArrow from "../assets/right_arrow.svg"

const Projects = () => {
    const [properties, setProperties] = useState([])

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

    return (
        <div className="continaer mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Our work speaks for itself — Browse completed projects.</p>

            {/* slider buttons */}

            <div className="flex justify-end items-center mb-8">
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                    <img src={LeftArrow} alt="Previous" />
                </button>
                <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
                    <img src={RightArrow} alt="Next" />
                </button>
            </div>

            {/* project slider container */}

            <div>
                <div>
                    <h2>Available Properties</h2>
                    <ul>
                        {properties.map(property => (
                            <li key={property.id}>
                                <h3>{property.title}</h3>
                                <p>{property.location}</p>
                                <p>${property.price.toLocaleString()}</p>
                                {property.imageUrls?.map((url, index) => (
                                <img key={index} src={url} alt={property.title} style={{ width: 200 }} />
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Projects; 