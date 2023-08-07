import { FC, FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { Cross } from "./Icons";

const initialState = {
  subject: "",
  email: "",
  purposer: "",
};

export const ModalContact: FC<Props> = ({ setIsModalOpen }) => {
  const { formState, handleChange } = useForm(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="fixed w-full flex justify-center items-center min-h-screen top-0 left-0 bg-black bg-opacity-30 backdrop-blur-md">
      <div className="bg-primary flex flex-col gap-4 shadow-lg rounded-lg w-3/4 p-4 text-white">
        <div className="flex justify-center items-center">
          <h4 className="flex-1 text-center font-bold text-3xl">Contact</h4>
          <button
            className="hover:brightness-75 transition-all duration-200"
            onClick={() => setIsModalOpen(false)}
            >
            <Cross />
          </button>
        </div>
        <form
            className="flex flex-col gap-4" 
            onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold">Subject</label>
            <input
              name="subject"
              className="bg-gray-500 p-1 rounded"
              type="text"
              onChange={handleChange}
              value={formState.subject}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Email</label>
            <input
              name="email"
              className="bg-gray-500 p-1 rounded"
              type="text"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Purpose</label>
            <input
              name="text"
              className="bg-gray-500 p-1 rounded"
              type="purpose"
              onChange={handleChange}
              value={formState.purpose}
            />
          </div>
        </form>
        <button className="bg-white text-black font-bold p-1 rounded hover:brightness-90 transition-all duration-200" type="submit">
          Submit
        </button>
      </div>
    </section>
  );
};

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
