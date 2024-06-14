"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRouter } from "next/navigation";
export function SignupButton() {
const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };
  return (
    <div className=" pr-8 flex justify-end text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
       onClick={handleClick}>
        <span>Sign Up</span>
      </HoverBorderGradient>
    </div>
  );
}