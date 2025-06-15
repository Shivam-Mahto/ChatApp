import Message from "./Message";

const MessageArea = ({ messages, user }) => {
  return (
    <div className="flex-1 w-2/3 mx-auto p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {messages.map((message, index) => (
        <Message message={message} key={index} user={user} />
      ))}
    </div>
  );
};

export default MessageArea;
