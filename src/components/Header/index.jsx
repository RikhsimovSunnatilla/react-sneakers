import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="border-b border-stone-200 p-11">
      <Link to={'/'} className="flex items-center">
        <img src={logo} width={40} height={40} className="mr-4 inline-block" alt="Logo" />
        <div>
          <h3 className="text-xl font-bold uppercase leading-6 text-black">React Sneakers</h3>
          <div className="text-sm font-normal text-slate-400">Магазин лучших кроссовок</div>
        </div>
      </Link>
      <div></div>
    </header>
  );
}

export default Header;
