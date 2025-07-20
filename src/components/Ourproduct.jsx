import React from 'react'

function Ourproduct() {
  return (
     <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center p-8 ">
        ``
        <div className=" h-auto w-full flex  flex-col items-center">
          <p className="font-bold text-2xl text-indigo-800 ">Our Products</p>
          <div className="border-b-4 h-1 w-40 p-2 mb-6 border-yellow-500"></div>
        </div>
        <div className="w-full h-auto flex mt-8 justify-around">
          <div className="w-64 flex flex-col  justify-center items-center mb-4 hover:outline-white hover:outline-2 rounded p-2">
            <img className="w-20 h-20" src="/icons8-skills lab-100.png" alt="" />
            <p className="text-xl text-white font-bold">Pw Skill Lab</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div className="w-64 flex flex-col justify-center items-center mb-4 p-2">
            <img className="w-20 h-20" src="/icons8-permanent-job-64.png" alt="" />
            <p className="text-xl text-white font-bold">Job Portal</p>
            <p className="text-xl text-gray-500 font-bold-">
              Use exceptional templates for a stand-out resume minus the sign-up process
            </p>
          </div>
          <div className="w-64 flex flex-col justify-center items-center mb-4 p-2">
            <img className="w-20 h-20" src="/icons8-internship-100.png" alt="" />
            <p className="text-xl text-white font-bold">Experince Portal</p>
            <p className="text-xl text-gray-500 font-bold-">
              PW Skill's self-placed experince portal priorities hands-on training with 570+ internship projects.
            </p>
          </div>
          <div className="w-64 flex flex-col justify-center items-center mb-4 p-2">
            <img className="w-20 h-20" src="/icons8-affiliate-64.png" alt="" />
            <p className="text-xl text-white font-bold">Affiliate</p>
            <p className="text-xl text-gray-500 font-bold-">
              Explore affiliate marketing opportunities with PW Skills and attain freedom.
            </p>
          </div>
          <div className="w-64 flex flex-col justify-center items-center mb-4 p-2">
            <img className="w-20 h-20" src="/icons8-hall of fame-40.png" alt="" />
            <p className="text-xl text-white font-bold">Hall of fame</p>
            <p className="text-xl text-gray-500 font-bold-">
              Our student placements and 100K+ career transitions speak volumes about our courses.
            </p>
          </div>
        </div>
      </div>

  )
}

export default Ourproduct