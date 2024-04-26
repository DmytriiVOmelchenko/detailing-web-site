import Logo from '../assets/img/logo.svg';

import { social } from '../data';

const Footer = () => {
  return (
    <footer className="bg-blue py-8 lg:py-4">
      <div className="container mx-auto">
        <div className="flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="tex-[15px]">
            &copy; Copyright 2024. All rights reserved.
          </div>
          <div className="flex gap-x-4">
            {social.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className="bg-[#d6f5f5] hover:bg-[#c2e5dc] w-10 h-10 rounded-full flex text-blue justify-center items-center mr-4 transition text-2xl">
                    {item.icon}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
