import { Field, Form, Formik } from 'formik';
import { loginThunk } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const FormLogin = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data, action) => {
    console.log(data);
    dispatch(loginThunk({ data }));
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className="flex flex-col gap-8 pt-16 w-[260px] ">
        <label className="flex justify-between">
          Email
          <Field
            className="pl-2 text-black border-white border-[2px] rounded-3xl"
            type="email"
            name="email"
            placeholder="електронна пошта"
          />
        </label>

        <label className="flex justify-between mb-14">
          Пароль
          <Field
            className="pl-2 text-black border-white border-[2px] rounded-3xl"
            type="password"
            name="password"
            placeholder="введіть пароль"
          />
        </label>

        <button
          className=" py-3 bg-white rounded-3xl text-black font-semibold flex items-center justify-center"
          type="submit"
        >
          ВXІД
        </button>
        <Link
          className=" text-center py-3 bg-white rounded-3xl text-black text-xs font-semibold flex items-center justify-center"
          type="button"
          to="/register"
        >
          Якщо у Вас ще не має аккаунту, спочатку зареєструйтесь
        </Link>
      </Form>
    </Formik>
  );
};

export default FormLogin;
