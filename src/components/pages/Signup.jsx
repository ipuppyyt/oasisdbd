import axios from "axios"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {

    const [isAuthed, setIsAuthed] = useState(false)
    const { register, handleSubmit } = useForm(); //form handling


    useEffect(() => {
        const authed = localStorage.getItem("isAuth");
        if (authed === "true") {
            window.location.href = "/"
            setIsAuthed(true)
        }
    }, [])

    const onLoginSubmit = (data) => {
        if(data.password === data.reenterpassword){
            axios.post("/api/auth/register", data)
            .then((res) => {
                if (res.data.message === 'Account Created' && res.status === 200) {
                    localStorage.setItem("isAuth", true)
                    localStorage.setItem("userid", res.data.user.userid)
                    localStorage.setItem("username", res.data.user.username1)
                    localStorage.setItem("email", res.data.user.useremail)
                    window.location.href = "/"
                } else if (res.data.message === 'Account already exist' && res.status === 200) {
                    toast.error("Email already exists")
                }
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            toast.error("Passwords do not match")
        }
    }

    return (
        <section className="bg-hero bg-cover">
            {isAuthed ? null :
                (<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 backdrop-blur">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 bg-opacity-60">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onLoginSubmit)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" {...register('email')} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" {...register('password')} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="reenterpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reenter Password</label>
                                    <input type="password" {...register('reenterpassword')} name="reenterpassword" id="reenterpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 bg-opacity-60 hover:bg-opacity-90 transition-all ease-in-out duration-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Already have an account? Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>)}
                <Toaster
                position="bottom-right"
                reverseOrder={false}
              />
        </section>
    )
}

export default Signup