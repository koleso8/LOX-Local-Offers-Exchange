import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../redux/auth/operations';

const UserMenu = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      {isLogIn ? (
        <button
          className="bg-white px-[15px] py-[10px] font-bold rounded-[34px]"
          type="button"
          onClick={() => dispatch(logoutThunk())}
        >
          Вихід
        </button>
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
