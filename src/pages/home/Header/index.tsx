import SearchIcon from '../../../components/Icons/SearchIcon';

function Header() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-black">Все кроссовки</h1>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2	 [&>path]:stroke-gray-300" />
        <input
          className="py h-11 w-64 rounded-lg border border-solid border-gray-200 bg-white pl-11 pr-2 font-normal text-black placeholder:font-normal placeholder:text-gray-300 focus:outline-gray-500"
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default Header;
