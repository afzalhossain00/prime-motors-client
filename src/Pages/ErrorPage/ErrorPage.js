import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='mt-4'>
            <div className='container flex flex-col items-center justify-center px-4 mx-auto my-4'>
                <img className='rounded-xl' style={{ height: '400px', width: '650px' }} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1669381366~exp=1669381966~hmac=a591d86fb16de5339b4475f7e3d861898f49a4c2ac5d66480af177818f11bbea" alt="" />
                <div className='max-w-md text-center'>
                    <p className="pt-4"><small className='font-semibold text-3xl'>Page Not Found.</small></p> <br />
                    <Link
                        to='/'
                        className='px-4 py-3 font-semibold rounded-lg bg-orange-400 hover:bg-orange-500 text-gray-900'
                    > Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage