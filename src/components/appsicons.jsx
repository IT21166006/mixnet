import React from 'react'
import { RiMotorbikeFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { AiTwotoneShop } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function appsicons() {
  return (
    <div>
        <Link to =""><IoHome /></Link>
        <Link to =""><AiTwotoneShop /></Link>
        <Link to =""><RiMotorbikeFill /></Link>
        <Link to =""><HiOutlineOfficeBuilding /></Link>
      
    </div>
  )
}

export default appsicons
