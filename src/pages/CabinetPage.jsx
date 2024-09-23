import { useSelector } from 'react-redux';
import AnnouncemenList from '../components/AnnouncementList';
import {
  selectTypeOfUser,
  selectUserAnnouncements,
} from '../redux/auth/selectors';
import { BiCabinet } from 'react-icons/bi';
import AddAnnouncementButton from '../components/AddAnnouncementButton';
import AddAnnouncementModal from '../components/AddAnnouncementModal';
import { Link } from 'react-router-dom';

const CabinetPage = () => {
  const isLawyer = useSelector(selectTypeOfUser) === 'lawyer';
  const userAnnouncement = useSelector(selectUserAnnouncements);
  return (
    <div className=" text-black py-2 flex flex-col gap-8 justify-center items-center w-screen">
      {userAnnouncement.length ? (
        <AnnouncemenList array={userAnnouncement} />
      ) : (
        <div>
          <BiCabinet size="20vh" color="black" className="mx-auto" />
          <h3 className="text-[60px]  text-center font-bold mb-5">
            {'Ууууупс :('}
          </h3>
          {isLawyer ? (
            <p className="text-[20px]  text-center">
              Ви ще не відповідали на оголошення, Ви можете знайти оголошення
              натиснувши кнопку нижче!
            </p>
          ) : (
            <p className="text-[20px]  text-center">
              Ви ще не створювали оголошення, Ви можете додати оголошення
              натиснувши кнопку нижче!
            </p>
          )}
        </div>
      )}
      <AddAnnouncementModal />
      {isLawyer ? (
        <Link
          to="/announcement"
          className="text-5xl text-white pt-2 pb-4 px-4 bg-slate-950 rounded-3xl"
        >
          Оголошення
        </Link>
      ) : (
        <AddAnnouncementButton />
      )}
    </div>
  );
};

export default CabinetPage;
