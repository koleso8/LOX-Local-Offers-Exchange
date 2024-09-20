import { announcements } from '../test/announcements';
import AnnouncemenList from '../components/AnnouncementList';

const AnnouncementsPage = () => {
  return (
    <div className="text-[100px] text-black py-2">
      <AnnouncemenList array={announcements} />
    </div>
  );
};

export default AnnouncementsPage;
