import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import { useEffect, useState } from "react"


const Home = () => {

    const [isAuthed, setIsAuthed] = useState(false);

    
    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed === "true") {
            setIsAuthed(true)
        }
    }, [])

    return (
        <div className="bg-hero bg-cover">
            <div className="backdrop-blur">
        <Navbar />
            <div className="relative  h-[90vh] text-white overflow-hidden">

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-7xl font-nunito-bold font-bold leading-tight uppercase">OASIS Arena</h1>
                    <p className="text-lg text-gray-300 mb-8">Where Players Thrive and Legends Emerge.</p>
                    {isAuthed ? <Link to="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 bg-opacity-50 py-2 px-6 rounded-full text-base font-semibold transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg uppercase">Dashboard</Link> :
                    <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-700 bg-opacity-50 py-2 px-6 rounded-full text-base font-semibold transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg uppercase">Get Started</Link>
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home