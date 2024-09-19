import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { logoutThunk } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';
import UserMenu from './UserMenu';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-slate-950 h-[120px] py-6">
      <div className="w-4/5 flex justify-between mx-auto my-auto items-center">
        <Link to="/" className="flex flex-col h-20 text-white">
          <h3 className="text-[40px] font-black h-12 ">LOX</h3>
          <p className="text-xl  h-6">Local Offers Exchange</p>
        </Link>

        <nav className="text-white flex gap-4">
          <NavLink to="/" className="py-[10px] px-[15px]">
            Головна
          </NavLink>
          <NavLink to="about" className="py-[10px] px-[15px]">
            Про нас
          </NavLink>
          <NavLink to="announcement" className="py-[10px] px-[15px]">
            Оголошення
          </NavLink>
          <NavLink to="lawyers" className="py-[10px] px-[15px]">
            Юристи
          </NavLink>
        </nav>

        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
