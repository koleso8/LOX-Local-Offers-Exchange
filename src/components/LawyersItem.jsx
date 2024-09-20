import { FaPowerOff } from 'react-icons/fa';

const LawyersItem = ({ item }) => {
  return (
    <li className="flex w-full h-32]">
      <span className="flex w-4/5 bg-slate-200 text-black  rounded-l-2xl">
        <img className="w-40 object-cover" src={item.img} alt={item.username} />
        <span className="flex-col p-5">
          <h3 className="text-3xl">{item.username}</h3>
          <p className="text-[17px]">{item.address}</p>
          <p className="text-[17px]">{item.age}</p>
          <p className="text-[17px]">{item.count}</p>
          <p className="text-[17px]">{item.exp}</p>
        </span>
      </span>
      <span className="rounded-r-2xl flex flex-col w-1/5 bg-black text-white text-xl text-center justify-center items-center gap-4">
        Звернутись до юриста
        <FaPowerOff color="white" size="40px" />
      </span>
    </li>
  );
};

export default LawyersItem;
