import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewAnnouncement } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';
import { FiX } from 'react-icons/fi';
import { Field, Form, Formik } from 'formik';

import {
  selectTypeOfUser,
  selectUserName,
  selectUserTel,
} from '../redux/auth/selectors';
import { addAnnouncementThunk } from '../redux/auth/operations';

const AddAnnouncementModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectNewAnnouncement);
  const onClose = () => dispatch(closeModal());
  const type = useSelector(selectTypeOfUser);
  const username = useSelector(selectUserName);
  const tel = useSelector(selectUserTel);

  const handleSubmit = (data, action) => {
    dispatch(addAnnouncementThunk(data));
    action.resetForm();
    onClose();
  };

  const initialValues = {
    announcementDate: new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    type,
    title: '',
    comment: '',
    author: username,
    tel,
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
        <div className="bg-white px-10 pb-10 relative w-[500px] rounded-3xl max-h-screen">
          <button className="absolute top-4 right-4" onClick={() => onClose()}>
            <FiX size="24px" />
          </button>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className="flex flex-col gap-8 pt-16 w-full ">
              <label className="flex gap-5  flex-col">
                Заголовок
                <Field
                  className="pl-2 text-black border-black border-[2px] rounded-lg"
                  type="text"
                  name="title"
                  placeholder="введіть заголовок"
                />
              </label>

              <label className="flex gap-5 flex-col ">
                Проблема
                <Field
                  className="pl-2 text-black border-black border-[2px] rounded-lg  h-36"
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="введіть проблему"
                />
              </label>

              <label className="flex gap-5 flex-col ">
                Ціна (грн)
                <Field
                  className="pl-2 text-black border-black border-[2px] rounded-lg"
                  type="number"
                  name="price"
                  placeholder="введіть ціну"
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
