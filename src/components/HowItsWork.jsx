import {
  FaArrowsDownToPeople,
  FaBusinessTime,
  FaPeopleGroup,
  FaUserLock,
} from 'react-icons/fa6';
import { TbTopologyComplex } from 'react-icons/tb';

const HowItsWork = () => {
  return (
    <section className="mb-8">
      <h3 className="text-center text-4xl mb-3 font-bold">Як це працює</h3>
      <div className="bg-slate-950 py-[35px] px-24 flex items-center justify-center rounded-2xl">
        <ul className="text-white flex gap-8">
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaPeopleGroup size="60px" />
            <h4 className="text-2xl">Команда</h4>
            <p className="text-[17px]">
              Над проєктами працюють профільні адвокати та юристи, з чіткою
              спеціалізацією{' '}
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaUserLock size="60px" />
            <h4 className="text-2xl">Результат</h4>
            <p className="text-[17px]">
              Співпраця між юристами та клієнтами - наша пріоритетна мета та
              головна місія компанії
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaBusinessTime size="60px" />
            <h4 className="text-2xl">Вибір</h4>
            <p className="text-[17px]">
              Можливість вибору виконавця для послуги{' '}
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaArrowsDownToPeople size="60px" />
            <h4 className="text-2xl">Лояльність</h4>
            <p className="text-[17px]">
              Політика компанії дозволяє бути гнучкими для наших клієнтів у
              питаннях ціноутворення та порядку оплати послуг
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <TbTopologyComplex size="60px" />
            <h4 className="text-2xl">Комплексність</h4>
            <p className="text-[17px]">
              Комплексний супровід процесів дозволяє досягти необхідних
              результатів
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItsWork;
