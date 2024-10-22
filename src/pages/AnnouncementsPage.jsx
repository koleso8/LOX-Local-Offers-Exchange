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

  useEffect(() => {
    dispatch(fetchAllAnnouncementsThunk());
  }, []);

  const loadMore = async () => {
    const more = dispatch(fetchAllAnnouncementsThunk(page));
    setPage(prev => (prev += 1));
    console.log(await more);
    // TODO NEXT PAGE
    setIsNext(await more.payload.hasNextPage);
  };
  return (
    <div className="text-black py-2 w-full flex flex-col items-center">
      <AnnouncemenList array={announcements} />
      {isNext && (
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
