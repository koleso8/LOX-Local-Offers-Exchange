import { useEffect, useState } from 'react';
import FormLawyer from '../components/FormLawyer';
import FormClient from '../components/FormClient';

const RegistrationPage = () => {
  const [typeLawyer, setType] = useState(true);

  const toggleType = val => {
    setType(val);
  };

  useEffect(() => {
    const law = document.getElementById('law');
    const cli = document.getElementById('cli');

    if (typeLawyer) {
      law.classList.add('active');
      cli.classList.remove('active');
    } else {
      law.classList.remove('active');
      cli.classList.add('active');
    }
  });

  return (
    <div className="overflow-y-hidden h-[600px] max-h-max text-white bg-slate-950 rounded-full  flex flex-col items-center justify-center w-full">
      <div className="pt-4 flex gap-12 text-3xl fixed top-[120px] ">
        <span
          className="py-[10px] px-[15px] cursor-pointer"
          id="law"
          onClick={() => toggleType(true)}
        >
          Юрист
        </span>
        <span
          className="py-[10px] px-[15px] cursor-pointer"
          id="cli"
          onClick={() => toggleType(false)}
        >
          Замовник
        </span>
      </div>
      {typeLawyer ? <FormLawyer /> : <FormClient />}
    </div>
  );
};

export default RegistrationPage;
