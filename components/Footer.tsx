import React from "react";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    //this style is using for making footer standing below the login and signup page and will be never move up bsolute bottom-[45px]
    <div className=" bsolute bottom-[45px] ">
      <Container>
        <footer className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] flex flex-col md:flex-row items-center justify-center">
          <div className="font-[400] flex flex-wrap text-white">
            <div className="mb-4 md:mb-0 md:mr-10">
              <p className="text-center md:text-left">
                Find us on social media
              </p>
              <div className="] w-[150px] gap-4 pt-2 flex items-center justify-center md:justify-start">
                <a href="https://www.facebook.com/">
                  <img src="/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.tiktok.com/login">
                  <img src="/tik-tok.png" alt="TikTok" />
                </a>
                <a href="https://web.telegram.org/k/">
                  <img src="/telegram.png" alt="Telegram" />
                </a>
              </div>
            </div>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:items-start">
              <a href="/">
                <img
                  className="w-[40px] sm:w-[50px]"
                  src="/logo.png"
                  alt="Logo"
                />
              </a>
              <div className="font-[200] text-center sm:text-left mt-4 sm:mt-0 sm:ml-8">
                <p>
                  Silk Road Media | 2022 - {currentYear} All Rights Reserved
                  <br />
                  Any Movie, Any Drama, Any Place, Any Time
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
