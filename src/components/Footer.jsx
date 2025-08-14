import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-950 w-full h-75 ">
      <section className="font-bold text-white text-30 font-Helvetica py-10 ml-5 text-2xl">
        <h1>@2025 Copyrights reserved</h1>
      </section>
  
      <div className="relative bottom-16 flex flex-col text-white font-Times New Roman ml-300 font-bold  gap-2">
       Contact me at :
       <ul className="no-underline my-2">
        <li>Gmail: <a href="mailto:rakshaadhikari697@gmail.com">rakshaadhikari697@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/raksha-adhikari-121214289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">RakshaAdhikari</a></li>
       </ul>
      </div>
    </div>
  )
}

export default Footer