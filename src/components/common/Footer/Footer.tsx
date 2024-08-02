import Logo from "#assets/svg/sec-logo.svg?react";
import AppStore from "#assets/svg/app-store.svg?react";
import GooglePlay from "#assets/svg/google-play.svg?react";
import AppGallery from "#assets/svg/app-gallery.svg?react";
import { IoMail, IoMailOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialLinkedin, SlSocialInstagram  } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return(
  <footer className="md:px-4 lg:px-12 px-4 bg-[var(--secondary-color)] pt-12 pb-6">
    <div className="footerLinks grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-8">
        <div className="flex flex-col gap-6">
            <Logo title="logo"/>
            <p className="text-[var(--primary-text)] font-medium text-[22px]">Subscribe Now </p>

            <div 
              className="emailInput w-fit pb-2 flex items-center gap-2 border-b-[1px] border-solid border-[var(--primary-text)]"
            >
              <label htmlFor="mail">
                <IoMail className="fill-white"/>
              </label>

              <input 
                type="email" 
                name="mail" 
                id="mail" 
                placeholder="Enter your Email"
                className="bg-transparent outline-none text-[var(--primary-text)]"
              />
            </div>

            <button className="gradientBtn">Subscribe</button>
        </div>

        <div className="flex flex-col gap-6">
            <h3 className="font-medium text-[22px] text-white">Contact us</h3>

            <div className="flex items-start gap-2">
              <HiOutlinePhone 
                className="fill-transparent stroke-[var(--primary-text)]"
                size="20"
              />
              <p className="font-normal text-[16px] text-[var(--primary-text)]">
                +20 155565856
              </p>
            </div>

            <div className="flex items-start gap-2">
              <IoMailOutline 
                className="stroke-[var(--primary-text)]"
                size="20"
              />
              <p className="font-normal text-[16px] text-[var(--primary-text)]">
                Met3ash@gmail.com
              </p>
            </div>

            <div className="flex gap-6">
              <SlSocialLinkedin size="24" className="fill-white cursor-pointer"/>
              <FaFacebook size="24" className="fill-white cursor-pointer"/>
              <SlSocialInstagram size="24" className="fill-white cursor-pointer"/>
              <FaXTwitter size="24" className="fill-white cursor-pointer"/>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="font-medium text-[22px] text-white">Support</h3>

            <p className="font-normal text-[16px] text-[var(--primary-text)] cursor-pointer hover:text-[var(--primary-color)]">
              Common questions
            </p>

            <p className="font-normal text-[16px] text-[var(--primary-text)] cursor-pointer hover:text-[var(--primary-color)]">
              Help and Support
            </p>

            <p className="font-normal text-[16px] text-[var(--primary-text)] cursor-pointer hover:text-[var(--primary-color)]">
              Privacy Policy
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="font-medium text-[22px] text-white sm:text-center">Download our app now</h3>

            <div className="flex sm:flex-row flex-col gap-4">
              <AppStore />
              <GooglePlay />
            </div>

            <div className="flex sm:justify-center">
              <AppGallery />
            </div>
        </div>
    </div>
  </footer>
  );
};

export default Footer;
