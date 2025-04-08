"use client"

import { useRef, useState } from "react";

import { cn } from "@/utilities";
import { useOutsideClick } from "@/hooks/outSideClick";

import { Social } from "../social";
import { SVGChat, SVGChatClose } from "./svg-icon";


interface IChatProps {
  className?:string; 
}

export const Chat = ({className}:IChatProps) => {
  const ref = useRef(null);
  
  const [isOpen, setIsOpen] = useState(false);
    
  const handleClick =()=>{
    setIsOpen(!isOpen)
  }

  useOutsideClick(() => setIsOpen(false), ref);
  
  return (
  <div 
  ref={ref}
  onClick={handleClick}
   className={cn("w-[60px] h-[60px] right-5 bottom-18 z-[1000] fixed transition-all duration-300 ease-in-out bg-blueBg",className)}> 
    <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden -translate-y-1/2 h-0 duration-150 ease-in-out", isOpen && "-top-[110%] h-fit overflow-visible -translate-y-18")}>
      <Social className="flex-col text-textBlue/80 md:text-[#D5D5D5] md:[&_*]:hover:text-textBlue duration-300 ease-in-out transition-all"/>
    </div>

    <div className={cn("relative z-20 w-[60px] h-[60px] transition-all duration-500 ",isOpen === false && '[&_*]:scale-90 [&_*]:transition-all [&_*]:duration-300 hover:[&_*]:scale-100 [&_*]:translate-x-[2.5%] [&_*]:translate-y-[2.5%] hover:[&_*]:translate-x-0 hover:[&_*]:translate-y-0')}>
      {!isOpen ? <SVGChat/>: <SVGChatClose/>}

    </div>
  </div>)
};
