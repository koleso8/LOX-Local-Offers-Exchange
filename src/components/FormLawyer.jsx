import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/operations';

const FormLawyer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    type: 'lawyer',
    city: '',
    exp: '',
    stream: '',
    email: '',
    tel: 380,
    password: '',
    announcements: [],
  };

  const handleSubmit = (data, action) => {
    console.log(data);
    dispatch(registerThunk(data));
    action.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className="flex flex-col gap-8 pt-16 w-[360px] ">
        <label className="flex justify-between">
          П.І.Б.
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="text"
            name="username"
            placeholder="введіть ім`я"
          />
        </label>
        <label className="flex justify-between">
          Місто
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="text"
            name="city"
            placeholder="введіть місто"
          />
        </label>
        <label className="flex justify-between">
          Стаж
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="number"
            name="exp"
            placeholder="стаж(в роках)"
          />
        </label>
        <label className="flex justify-between">
          Напрямок
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="text"
            name="stream"
            placeholder="Ваш напрямок"
          />
        </label>
        <label className="flex justify-between">
          Email
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="email"
            name="email"
            placeholder="електронна пошта"
          />
        </label>
        <label className="flex justify-between">
          Номер телефону
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="tel"
            name="tel"
            placeholder="введіть номер"
          />
        </label>
        <label className="flex justify-between">
          Пароль
          <Field
            className="text-black pl-2 border-white border-[2px] rounded-3xl"
            type="password"
            name="password"
            placeholder="введіть пароль"
          />
        </label>

        <button
          className=" py-3 bg-white rounded-3xl text-black font-semibold flex items-center justify-center"
          type="submit"
        >
          Відправити на перевірку
        </button>
      </Form>
    </Formik>
  );
};

export default FormLawyer;
