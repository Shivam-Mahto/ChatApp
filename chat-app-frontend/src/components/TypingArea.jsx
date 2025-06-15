import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const TypingArea = () => {
  return (
    <div className="flex mx-auto w-2/3 p-3 rounded-full dark:bg-gray-800 border-b-0 gap-2 items-center">
      <div className="w-full">
        <input
          className="dark:bg-gray-700 py-2 rounded-full w-full p-2 focus:outline-1 focus:outline-blue-500"
          type="text"
          placeholder="Type your message here...."
        ></input>
      </div>
      <div>
        <IoMdAttach size="2em" className="cursor-pointer" />
      </div>
      <div>
        <button className="p-2 rounded-full curson-pointer bg-green-500 hover:bg-green-800 flex items-center justify-center">
          <IoSend size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default TypingArea;
