import { FaTelegram, FaViber, FaWhatsapp } from 'react-icons/fa';
import { TbMessageCircleFilled } from 'react-icons/tb';

const Address = () => {
  return (
    <div>
      <address className="flex flex-col gap-2 not-italic mb-5 ">
        <p>м. Дніпро, пр-т Дмитра Яворницького, буд. 99</p>
        <a href="tel:+380671358585">+38(067)135-85-85</a>
        <a href="mailto:lox@gmail.com">lox@gmail.com</a>
      </address>
      <ul className="flex gap-5 mb-8">
        <li className=" p-1 border-black border-[1px] rounded-full">
          <a className="" href="" target="_blank">
            <FaTelegram size="20px" />
          </a>
        </li>
        <li className=" p-1 border-black border-[1px] rounded-full">
          <a className="" href="" target="_blank">
            <FaViber size="20px" />
          </a>
        </li>
        <li className=" p-1 border-black border-[1px] rounded-full">
          <a className="" href="" target="_blank">
            <FaWhatsapp size="20px" />
          </a>
        </li>
        <li className=" p-1 border-black border-[1px] rounded-full">
          <a className="" href="" target="_blank">
            <TbMessageCircleFilled size="20px" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Address;
