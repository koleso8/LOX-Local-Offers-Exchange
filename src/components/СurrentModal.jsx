import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

const CurrentModal = ({ isOpen, onClose, announcement }) => {
  return (
    <div className="fixed">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose} // Закриття при натисканні Escape або на бекдроп
        shouldCloseOnOverlayClick={true} // Закриття при кліку на бекдроп
        className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4"
        ariaHideApp={false}
      >
        <div className="bg-white p-10 relative w-[540px] rounded-3xl max-h-screen">
          <button className="absolute top-4 right-4" onClick={() => onClose()}>
            <FiX size="24px" />
          </button>
          <h3>{announcement.title}</h3>
          <p>{announcement.author}</p>
          <p>{announcement.announcementDate}</p>
          <p>{announcement.price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CurrentModal;
