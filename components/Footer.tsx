import React from "react";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bsolute bottom-[45px]">
      <Container>
        <footer className="px-10 py-10 flex flex-col md:flex-row items-center justify-center">
          <div className="font-[400] flex flex-wrap text-white">
            <div className="flex items-center justify-center">
              <div className="felx flex-col">
                <p className="">Find us on social media</p>
                <div className="gap-4 pt-2 flex items-center justify-center">
                  <a href="https://www.facebook.com/">
                    <img className="w-8" src="/facebook.png" alt="Facebook" />
                  </a>
                  <a href="https://www.tiktok.com/login">
                    <img className="w-8" src="/tik-tok.png" alt="TikTok" />
                  </a>
                  <a href="https://web.telegram.org/k/">
                    <img className="w-8" src="/telegram.png" alt="Telegram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pl-0 md:pl-20 gap-4 flex flex-wrap items-center justify-center">
              <div className="">
                <a href="/">
                  <img className="w-[50px]" src="/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="font-[200]">
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
