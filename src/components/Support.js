import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/support.jpg";
function Support() {
  return (
    <div className=" w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="error"
        ></img>
      </div>
      <div className="max-w-[1240px] mx-auto relative text-white">
        <div className="text-center px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase">Support</h2>
          <h3 className="text-5xl font-bold py-6">Finding the right team</h3>
          <p className="text-3xl text-slate-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 relative gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8"> 
              <PhoneIcon className="w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex text-indigo-600 items-center">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex text-indigo-600 items-center">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex text-indigo-600 items-center">
                Contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
