import React from 'react'
import { useState } from 'react';

const useDiscious = () => {

    const [isOpen, setOpen]= useState(false);
    
    
    const onOpen=()=>{
      setOpen(true);
    }
    const onClose=()=>{
      setOpen(false);
    }
  return {onClose, onOpen, isOpen}
}

export default useDiscious

