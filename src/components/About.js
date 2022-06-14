import React from "react";

function About() {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold ">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            I’ve written a few thousand words on why traditional “semantic class
            names” are the reason CSS is hard to maintain, but the truth is
            you’re never going to believe me until you actually try it. If you
            can suppress the urge to retch long enough to give it a chance, I
            really think you’ll wonder how you ever worked with CSS any other
            way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completed</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
