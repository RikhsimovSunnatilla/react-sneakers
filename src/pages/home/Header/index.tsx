import SearchIcon from '../../../components/Icons/SearchIcon';

function Header() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-black">Все кроссовки</h1>
      <div className="relative">
        <SearchIcon className="-trangray-y-1/2 pointer-events-none absolute top-1/2 left-4	 [&>path]:stroke-gray-400" />
        <input
          className="py h-11 w-64 rounded-lg border border-solid border-gray-300 pl-11 pr-2 font-normal text-black placeholder:font-normal placeholder:text-gray-400 focus:outline-gray-500"
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default Header;
