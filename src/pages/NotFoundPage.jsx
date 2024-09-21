import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-full bg-slate-950 text-white absolute top-0 left-0">
      <span className="text-[400px] font-extrabold">404</span>
      <span className="text-4xl">СТОРІНКУ НЕ ЗНАЙДЕНО</span>
      <span className="text-4xl">
        Ви повернетесь на головну сторінку через {count} секунд
      </span>
    </div>
  );
};

export default NotFoundPage;
