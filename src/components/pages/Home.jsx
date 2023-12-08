import Navbar from "../Navbar"


const Home = () => {
    return (
        <div className="bg-hero bg-cover">
            <div className="backdrop-blur">
        <Navbar />
            <div className="relative  h-[90vh] text-white overflow-hidden">

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
                    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                    <a href="/signup" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home