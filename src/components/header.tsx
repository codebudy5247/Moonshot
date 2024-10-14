const Header = () => {
  return (
    <header className="mb-2 shadow">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <nav className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
          <ul className="flex flex-col items-center sm:flex-row"></ul>
          <ul className="mt-4 flex sm:mt-0">
            <button>Logout</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
