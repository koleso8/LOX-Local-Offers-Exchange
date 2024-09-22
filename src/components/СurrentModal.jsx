import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectTypeOfUser } from '../redux/auth/selectors';

const CurrentModal = ({ isOpen, onClose, announcement }) => {
  const isLawyer = useSelector(selectTypeOfUser) === 'lawyer';
  return (
    <div className="fixed">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose} // Закриття при натисканні Escape або на бекдроп
        shouldCloseOnOverlayClick={true} // Закриття при кліку на бекдроп
        className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4"
        ariaHideApp={false}
      >
        <div className="bg-white p-10 relative w-[540px] rounded-3xl max-h-screen flex flex-col gap-3">
          <button className="absolute top-4 right-4" onClick={() => onClose()}>
            <FiX size="24px" />
          </button>
          <h3 className="text-center text-xl font-bold">
            {announcement.title}
          </h3>
          <p className="border-2 border-black rounded-xl p-3">
            {announcement.comment}
          </p>
          <span>
            <p className="font-bold underline">{announcement.author}</p>
            <p>{announcement.announcementDate}</p>
          </span>
          <p className=" bg-black text-white p-5 rounded-2xl text-center w-60 mx-auto">
            {announcement.price} грн. {isLawyer && '|  Допомогти'}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CurrentModal;
