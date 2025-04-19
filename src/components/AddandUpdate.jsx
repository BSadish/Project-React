import React from "react";
import Model from "./Model";
import {Formik, Form, Field} from "formik"
import {db} from '../config/firebase'
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";


const AddandUpdate = ({isOpen, onClose, isUpdate, contact}) => {

    const addcontact= async (contact)=>{
try {
    const contactRef= collection(db,"contact");
    await addDoc(contactRef, contact);
    onClose();
} catch (error) {
    console.log(error);
    
}
    }

    const updatecontact= async (contact,id)=>{
try {
    const contactRef= doc(db,"contact",id);
    await updateDoc(contactRef, contact)
    onClose();
} catch (error) {
    console.log(error);
    
}
    }
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        
<Formik 
initialValues={
    isUpdate ?
    {
    name:contact.name,
    email:contact.email,
}
    :{
        name:"",
        email:"",
    }
   
}
onSubmit={(values)=>{
    // console.log(values)
    isUpdate ? updatecontact(values, contact.id):

    
    addcontact(values)
}}
>
    
<Form className="flex flex-col gap-3">
    <div className="flex flex-col gap-1">
    <label htmlFor="name">Name</label>
    <Field name="name" className="border h-10" />
    </div>

    <div className="flex flex-col gap-1">
    <label htmlFor="email">Email</label>
    <Field  name="email" className="border h-10" />
    </div>

    <button className="bg-orange-400 py-1.5 px-3 border rounded-[5px] self-end font-bold cursor-pointer" >
       {isUpdate ? "Update" :"Add"} Contact
    </button>
</Form>
</Formik>

      </Model>
    </div>
  );
};

export default AddandUpdate;
