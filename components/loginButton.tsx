"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <div className="pr-8 flex justify-end text-center">
      <div 
        className="dark:bg-slate-900 bg-white text-black dark:text-white flex items-center space-x-2 rounded-full p-4 text-lg cursor-pointer"
        onClick={handleClick}
        style={{ minWidth: '150px', height: '45px', justifyContent: 'center' }}>
        <span>Log In</span>
      </div>
    </div>
  );
}

