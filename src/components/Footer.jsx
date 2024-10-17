import { Link } from 'react-router-dom';
import Address from './Address';
import CurrentModal from './СurrentModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAnnouncement } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';

const Footer = () => {
  const currentAnnouncemetn = useSelector(selectCurrentAnnouncement);
  const isOpen = !!currentAnnouncemetn;
  const dispatch = useDispatch();

  return (
    <div className="w-[100vw] h-[200px] py-8 bg-slate-950 border-none">
      <div className="text-white w-4/5 flex justify-between mx-auto">
        <nav className=" flex gap-2 flex-col">
          <Link
            to="/about"
            className="py-3 px-6 hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
          >
            Про компанію
          </Link>
          <Link
            to="/contacts"
            className="py-3 px-6  hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
          >
            Контакти
          </Link>
          <Link
            to="/oferta"
            className="py-3 px-6 hover:[text-shadow:#FFF_0px_0px_10px,_#FFF_0px_0px_15px,_0px_0px_3px_rgba(206,89,55,0)] transition-all ease-linear"
          >
            Договір оферти
          </Link>
        </nav>
        <Address />

        {currentAnnouncemetn && (
          <CurrentModal
            isOpen={isOpen}
            onClose={() => {
              dispatch(closeModal());
            }}
            announcement={currentAnnouncemetn}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
