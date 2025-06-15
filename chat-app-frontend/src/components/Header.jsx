const Header = () => {
  return (
    <div className="flex justify-between p-3 items-center w-full dark:bg-gray-900">
      <div>Room: 1234</div>
      <div>User: Shivam Mahto</div>
      <div>
        <button className="px-2 py-2 rounded bg-red-500 hover:bg-red-800">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default Header;
