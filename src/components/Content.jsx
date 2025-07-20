import React from 'react'

function Content() {
  return (
     <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
        <div className="h-auto w-full flex flex-wrap flex-col items-center ">
          <p className="text-2xl text-indigo-800 font-bold ">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div className="border-b-4 border-yellow-400 h-1 w-40 p-2"></div>
        </div>

        <div className="flex flex-wrap justify-evenly w-full mt-12">
          <div className="flex flex-col w-46 ">
            <img className="w-40 h-40" src="/stack-of-books.png" alt="" />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-2xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="flex flex-col w-46">
            <img className="w-40 h-40" src="/students.png" alt="" />
            <p className="text-2xl font-bold text-white">700,000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>

          <div className="flex flex-col w-46">
            <img className="w-40 h-40" src="/money.png" alt="" />
            <p className="text-2xl font-bold text-white">7000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Succesful Transition
            </p>
          </div>
        </div>
      </div>
  )
}

export default Content