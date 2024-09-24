import React from 'react'
import Image1 from "./assets/w-whatsapp-5.jpg"
import Image2 from "./assets/w-whatsapp-6.jpg"
import Image3 from "./assets/w-whatsapp-1.jpg"
import Image4 from "./assets/w-whatsapp-2.jpg"
import Image5 from "./assets/w-whatsapp-3.jpg"
import Arrow from "./assets/arrow-156792_640.webp"
import Logo1 from "./assets/w-whatsapp-1-logo-removebg-preview.png"
import Logo2 from "./assets/w-whatsapp-2-logo-removebg-preview.png"
import { FaArrowRight } from "react-icons/fa6"

function App() {
  return (
    <div className="w-full min-h-screen pb-10">
      {/* Image grid */}
      {/* <div className="w-full flex justify-center items-center space-x-4 p-4">
        <div className="w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image1} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image2} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image4} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image5} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image3} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
      </div> */}

      {/* Deal Proof Section */}
      {/* <div className="w-[90%]  mx-auto h-auto p-4 border border-white text-center shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-red-600 flex justify-around items-center">
          <span className='text1'>All deal proof</span>
          <img className="w-[10%] image1 hidden" src={Arrow} alt="UpArrow" />
          <span className='text1'>All deal proof</span>
        </h1>
      </div> */}

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* WhatsApp Group Section */}
      {/* <div className="w-[90%] mx-auto mt-6 flex flex-wrap justify-between items-center p-4 shadow-lg rounded-lg ">
        <h1 className="text2 text-3xl  text-red-500  flex items-center">
          Click this link to join WhatsApp Group
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-24 w-28 block">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div> */}
      {/* WhatsApp Group Section */}
      {/* <div className="w-[90%] mx-auto mt-6 flex justify-between items-center p-4 shadow-lg rounded-lg text-red-500">
        <h1 className="text2 text-3xl flex items-center">
          Click this link to join WhatsApp Group
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-24 w-28 block">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div> */}

      {/* Another WhatsApp Group Section */}
      {/* <div className="w-[90%] mx-auto mt-6 flex justify-between items-center p-4 shadow-lg rounded-lg text-red-500">
        <h1 className="text2 text-3xl  flex items-center">
          WhatsApp Number: 03497104965
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center  rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-3xl flex justify-center items-center  rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="" className="h-24 w-28 block">
          <img src={Logo2} className="w-full h-full object-cover" alt="WhatsApp" />
        </a>
      </div> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* WhatsApp Group Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>Click this link to join WhatsApp Group</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
          <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>

          </div>
        </div>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-20 w-20 md:h-24 md:w-28 block mt-6 xl:mt-0">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div>

      {/* Second WhatsApp Group Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>Click this link to join WhatsApp Group</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
          <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>

          </div>
        </div>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-20 w-20 md:h-24 md:w-28 block mt-6 xl:mt-0">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div>

      {/* WhatsApp Number Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>WhatsApp Number: 03497104965</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
          <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
            <FaArrowRight />
          </div>

          </div>
        </div>
        <div className="h-20 w-20 md:h-24 md:w-28 mt-6 xl:mt-0">
          <img src={Logo2} className="w-full h-full" alt="WhatsApp" />
        </div>
      </div>

    </div>
  );
}

export default App