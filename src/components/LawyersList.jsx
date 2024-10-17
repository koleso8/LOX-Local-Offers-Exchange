import Aos from 'aos';
import LawyersItem from './LawyersItem';

const LawyersList = ({ array }) => {
  Aos.init();
  return (
    <ul className="flex flex-col gap-5">
      {array.map(item => (
        <LawyersItem key={item.username} item={item} />
      ))}
    </ul>
  );
};

export default LawyersList;
