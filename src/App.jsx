import React from 'react'
import Image1 from "./assets/w-whatsapp-5.jpg" 
import Image2 from "./assets/w-whatsapp-6.jpg"
import Image3 from "./assets/w-whatsapp-1.jpg"
import Image4 from "./assets/w-whatsapp-2.jpg"
import Image5 from "./assets/w-whatsapp-3.jpg"
import Arrow from "./assets/arrow-156792_640.webp"
import Logo1 from "./assets/w-whatsapp-1-logo-removebg-preview.png"
import Logo2 from "./assets/w-whatsapp-2-logo-removebg-preview.png"
import {FaArrowRight} from "react-icons/fa6"

// function App() {
//   return (
//     <div>
//       <div className='w-full h-[150vh]'>
//         <div className='w-full flex justify-center items-center'>
//           <div className='w-[15%] h-[50vh] border border-red-600'>
//             <img src={Image1} className='w-[100%] h-[100%]'  alt="" />
//           </div>
//           <div className='w-[15%] h-[50vh] border border-red-600'>
//             <img src={Image2} className='w-[100%] h-[100%]' alt="" />
//           </div>
//           <div className='w-[15%] h-[50vh]'>
//             <img src={Image4} className='w-[100%] h-[100%]' alt="" />
//           </div>
//           <div className='w-[15%] h-[50vh] border border-red-600'>
//             <img src={Image5} className='w-[100%] h-[100%]' alt="" />
//           </div>
//           <div className='w-[15%] h-[50vh] border border-red-600'>
//             <img src={Image3} className='w-[100%] h-[100%]' alt="" />
//           </div>
//         </div>
//         <div className='w-[80%] m-auto mt-6 h-36 border border-white ' > 
//           <h1 className='flex justify-around items-center'> <span className='text1 text-5xl font-bold text-red-500 '>All deal proof</span> <img className='w-[10%] image1' src={Arrow} alt="UpArrow" /> <span className='text1 text-5xl font-bold text-red-500'>All deal proof</span> </h1>
//         </div>
//         <div className='w-[80%] m-auto h-36 flex justify-between items-center'> 
//           <h1 className='flex text2 items-center text-5xl font-bold'> Click this link join WhatsApp Group <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> </h1>
//           <a href='https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y' className='h-24 block w-28'>
//             <img src={Logo1} className='w-[100%] h-[100%]' alt="WhatsApp" />
//           </a>
//         </div>
//         <div className='w-[80%] m-auto h-36 flex justify-between items-center'> 
//           <h1 className='flex text2 items-center text-5xl font-bold'> Click this link join WhatsApp Group <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> </h1>
//           <a href='' className='h-24 block w-28'>
//             <img src={Logo1} className='w-[100%] h-[100%]' alt="WhatsApp" />
//           </a>
//         </div>
//         <div className='w-[80%] m-auto h-36 flex justify-between items-center'> 
//           <h1 className='flex text2 items-center text-5xl font-bold'> WhatsApp Number: 03094009238 <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> <div className='icon h-10 w-10 text-3xl font-mono flex justify-center items-center text-white rounded-md  ml-5'> <FaArrowRight /> </div> </h1>
//           <a href='' className='h-28 block w-28'>
//             <img src={Logo2} className='w-[100%] h-[100%]' alt="WhatsApp" />
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }
function App() {
  return (
    <div className="w-full min-h-screen pb-10">
      {/* Image grid */}
      <div className="w-full flex flex-wrap justify-center items-center space-x-4 p-4">
        <div className="w-[90%] md:w-[30%] lg:w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image1} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[90%] md:w-[30%] lg:w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image2} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[90%] md:w-[30%] lg:w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image4} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[90%] md:w-[30%] lg:w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image5} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
        <div className="w-[90%] md:w-[30%] lg:w-[15%] h-[50vh] shadow-xl rounded-lg m-2">
          <img src={Image3} className="img1 w-full h-full object-cover rounded-lg" alt="" />
        </div>
      </div>

      {/* Deal Proof Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto h-auto p-4 border border-white text-center shadow-lg rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 flex justify-around items-center">
          <span className='text1'>All deal proof</span>
          <img className="w-[10%] image1 hidden md:inline-block" src={Arrow} alt="UpArrow" />
          <span className='text1'>All deal proof</span>
        </h1>
      </div>

      {/* WhatsApp Group Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto mt-6 flex flex-wrap justify-between items-center p-4 shadow-lg rounded-lg text-white">
        <h1 className="text2 text-xl md:text-3xl lg:text-4xl text-white  flex items-center">
          Click this link to join WhatsApp Group
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl font-mono flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl font-mono flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-24 w-28 block">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div>
      {/* WhatsApp Group Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto mt-6 flex flex-wrap justify-between items-center p-4 shadow-lg rounded-lg text-white">
        <h1 className="text2 text-xl md:text-3xl lg:text-4xl  flex items-center">
          Click this link to join WhatsApp Group
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl font-mono flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl font-mono flex justify-center items-center rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-24 w-28 block">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div>

      {/* Another WhatsApp Group Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto mt-6 flex flex-wrap justify-between items-center p-4 shadow-lg rounded-lg text-white">
        <h1 className="text2 text-xl md:text-3xl lg:text-4xl flex items-center">
          WhatsApp Number: 03497104965
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl flex justify-center items-center  rounded-md ml-5">
            <FaArrowRight />
          </div>
          <div className="icon h-10 w-10 text-xl md:text-2xl lg:text-3xl font-mono flex justify-center items-center  rounded-md ml-5">
            <FaArrowRight />
          </div>
        </h1>
        <a href="" className="h-24 w-28 block">
          <img src={Logo2} className="w-full h-full object-cover" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default App