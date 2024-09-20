import React from 'react';
import Address from '../components/Address';

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
      <Address />
    </section>
  );
};

export default ContactsPage;
