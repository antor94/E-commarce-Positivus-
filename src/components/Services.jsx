import React from "react";
import CommonHead from "./common/CommonHead";
import { Link } from "react-router";
import serviceImg from '../assets/images/servicepng1.png'
import { MdArrowOutward } from "react-icons/md";


const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div id="" className="flex gap-[40px] mb-[80px] items-center">
            <CommonHead commonh2={"Services"} />
            <div className="w-[667px]">
              <CommonHead
                commonp={
                  "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
                }
              />
            </div>
          </div>
          <div>



          <div id="ser-col-1" className="flex">
            <div className="w-[600px] h-[310px] flex gap-[70px] items-center p-[50px] rounded-[45px] border-b-4 bg-[#F3F3F3]">
              {/* ------------- left-side */}
              <div className="">
              <div className="w-[221px] mb-[93px]"><p className="text-[30px] font-medium font-main text-[#000] bg-main ">Search engine <br /> <span className="w-[100px]">optimization</span> </p></div>
              <Link to={'/'} className="text-[20px] font-normal flex items-center gap-[15px] font-main text-black">
                <div className="w-[41px] h-[41px] bg-[#191A23] rounded-full flex justify-center items-center"><MdArrowOutward className="text-main" /> </div>
                Learn more
              </Link>           
              </div>
              {/* ----------------- right side  */}
              <div><img src={serviceImg} alt="service-img" /> </div>        
                </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
