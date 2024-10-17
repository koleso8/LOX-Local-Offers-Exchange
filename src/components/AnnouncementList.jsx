import Aos from 'aos';
import AnnouncementItem from './AnnouncementItem';

const AnnouncemenList = ({ array }) => {
  Aos.init();
  return (
    <ul className="flex flex-col gap-5 w-full">
      {array.map(item => (
        <AnnouncementItem key={item.id || item.announcementDate} item={item} />
      ))}
    </ul>
  );
};

export default AnnouncemenList;
