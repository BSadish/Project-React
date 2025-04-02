import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
const Contact = ({contact}) => {
  return (
   
      <div key={contact.id} className="bg-yellow-200 flex justify-between p-2 rounded-lg mb-1">
        <div className="flex gap-1 ">
          <HiOutlineUserCircle className="text-orange-500 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className=" text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center text-3xl">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange-400" />
        </div>
      </div>
 
  )
}

export default Contact
