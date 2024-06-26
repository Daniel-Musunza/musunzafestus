"use client"
import React from 'react';
import { motion } from 'framer-motion';
import img from '@/public/profile.png';
import Image from 'next/image';
import { Socials } from '@/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
};

const leftDivVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const rightDivVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

export default function About() {
  return (
    <motion.div
      id="about"
      className="pt-28 p-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative md:w-full md:justify-center md:h-full md:flex md:pt-0 md:flex-row text-white w-full p-14">
        <motion.div
          className="md:w-80 md:flex md:flex-col z-30"
          variants={leftDivVariants}
        >
          <h1 className="md:text-4xl md:text-left md:pt-16 font-thin text-[2rem] text-gray-400 pl-1">
            Hi, my name is
          </h1>
          <h1 className="md:text-[90px] md:text-left md:pt-5 text-[3rem] leading-[50px] pt-4 md:pb-24 md:leading-[90px] font-extralight md:pl-0">
            Musunza Festus
          </h1>
        </motion.div>

        <motion.div
        >
          <Image
            src={img}
            alt="logo"
            className="md:pt-8 md:pb-0 md:w-[600px] pt-7 pb-12"
          />
        </motion.div>

        <motion.div
          className="md:w-80 md:pt-12 font-semibold flex"
          variants={rightDivVariants}
        >
          <div className="w-[3px] md:h-[320px] h-[370px] bg-white"></div>
          <div className="pl-5">
            <p className="text-justify font-thin pt-5">
            I am a seasoned software engineer with a strong background in full-stack development, backend systems, web design and development. Passionate about creating innovative solutions and driving projects from conception to delivery. Eager to collaborate with teams to tackle complex challenges and contribute to cutting-edge developments in the tech industry.
            </p>
            <div className="flex flex-row gap-5 pt-5">
              {Socials.map((social, index) => (
                <a href={social.WebUrl} target="_blank" rel="noopener noreferrer" key={index}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
