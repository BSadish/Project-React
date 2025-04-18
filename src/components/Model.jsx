import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className=" m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
          <div 
          onClick={onClose}
          className=" backdrop-blur h-screen w-screen absolute top-0 z-40"/>

          
        </>
      )}
    </>
 ,document.getElementById("model-root") );

};

export default Model;
