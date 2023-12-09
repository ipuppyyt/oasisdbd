import { useEffect } from "react"
import Navbar from "../Navbar"
import SIdebar from "../SIdebar"


const Dashboard = () => {

    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed !== "true") {
            window.location.href = "/login"
        }
    }, [])

    return (
        <section className="h-screen bg-hero bg-cover">
            <div className="h-screen backdrop-blur">
                <Navbar />
                <SIdebar />
                <div className="ml-64 flex h-[90vh]">
                    <section className="w-full">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Latest out there</h2>
                                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Get the latest gaming scoop! Discover tournament highlights, upcoming events, and much more...</p>
                            </div>
                            <div className="grid gap-8 lg:grid-cols-2">
                                <article className="p-6 rounded-lg border shadow-md bg-gray-800 bg-opacity-60 border-gray-700">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                            Article
                                        </span>
                                        <span className="text-sm">October 16, 2023</span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">Valorant: Striking the Right Balance with College Papers</h2>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Balancing academics and extracurriculars is crucial to college success in today’s fast-paced world. Valorant, a Riot Games tactical first-person shooter, is popular among college students worldwide. The key to a happy college experience is finding balance, and this essay will help you balance academics and gaming.</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <img className="w-7 h-7 rounded-full" draggable="false" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                            <span className="font-medium dark:text-white">
                                                Jese Leos
                                            </span>
                                        </div>
                                    </div>
                                </article>
                                <article className="p-6 rounded-lg border shadow-md bg-gray-800 bg-opacity-60 border-gray-700">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                            Article
                                        </span>
                                        <span className="text-sm">December 4, 2023</span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to Choose the Best Gaming Gear for an Excellent Experience</h2>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Gamers love being immersed in virtual reality, where all the fun happens, and all the unreal attractions become a part of the gaming experience. Tech companies continuously develop enhanced products as important extensions to gaming, regardless it’s console, PC, or even mobile gaming.</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <img className="w-7 h-7 rounded-full" draggable="false" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                            <span className="font-medium dark:text-white">
                                                Bonnie Green
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Dashboard