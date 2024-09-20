import LawyersList from '../components/LawyersList';
import { lawyers } from '../test/lawyers';

const LawyersPage = () => {
  return (
    <div className="text-black py-2 w-full">
      <LawyersList array={lawyers} />
    </div>
  );
};

export default LawyersPage;
