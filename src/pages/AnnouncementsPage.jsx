import AnnouncemenList from '../components/AnnouncementList';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnnouncements } from '../redux/announcements/selector';
import { useEffect, useState } from 'react';
import { fetchAllAnnouncementsThunk } from '../redux/announcements/operations';

const AnnouncementsPage = () => {
  const [page, setPage] = useState(2);
  const [isNext, setIsNext] = useState(true);
  const dispatch = useDispatch();
  console.log(isNext);

  const announcements = useSelector(selectAnnouncements);

  const loadMore = async () => {
    dispatch(fetchAllAnnouncementsThunk(page));
    setPage(prev => (prev += 1));
  };
  return (
    <div className="text-black py-2 w-full flex flex-col items-center">
      <AnnouncemenList array={announcements} />
      {announcements.length === 10 && (
        <button
          className="rounded-lg font-medium bg-black text-white px-6 py-3 w-44"
          onClick={() => loadMore()}
        >
          Завантажити ще
        </button>
      )}
    </div>
  );
};

export default AnnouncementsPage;
