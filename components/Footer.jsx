import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo1} alt='' className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id doloremque vitae, voluptas culpa beatae? Debitis quidem quas suscipit minus possimus! Optio saepe cupiditate officiis dolore laudantium minima dolores modi?
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privecy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 8515079318</li>
                    <li>contact@tcart.com</li>
                </ul>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ tcart.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
