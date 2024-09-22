import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../redux/auth/selectors';
import { Link, NavLink } from 'react-router-dom';
import { logoutThunk } from '../redux/auth/operations';
import { BiCabinet } from 'react-icons/bi';

const UserMenu = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  console.log(userName);

  return (
    <div>
      {isLogIn ? (
        <div className="flex gap-8 items-center">
          <Link
            to="/cabinet"
            className="active text-black flex items-center gap-4 cursor-pointer"
          >
            {userName} <BiCabinet />
          </Link>
          <button
            className="bg-white px-[15px] py-[10px] font-bold rounded-[34px]"
            type="button"
            onClick={() => dispatch(logoutThunk())}
          >
            Вихід
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <NavLink to="/login" className="text-white px-[15px] py-[10px]">
            Вхід
          </NavLink>
          <NavLink to="/register" className="text-white px-[15px] py-[10px]">
            Реєстрація
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
