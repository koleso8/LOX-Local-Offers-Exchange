import React from 'react';
import Address from '../components/Address';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
  return (
    <section className="flex justify-around w-full pt-8">
      <div className="flex flex-col">
        <h3 className="text-9xl font-extrabold">LOX</h3>
        <span className="flex justify-around text-lg pl-3 font-bold">
          <p>LOCAL</p>
          <p>OFFERS</p>
          <p>EXCHANGE</p>
        </span>
      </div>
      <span>
        <Address />
        <Link
          className=" text-white bg-black px-3 py-3 rounded-3xl"
          to="/oferta"
        >
          ДОГОВІР ОФЕРТИ
        </Link>
      </span>
    </section>
  );
};

export default ContactsPage;
