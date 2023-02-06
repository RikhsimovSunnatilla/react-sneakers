import { Link } from 'react-router-dom';

import CartIcon from '../Svg/CartIcon';
import HeartIcon from '../Svg/HeartIcon';
import UserIcon from '../Svg/UserIcon';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 p-11">
      <Link to={'/'} className="flex items-center">
        <img src={logo} width={40} height={40} className="mr-4 inline-block" alt="Logo" />
        <div>
          <h3 className="text-xl font-bold uppercase leading-6 text-black">React Sneakers</h3>
          <div className="text-sm font-normal text-slate-400">Магазин лучших кроссовок</div>
        </div>
      </Link>

      <div className="grid auto-cols-max grid-flow-col items-center gap-x-5">
        <Link to={'/'} className="flex items-center py-1">
          <CartIcon />
          <span className="ml-2 text-sm font-semibold text-slate-600">1205 руб.</span>
        </Link>
        <Link to={'/saveds'} className="p-1">
          <HeartIcon />
        </Link>
        <Link to={'/orders'} className="p-1">
          <UserIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
