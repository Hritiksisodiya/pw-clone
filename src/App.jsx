import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-slate-950"></body>
      <nav className="bg-indigo-300 h-14 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 px-4 md:px-4">
          Pw Skills
        </div>
        <ul className="font-semibold md:flex gap-1.5 hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <div className="bg-indigo-800 text-white font-semibold rounded p-0.5 cursor-pointer md:block hidden">
          login/sign up
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>

      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="http://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="http://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </header>

      <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
        <div className="h-auto w-full flex flex-wrap flex-col items-center ">
          <p className="text-2xl text-indigo-800 font-bold ">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div className="border-b-4 border-yellow-400 h-1 w-40 p-2"></div>
        </div>

        <div className="flex flex-wrap justify-evenly w-full mt-12">
          <div className="flex flex-col w-46 ">
            <img className="w-40 h-40" src="stack-of-books.png" alt="" />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-2xl font-bold text-gray-500">
              {" "}
              Different Courses
            </p>
          </div>
          <div className="flex flex-col w-46">
            <img className="w-40 h-40" src="students.png" alt="" />
            <p className="text-2xl font-bold text-white">700,000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>

          <div className="flex flex-col w-46">
            <img className="w-40 h-40" src="money.png" alt="" />
            <p className="text-2xl font-bold text-white">7000+</p>
            <p className="text-2xl font-bold text-gray-500">
              Succesful Transition
            </p>
          </div>
        </div>
      </div>

      <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center p-10 ">``
        <div className=" h-auto w-full flex  flex-col items-center">
          <p className="font-bold text-2xl text-indigo-800 border-2 border-white">Our Products</p>
          <div className="border-b-4 h-1 w-36 border-yellow-500"></div>
        </div>
        <div className="w-full h-auto flex mt-8 justify-around">
          <div className="w-64 flex flex-col  justify-center items-center mb-12 border-white border-2 rounded p-2">
            <img className="w-20 h-20" src="money.png" alt="" />
            <p className="text-xl text-white font-bold">Pw Skill Lab</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div>
            <img className="w-20 h-20" src="money.png" alt="" />
            <p className="text-xl text-white font-bold">Job Portal</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our
            </p>
          </div>
          <div>
            <img className="w-20 h-20" src="money.png" alt="" />
            <p className="text-xl text-white font-bold">Experince Portal</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our
            </p>
          </div>
          <div>
            <img className="w-20 h-20" src="money.png" alt="" />
            <p className="text-xl text-white font-bold">Affiliate</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our
            </p>
          </div>
          <div>
            <img className="w-20 h-20" src="money.png" alt="" />
            <p className="text-xl text-white font-bold">Hall of fame</p>
            <p className="text-xl text-gray-500 font-bold-">
              Supercharge your project development with our
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full flex flex-col md:flex-row flex-wrap justify-between mt-8 text-white bg-gray-900">
        <div>
          <img
            className="w-40 h-20"
            src="https://pwskills.com/images/PWSkills-white.png"
            alt=""
          />
          <p className="my-4"> Email us: support@pwskils.gmail.com</p>
          <img className="w-24 h-24" src="icons8-certificate-48.png" alt="" />
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
    </>
  );
}

export default App;
