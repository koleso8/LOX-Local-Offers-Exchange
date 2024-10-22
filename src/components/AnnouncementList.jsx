import Aos from 'aos';
import AnnouncementItem from './AnnouncementItem';

const AnnouncemenList = ({ array }) => {
  Aos.init();

  return (
    <ul className="flex flex-col gap-5 w-full justify-center mb-4">
      {array?.map(item => (
        <AnnouncementItem key={item._id || item.announcementDate} item={item} />
      ))}
    </ul>
  );
};

export default AnnouncemenList;
