import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // Open whatsapp chat
    window.open('http://wa.me/+918295530920', '_blank')
  }, [])
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-20 px-5 pb-40 pt-16 sm:px-20 lg:gap-40'>
        <h1 className='text-center'>Contact us</h1>
      </div>
      <Footer />
    </div>
  )
}
