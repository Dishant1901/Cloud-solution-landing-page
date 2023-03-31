import React from "react";
import Laptop from "../assets/img-1.png";

const Analytics = () => {
  return (
    <div className="bg-white mx-full px-4 py-16">
        <div className="  max-w-[1240px] mx-auto grid md:grid-cols-2 ">
            <img className="w-[500px] lg:h-[300px] mx-auto my-4 object-cover" src={Laptop} alt="/" />
            <div className=" lg:mt-8 justify-center">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Cloud Analytics Centrally</h1>
                <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    doloribus, architecto nisi, temporibus harum debitis eius suscipit
                    amet aut nam laborum quidem ratione porro dolor voluptatibus alias,
                    ex asperiores! Voluptatum.
                </p>
                <button className=" text-[#00df9a] w-40 mx-auto font-medium bg-black rounded-lg py-2 my-6">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
