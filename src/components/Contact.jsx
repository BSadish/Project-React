import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import {db} from '../config/firebase'
import { deleteDoc, doc } from 'firebase/firestore';
import AddandUpdate from './AddandUpdate';
import useDiscious from "../hooks/useDiscious"

const Contact = ({contact}) => {

    const {onClose, onOpen, isOpen}=useDiscious();

    const deletecontact=async(id)=>{
        try {
            
            await deleteDoc(doc(db,"contact",id))
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <>
      <div key={contact.id} className="bg-yellow-200 flex justify-between p-2 rounded-lg ">
        <div className="flex gap-1 ">
          <HiOutlineUserCircle className="text-orange-500 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className=" text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex items-center text-3xl">
          <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
          <IoMdTrash onClick={()=>deletecontact(contact.id)} className="text-orange-400 cursor-pointer" />
        </div>
      </div>
      <AddandUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
      </>
  )
}

export default Contact
