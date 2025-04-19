import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";

import {
  collection,

  onSnapshot,
 
 

} from "firebase/firestore";
import { db } from "./config/firebase";

import Contact from "./components/Contact";
import useDiscious from "./hooks/useDiscious";
import AddandUpdate from "./components/AddandUpdate";

const App = () => {
  const [contacts, setContact] = useState([]);
  const { onClose, onOpen, isOpen } = useDiscious();

  useEffect(() => {
    const getcontract = async () => {
      try {
        const contactsRef = collection(db, "contact");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getcontract();
  }, []);
  return (
    <>
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

          <CiCirclePlus
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <AddandUpdate onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default App;
