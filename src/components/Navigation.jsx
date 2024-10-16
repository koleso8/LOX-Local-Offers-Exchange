import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="text-white text-l font-semibold flex gap-4 ">
      <NavLink
        to="/"
        className="py-[10px] px-[15px]  hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
      >
        Головна
      </NavLink>
      <NavLink
        to="about"
        className="py-[10px] px-[15px]  hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
      >
        Про нас
      </NavLink>
      <NavLink
        to="announcement"
        className="py-[10px] px-[15px] hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
      >
        Оголошення
      </NavLink>
      <NavLink
        to="lawyers"
        className="py-[10px] px-[15px] hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
      >
        Юристи
      </NavLink>
    </nav>
  );
};

export default Navigation;
