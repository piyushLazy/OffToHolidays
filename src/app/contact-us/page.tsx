import React from 'react'
import ContactUs from '@/components/contactUs/contact'
import Navbar from '@/components/navbar/Navbar'
import FooterLayout from '@/components/footer/FooterLayout'

const page = () => {
  return (

    <>
    <Navbar/>
    <div className=''>
 <ContactUs/>



 <div className='mx-30'>
 <FooterLayout/>
 </div>
  
    </div>
    </>
  )
}

export default page