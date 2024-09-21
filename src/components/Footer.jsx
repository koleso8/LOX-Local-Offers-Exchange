import { Link } from 'react-router-dom';
import Address from './Address';

const Footer = () => {
  return (
    <div className="w-[100vw] h-[200px] py-8 bg-slate-950 border-none">
      <div className="text-white w-4/5 flex justify-between mx-auto">
        <nav className=" flex gap-2 flex-col">
          <Link to="/about" className="py-3 px-6">
            Про компанію
          </Link>
          <Link to="/contacts" className="py-3 px-6">
            Контакти
          </Link>
          <Link to="/oferta" className="py-3 px-6">
            Договір оферти
          </Link>
        </nav>
        <Address />
      </div>
    </div>
  );
};

export default Footer;
