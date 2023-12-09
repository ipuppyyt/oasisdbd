import { useEffect, useState } from "react";
import Navbar from "../Navbar"
import SIdebar from "../SIdebar"
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Players = () => {

    const { register, handleSubmit } = useForm(); //form handling

    const [teamData, setTeamData] = useState([]);
    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed !== "true") {
            window.location.href = "/login"
        }

        axios.get(`/api/team/getall`)
            .then((res) => {
                if (res.status === 200) {
                    setTeamData(res.data.teams)
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    const onPlayerSubmit = (data) => {
        axios.post("/api/player/create", data)
            .then((res) => {
                if (res.data.message === 'Player Created' && res.status === 200) {
                    toast.success("Player Created")
                    window.location.href = "/dashboard/players"
                } else if (res.data.message === 'Player already exist' && res.status === 200) {
                    toast.error("Player already exists")
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
                                Create Player
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onPlayerSubmit)}>
                                <div>
                                    <label htmlFor="playername" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player Name</label>
                                    <input type="text" {...register('playername')} name="playername" id="playername" placeholder="SURESH" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="teamid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team Name</label>
                                    <select {...register('teamid')} defaultValue="noval" name="teamid" id="teamid" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option value="noval" hidden className=" bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Select Team</option>
                                        {teamData.map((team) => {
                                            return (
                                                <option value={team.teamid} key={team.teamid} className="bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{team.teamname}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="playerposition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player Position</label>
                                    <select {...register('playerposition')} defaultValue="noval" name="playerposition" id="playerposition" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option value="noval" hidden className=" bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Select Position</option>
                                        <option value="SENTINAL" className="bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">SENTINAL</option>
                                        <option value="CONTROLLER" className="bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">CONTROLLER</option>
                                        <option value="DUELIST" className="bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">DUELIST</option>
                                        <option value="INITIATOR" className="bg-gray-50 w-28 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">INITIATOR</option>
                                    </select>
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

export default Players