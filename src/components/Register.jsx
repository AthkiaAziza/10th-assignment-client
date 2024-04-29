import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Navbar from "./Navbar";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { name, email, password, image } = data;


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            })

            .catch(error => {
                console.error(error)
            })



    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-teal-800 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Username</label>
                        <input type="text" name="name" id="username" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-100 focus:border-violet-400" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-700">Name is required</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-100 focus:border-violet-400" {...register("password", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                    message: "You have to enter an uppercase and an lowercase letter in the password"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Length must be at least 6 character"
                                }
                            })} />
                        <span className="absolute top-8 right-2" onClick={() => setShowPassword(!showPassword)}>
                            <div className="text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <IoEye></IoEye>
                                }
                            </div>
                        </span>

                        {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 
                        rounded-md border-gray-700 bg-white
                         text-black
                          focus:border-violet-400" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-700">Email is required</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white
                         text-black focus:border-violet-400" {...register("image")} />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm  bg-white text-black">Sign in</button>
                </form>
                <p className="text-sm mr-3 text-center sm:px-6 text-white">Already have an account?
                    <Link to='/login' className="underline text-gray-100 ml-3">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;