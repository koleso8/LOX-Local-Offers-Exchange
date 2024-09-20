import {
  FaArrowsDownToPeople,
  FaBusinessTime,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaSackDollar,
  FaUserLock,
} from 'react-icons/fa6';
import { ImCheckboxChecked } from 'react-icons/im';
import { MdOutlineQueryStats } from 'react-icons/md';

const AboutUs = () => {
  return (
    <section className="text-black mb-8">
      <h2 className="text-[40px] font-semibold mb-5">Про нас</h2>
      <p className="text-2xl font-semibold mb-5">
        Професійна юридична допомога в Україні
      </p>
      <p className="text-[64px] text-center font-bold mb-5">1200 перемог</p>
      <div className="bg-slate-950 p-8 rounded-xl flex flex-col items-center gap-8 mb-8">
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
            <h4 className="text-2xl">Комплексність</h4>
            <p className="text-[17px]">
              Комплексний супровід процесів дозволяє досягти необхідних
              результатів
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
        </ul>

        <span className="w-4/5 h-[1px] rounded-3xl bg-white"></span>

        <ul className="text-white flex gap-8">
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <ImCheckboxChecked size="60px" />
            <h4 className="text-2xl">Великий вибір юристів</h4>
            <p className="text-[17px]">LOX пропонує різні категорії робіт</p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaMoneyBillWave size="60px" />
            <h4 className="text-2xl">Вигідні ціни</h4>
            <p className="text-[17px]">
              Можна знайти пропозиції за нижчими цінами, ніж -звичайно
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <MdOutlineQueryStats size="60px" />
            <h4 className="text-2xl">Локальні пропозиції</h4>
            <p className="text-[17px]">
              LOX дозволяє шукати покупців у вашому регіоні, що спрощує процес
              та скорочує час
            </p>
          </li>
          <li className="w-3/4 items-center text-center flex flex-col gap-5">
            <FaSackDollar size="60px" />
            <h4 className="text-2xl">Можливість торгу</h4>
            <p className="text-[17px]">
              На LOX часто можна домовитися про ціну безпосередньо з виконавцем
            </p>
          </li>
        </ul>
      </div>
      <p className="text-lg font-semibold">
        Платформа онлайн-оголошень `LOX` надає професійну юридичну допомогу із
        захисту прав, свобод та інтересів приватних та юридичних осіб в Україні.
        Надаючи послуги, ми діємо виключно у рамках законодавства України,
        спираємось на принципи верховенства права та законності. Завдяки цьому у
        97 % випадків ми допомагаємо досягати позитивного результату у вирішенні
        цивільних, господарських, адміністративних та інших спорів. Виходячи з
        конкретних обставин справи, адвокати розробляють покрокову стратегію
        проведення правових заходів у рамках чинного законодавства України, щоб
        отримати сприятливий результат. У разі виникнення проблем у бізнесі, з
        нерухомістю, спадщиною чи в інших важких ситуаціях, послуги адвоката
        просто необхідні. Таким чином, наше завдання полягає в тому, щоб
        допомогти Вам знайти найкраще вирішення юридичного питання. Шляхом
        створення вигідних умов для взаємодії між Вами та юристами. Отримання
        кваліфікованої правової та юридичної допомоги допомагає уникнути
        негативних наслідків та вирішує всі суперечки позитивно та на законних
        підставах. Ми сприяємо розвитку юридичного ринку України забезпечуючи
        доступність якісних правових послуг для всіх.{' '}
      </p>
    </section>
  );
};

export default AboutUs;
