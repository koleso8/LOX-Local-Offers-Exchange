import { useDispatch } from 'react-redux';
import { setCurrentAnnouncement } from '../redux/modal/slice';
import { formatDate } from '../helpers/formatData';

const AnnouncementItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="flex w-full cursor-pointer hover:scale-105 transition-all "
      onClick={() => dispatch(setCurrentAnnouncement(item))}
    >
      <span className="flex flex-col w-4/5 bg-slate-200 text-black p-5 rounded-l-2xl">
        <p className="text-[17px] capitalize">{item.author}</p>
        <h3 className="text-xl">{item.title}</h3>
        <p className="text-[17px] mb-4">{item.comment}</p>
        <p className="text-sm capitalize">{formatDate(item.createdAt)}</p>
      </span>
      <span className="rounded-r-2xl flex flex-col w-1/5 bg-black text-white text-xl text-center justify-center">
        {item.price ? `${item.price} грн` : 'Не вказано'}
      </span>
    </li>
  );
};

export default AnnouncementItem;
