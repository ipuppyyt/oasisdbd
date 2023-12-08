import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

    const [isAuthed, setIsAuthed] = useState(false)

    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed === "true") {
            setIsAuthed(true)
        }
    }, [])

    return (
        <nav className="h-[10vh] border-b-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-4xl text-white font-semibold whitespace-nowrap uppercase">Oasis</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="navbar-default">
                    {isAuthed ? (<img src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png" className="h-11 rounded-full" />) :
                        (<Link to="/login" className="inline-flex items-center justify-center p-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500">
                            Log in
                        </Link>)}

                </div>
            </div>
        </nav>

    )
}

export default Navbar