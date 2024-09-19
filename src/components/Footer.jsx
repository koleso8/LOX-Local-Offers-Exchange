const Footer = () => {
  return (
    <div className="w-[100vw] h-[200px] py-8 bg-slate-950">
      <div className="text-white w-4/5 flex justify-between mx-auto">
        <nav className=" flex gap-2 flex-col">
          <a className="py-3 px-6">Про компанію</a>
          <a className="py-3 px-6">Контакти</a>
          <a className="py-3 px-6">Договір оферти</a>
        </nav>
        <address className="flex flex-col gap-2">
          <p>м. Дніпро, пр-т Дмитра Яворницького, буд. 99</p>
          <a href="tel:+380671358585">+38(067)135-85-85</a>
          <a href="mailto:lox@gmail.com">lox@gmail.com</a>
        </address>
      </div>
    </div>
  );
};

export default Footer;
