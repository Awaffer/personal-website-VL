"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
                sequence={[
                    "Violeta",
                    1000,
                    "Chemistry/Quantum Computing Programmer",
                    1000,
                    "Pianist",
                    1000,
                    "Cool",
                    1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          &ldquo;If our eyes saw souls instead of bodies, how very different our ideals of beauty would be.&ldquo;
            — Frida Kahlo
          </p>
          <div>
          <Link
              href="/resumes/resumelol.png"
              download="resumelol.png"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 boder border-white mt-3 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">A Resume</span>
            </Link>
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;