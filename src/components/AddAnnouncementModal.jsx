import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewAnnouncement } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';
import { FiX } from 'react-icons/fi';
import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';
import { selectTypeOfUser, selectUserName } from '../redux/auth/selectors';

const AddAnnouncementModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectNewAnnouncement);
  const onClose = () => dispatch(closeModal());
  const type = useSelector(selectTypeOfUser);
  const username = useSelector(selectUserName);

  const handleSubmit = (data, action) => {
    action.resetForm();
  };

  const initialValues = {
    announcementDate: Date.now(),
    type,
    title: '',
    comment: '',
    author: username,
    price: 0,
  };

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
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className="flex flex-col gap-8 pt-16 w-[260px] ">
              <label className="flex justify-between">
                Заголовок
                <Field
                  className="pl-2 text-black border-white border-[2px] rounded-3xl"
                  type="text"
                  name="title"
                  placeholder="введіть заголовок"
                />
              </label>

              <label className="flex justify-between mb-14">
                Проблема
                <Field
                  className="pl-2 text-black border-white border-[2px] rounded-3xl"
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="введіть проблему"
                />
              </label>

              <button
                className=" py-3 bg-white rounded-3xl text-black font-semibold flex items-center justify-center"
                type="submit"
              >
                Додати оголошення
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default AddAnnouncementModal;
