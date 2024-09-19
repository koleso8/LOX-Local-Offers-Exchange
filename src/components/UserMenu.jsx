import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const isLogIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLogIn ? (
        <button className="bg-white">LOGOUT</button>
      ) : (
        <div className="flex gap-4">
          <NavLink to="/login" className="text-white px-[15px] py-[10px]">
            Вхід
          </NavLink>
          <NavLink
            to="/registration"
            className="text-white px-[15px] py-[10px]"
          >
            Реєстрація
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
