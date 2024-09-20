import AnnouncementItem from './AnnouncementItem';

const AnnouncemenList = ({ array }) => {
  return (
    <ul className="flex flex-col gap-5">
      {array.map(item => (
        <AnnouncementItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default AnnouncemenList;
