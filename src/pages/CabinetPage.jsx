import { useSelector } from 'react-redux';
import AnnouncemenList from '../components/AnnouncementList';
import { selectUserAnnouncements } from '../redux/auth/selectors';
import { BiCabinet } from 'react-icons/bi';
import AddAnnouncementButton from '../components/AddAnnouncementButton';

const CabinetPage = () => {
  const userAnnouncement = useSelector(selectUserAnnouncements);
  return (
    <div className=" text-black py-2 flex flex-col gap-8 justify-center items-center">
      {userAnnouncement.length ? (
        <AnnouncemenList array={userAnnouncement} />
      ) : (
        <div>
          <BiCabinet size="20vh" color="black" className="mx-auto" />
          <h3 className="text-[60px]  text-center font-bold mb-5">
            {'Ууууупс :('}
          </h3>
          <p className="text-[20px]  text-center">
            Ви ще не створювали оголошення, Ви можете додати оголошення
            натиснувши кнопку нижче!
          </p>
        </div>
      )}
      <AddAnnouncementButton />
    </div>
  );
};

export default CabinetPage;
