import { Link } from 'react-router-dom';

import UserMenu from './UserMenu';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="w-full bg-slate-950 h-[120px] py-6 fixed z-50">
      <div className="w-4/5 flex justify-between mx-auto my-auto items-center">
        <Link to="/" className="flex flex-col h-20 text-white">
          <h3 className="text-[40px] font-black h-12 ">LOX</h3>
          <p className="text-xl  h-6">Local Offers Exchange</p>
        </Link>

        <Navigation />

        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
