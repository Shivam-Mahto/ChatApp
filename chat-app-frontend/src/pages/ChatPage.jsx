import Header from "../components/Header";
import MessageArea from "../components/MessageArea";
import TypingArea from "../components/TypingArea";

import { useRef, useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Shivam Mahto",
      content: "Hello",
    },
    {
      sender: "Akshat",
      content: "Hello vro",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [user, setUser] = useState("Shivam Mahto");

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MessageArea messages={messages} user={user} />
      <TypingArea />
    </div>
  );
};

export default ChatPage;
