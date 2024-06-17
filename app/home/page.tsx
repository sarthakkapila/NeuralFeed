import React from "react";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import TradingViewWidget from "@/components/trading";
import {axios} from 'axios';

interface sidebarItems {
  text: string;
  icon?: React.ReactNode;
}
const sidebarItems: sidebarItems[] = [
  {
    icon: <GoHomeFill />,
    text: "Home",
  },
  {
    icon: <FaSearch/>,
    text: "Explore",
  },

 /* {
    icon: <FaBell />,
    text: "Notifications",
  },
  */

/*  {
    icon: <IoMail />,
    text: "Messages",
  }, */

  {
    icon: <FaBookmark />,
    text: "Bookmarks",
  },

 /* {
    icon: <MdVerified />,
    text: "Premium",
  },
  */

  {
    icon: <FaUser />,
    text: "Profile",
  },

];
export default function TracingBeamDemo() {
  return (
    <div className="grid grid-cols-12 gap-4 overflow-hidden">
      <div className="col-span-3 text-white">
        <div className="flex flex-col gap-4 mt-10">
        <ul className="mt-10">
          {sidebarItems.map((item) => (
            <li className="flex justify-start items-center gap-7 py-5 text-2xl hover:bg-opacity-30 hover:bg-white hover:text-black rounded-full px-20 ">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <button className="bg-white text-black rounded-full p-4 mx-20 text-lg w-[200px] hover:bg-opacity-30">
            Post
            </button>
        </div>
        </div>
      </div>
      <div className="col-span-6 border border-cyan-950 overflow-y-auto h-full">
      <div className="flex flex-col gap-4 mt-10">
      <textarea
        className="text-white w-full bg-transparent text-xl px-5 py-5 border-b border-slate-800"
        placeholder="Whats Happening?"
        rows={2}
        style={{ resize: "none" }}/>
      <div className="flex items-center justify-between w-full gap-2 py-2">
      <button
        className="text-xl rounded-full p-2 hover:bg-gray-600 cursor-pointer"
      >
      </button>
      <button
        className="bg-white text-black px-4 py-3 rounded-full hover:bg-opacity-30 w-[150px] mx-6"
      >
        Post
      </button>
</div>
</div>
          <div className="max-w-2xl mx-auto antialiased relative">
            {Content.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit mb-4">
                  {item.text}
                </h2>
                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.img && (
                    <Image
                      src={item.img}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.text}
                  <br/>
                  {item.createdAt}
                </div>
              </div>
            ))}
          </div>
      </div>
      <div className="col-span-3 text-white overflow-hidden">
        {/* <TradingViewWidget/> */}
      </div>
    </div>
  );
}


/*
 

model Post {
  id        Int      @id @default(autoincrement())
  text      String
  img       String
  createdAt DateTime @default(now())
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}


  */






// Adding a DB route to get the data like UId that gets name, profle, bio, tweet <p> and image of post.
//
// 
const Content = [
  {
    text: "loren ipsum ilum",
    img: "",
    author: "",
    createdAt: "00:00:0000",
  },




    {
      img:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      img:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {

      text: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      img:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
