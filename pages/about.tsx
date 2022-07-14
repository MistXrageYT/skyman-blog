import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
        <Header />
        <div className='max-w-4xl mx-auto'>
          <hr className="py-0"/>
          <div className='max-w-3xl p-5 flex flex-col space-y-3'>

          <h1 className='pt-3 font-bold text-xl'>About Us</h1>
          <p>"Skyman Films" A Company From India.</p>
          <p>We Make Music, Videos, Short Movies And Etc.</p>
          <p>If You Want Become Model</p>
          <p>Or Want To Become Singer</p>
          <p>Or You Want Do Promotion To Get More Views On Youtube</p>
          <p>Just Contact Us</p>
          <br /><br />
          <h5 className='font-bold text-lg'>Our Contacts</h5>
          <p>+91 - 978 568 4013 <span className='text-xs'>(Whatsapp & Calling)</span></p>   
          <p>+91 - 935 166 0311 <span className='text-xs'>(Calling)</span></p>   
          </div>
        <Footer />
        </div>

    </div>
  )
}

export default about