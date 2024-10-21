import { announcements } from '../test/announcements';
import AnnouncemenList from '../components/AnnouncementList';
import { useSelector } from 'react-redux';
import { selectAnnouncements } from '../redux/announcements/selector';

const AnnouncementsPage = () => {
  const announ = useSelector(selectAnnouncements);
  return (
    <div className="text-[100px] text-black py-2 w-full">
      <AnnouncemenList array={announcements} />
    </div>
  );
};

export default AnnouncementsPage;
