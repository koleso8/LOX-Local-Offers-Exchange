import { useDispatch } from 'react-redux';
import { setNewAnnoucement } from '../redux/modal/slice';

const AddAnnouncementButton = () => {
  const dispath = useDispatch();

  return (
    <div>
      <button
        className="text-5xl text-white pt-2 pb-4 px-4 bg-slate-950 rounded-3xl"
        type="button"
        onClick={() => dispath(setNewAnnoucement(true))}
      >
        Додати оголошення
      </button>
    </div>
  );
};

export default AddAnnouncementButton;
