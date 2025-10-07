import React from "react";
import CommonHead from "./common/CommonHead";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div id="service-row" className="flex gap-[40px] items-center">
            <CommonHead commonh2={"Services"} />
            <div className="w-[667px]">
              <CommonHead
                commonp={
                  "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
                }
              />
            </div>
          </div>

          <div id="ser-col-1">

            <div className="w-[600px] h-[310px] bg-[#F3F3F3]">
              

              {/* ------------- left-side */}

              <div><p>Search engine <br /> optimization</p></div>

              <div>

                <div className="w-[41px] h-[41px] bg-[#191A23]"> </div>


              </div>
               
               
               
               
               
               
                </div>



          </div>












        </div>
      </section>
    </>
  );
};

export default Services;
