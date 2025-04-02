import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import Contact from "./components/Contact";

const App = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const getcontract = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getcontract();
  }, []);
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Nav />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="bg-transparent border-2 border-white rounded-[4px] h-10 flex-grow text-white pl-9"
          />
        </div>

        <CiCirclePlus className="text-white text-5xl cursor-pointer" />
      </div>
      <div className="mt-4">
  {contacts.map((contact)=>(
    <Contact key={contact.id} contact={contact}/>
  ))}
</div>
    </div>
  );
};

export default App;
