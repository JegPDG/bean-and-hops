import React from 'react'

const CafeLocationMap = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-white/10 mt-4">
     <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.6697832078703!2d122.37440967481982!3d11.717784488494052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59de24acbcea3%3A0x7f1722e3598a50e0!2sBean%20%26%20Hops%20Coffee!5e0!3m2!1sen!2sph!4v1759415666077!5m2!1sen!2sph" 
      style={{border: 0}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      className='w-[100vw] h-[100vh] md:w-[600px] md:h-[400px]'
      ></iframe>
    </div>
  )
}

export default CafeLocationMap