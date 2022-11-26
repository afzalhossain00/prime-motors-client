import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [signError, setSignUpError] = useState('')
    const navigate = useNavigate();

    const handleSignUp = data => {
        setSignUpError('')
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                toast.success('User created successfully')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('user updated');
                        navigate('/')
                        // toast.success('Profile Update successfully')
                        // saveUser(data.name, data.email)
                    })
                    .catch(err => console.error('While updating user', err));

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type='text'
                            className='input input-bordered w-full max-w-xs'
                            {...register("name", {
                                required: 'Name is required'
                            })}
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className='input input-bordered w-full max-w-xs'
                            {...register("email", {
                                required: 'Email is required'
                            })}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='password'
                            className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: 'Password is required',
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase numbers and special characters" },
                                minLength: { value: 6, message: 'Password must be 6 characters' }
                            })}
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent mt-4 w-full max-w-xs' value='Sign Up' type="submit" />
                    {signError && <p className='text-red-600'>{signError}</p>}
                </form>
                <p className='mt-3'>Already Have an account? <Link className='text-accent' to='/login'>Please login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;