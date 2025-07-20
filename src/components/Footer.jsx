import React from 'react'

function Footer() {
  return (
     <footer className="w-full flex flex-col md:flex-row flex-wrap justify-between mt-8 text-white bg-gray-900">
        <div>
          <img
            className="w-36 h-20"
            src="https://pwskills.com/images/PWSkills-white.png"
            alt=""
          />
          <p className="my-4"> Email us: support@pwskils.gmail.com</p>
          <img className="w-24 h-20" src="/icons8-certificate-48.png" alt="" />
        </div>
        <div>
          <h1 className="font-bold text-xl mt-4">Pw skills</h1>
          <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl my-2"></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
          </div>
        </div>

        <div>
          <h1>Products</h1>
          <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl my-2"></div>
          <div>
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experince Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>

        <div>
          <h1>Links</h1>
          <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl my-2"></div>
          <div>
            <p>Discord Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer