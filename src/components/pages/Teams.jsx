import { useEffect } from "react";
import Navbar from "../Navbar"
import SIdebar from "../SIdebar"
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Teams = () => {


    const { register, handleSubmit } = useForm(); //form handling
    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        
        if (authed !== "true") {
            window.location.href = "/login"
        }
    }, [])

    const userid = localStorage.getItem("userid");

    const onTeamSubmit = (data) => {
        axios.post("/api/team/create", data)
            .then((res) => {
                if (res.data.message === 'Team Created' && res.status === 200) {
                    toast.success("Team Created")
                    setTimeout(() => {
                        window.location.href = "/dashboard"
                    }, 3000);
                } else if (res.data.message === 'Team already exist' && res.status === 200) {
                    toast.error("Team already exists")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <section className="h-screen bg-hero bg-cover">
            <div className="h-screen backdrop-blur">
                <Navbar />
                <SIdebar />
                    <div className="ml-64  flex flex-col items-center justify-center px-6 py-8 mx-auto h-[90vh] lg:py-0 backdrop-blur">
                        <div className=" w-96 rounded-lg shadow dark:border bg-gray-800 bg-opacity-60">

                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                    Create your team
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onTeamSubmit)}>
                                    <div>
                                        <input type="text" {...register('userid')} name="userid" value={userid} id="userid" className="bg-gray-50 hidden border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="teamnameorg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team Name</label>
                                        <input type="text" {...register('teamnameorg')} name="teamnameorg" id="teamnameorg" placeholder="SENTINALS" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="coachname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coach Name</label>
                                        <input type="text" {...register('coachname')} name="coachname" id="coachname" placeholder="RAMESH" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <button type="submit" className="w-full bg-indigo-600 bg-opacity-60 hover:bg-opacity-90 transition-all ease-in-out duration-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <Toaster
                position="bottom-right"
                reverseOrder={false}
              />
        </section>
    )
}

export default Teams