import { Link } from "react-router-dom";
import { useState } from 'react';
import { ModalContact } from "../ModalContact";

export const Contact = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="w-full min-h-96 p-2 flex flex-col gap-7 md:w-2/4">
      <h5 className="text-center text-2xl text-white font-bold">
        Let´s work together
      </h5>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-primary rounded-full  w-full text-center p-2 text-white font-bold md:w-2/4 self-center hover:scale-105 hover:brightness-105 transition-all duration-200"
      >
        Contact
      </button>
      <div className="flex text-white justify-center">
        <span>
          © Portfolio made by <strong>Jesus Gastelum</strong>
        </span>
      </div>
      {
        isModalOpen &&
        ( <ModalContact setIsModalOpen={setIsModalOpen} /> )
      }
    </footer>
  );
};
