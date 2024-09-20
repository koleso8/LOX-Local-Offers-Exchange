import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="text-white text-l font-semibold flex gap-4">
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
  );
};

export default Navigation;
