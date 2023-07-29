import React from "react";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    //this style is using for making footer standing below the login and signup page and will be never move up bsolute bottom-[45px]
    <div className=" bsolute bottom-[40px]">
      <Container>
        <footer className="text-white font-[200] gap-5 md:gap-11 pt-[100px] flex-col md:flex-row flex items-center justify-center">
          <div className="flex flex-col gap-4  ">
            <p className="text-[15px] ">Find on social media</p>
            <div className="flex items-center justify-around">
              <a href="">
                <img
                  className="max-w-[30px] lg:max-w-[35px]"
                  src="/facebook.png"
                  alt="facebook"
                />
              </a>
              <a href="">
                <img
                  className="max-w-[30px] lg:max-w-[35px]"
                  src="/tik-tok.png"
                  alt="tik-tok"
                />
              </a>
              <a href="">
                <img
                  className="max-w-[30px] lg:max-w-[35px]"
                  src="/telegram.png"
                  alt="telegram"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/">
              {" "}
              <img
                className="max-w-[50px] lg:max-w-[100px]"
                src="/logo.png"
                alt="logo"
              />
            </a>

            <div className="text-[10px] lg:text-[15px]">
              <p>
                © Silk Road Media | 2022 - {currentYear} All Rights Reserved
              </p>
              <p>Any Movie Any Drama @ Any Place @Any Time</p>
            </div>
          </div>
        </footer>
        <div className="bg-[#1a1b1e] py-10"></div>
      </Container>
    </div>
  );
};

export default Footer;
