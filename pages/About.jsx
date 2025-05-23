import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolor, veritatis nostrum velit fugit odit fuga officiis, numquam iusto vel vero eveniet earum architecto possimus voluptatem labore laborum! Et, fuga?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus ea maxime sunt dolores dicta deleniti. Atque obcaecati debitis sunt est maxime fugiat assumenda animi. Error eos quis voluptatum amet?</p>
          <b className='text-gray-800'>Our Mission</b>
          <b> our Mission Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit magnam et, dolore obcaecati hic labore beatae nisi molestias nesciunt, at rem officiis, quos placeat laudantium odit consequatur ad ut nihil?</b>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assursnce:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias deleniti nobis natus corporis nostrum ipsa aut eligendi tempore libero suscipit quaerat ipsam repudiandae nemo itaque labore, quasi temporibus soluta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias deleniti nobis natus corporis nostrum ipsa aut eligendi tempore libero suscipit quaerat ipsam repudiandae nemo itaque labore, quasi temporibus soluta.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias deleniti nobis natus corporis nostrum ipsa aut eligendi tempore libero suscipit quaerat ipsam repudiandae nemo itaque labore, quasi temporibus soluta.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
