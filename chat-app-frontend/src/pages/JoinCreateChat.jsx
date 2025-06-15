import React, { useState } from "react";

const JoinCreateChat = () => {
  const [details, setDetails] = useState({
    roomId: "",
    userName: "",
  });

  function handleFormInputChange(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  }

  function joinRoom() {
    console.log(details);
  }

  function createRoom() {
    console.log(details);
  }

  // TODO: Add form validations

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex-col max-w-md p-10 w-full rounded dark:bg-gray-900 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Join/Create Room
        </h1>
        {/* Name Div */}
        <div>
          <label htmlFor="name" className="font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="userName"
            value={details.userName}
            onChange={handleFormInputChange}
            placeholder="Enter your name"
            className="p-2 mb-6 mt-2 w-full dark:bg-gray-600 border focus:outline-none dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>

        {/* Room Id div */}
        <div>
          <label htmlFor="name" className="font-medium mb-2">
            Room Id / New Room ID
          </label>
          <input
            type="text"
            id="roomId"
            name="roomId"
            value={details.roomId}
            onChange={handleFormInputChange}
            placeholder="Enter roomId"
            className="p-2 mb-6 mt-2 w-full dark:bg-gray-600 border focus:outline-none dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>

        {/* Buttons */}

        <div className="flex justify-between">
          <button
            onClick={joinRoom}
            className="px-3 py-2 dark:bg-blue-500 hover:bg-blue-800 rounded"
          >
            Join Room
          </button>

          <button
            onClick={createRoom}
            className="px-3 py-2 dark:bg-orange-500 hover:bg-orange-800 rounded"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateChat;
