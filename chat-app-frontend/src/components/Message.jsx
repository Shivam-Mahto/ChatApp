const Message = ({ message, user }) => {
  return (
    <div>
      <div
        className={`flex ${
          user === message.sender ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`w-xs rounded p-2 ${
            user === message.sender ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          <p className="font-bold">{message.sender}</p>
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
