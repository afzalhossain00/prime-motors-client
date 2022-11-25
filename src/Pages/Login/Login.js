import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm('')
    const { LogIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        LogIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('successfully Login')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)

            });
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className='input input-bordered w-full max-w-xs'
                            {...register("email", {
                                required: "Email Address is required"
                            })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='password'
                            className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters.' }
                            })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent my-4 w-full max-w-xs' value='Login' type="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
                <p className='mt-3'>New to Prime Motors? <Link className='text-accent' to='/signup'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;