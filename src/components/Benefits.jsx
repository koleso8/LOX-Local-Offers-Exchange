const Benefits = () => {
  return (
    <section className="mb-8">
      <ul className="flex items-center justify-center gap-5 text-black text-center">
        <li className="flex flex-col ">
          <img
            className="mb-5 w-56 h-44 object-cover"
            src="https://trudovi.org.ua/wp-content/uploads/2023/04/A966D63C-0D6A-468D-A973-0537E4DC56D9-1286x720.jpeg"
            alt=""
          />
          <p className="text-m font-semibold">Перемог в судах</p>
          <p className="text-[64px] font-bold max-h-20">1200</p>
        </li>
        <li className="flex flex-col ">
          <img
            className="mb-5 w-56 h-44 object-cover"
            src="https://malva.tv/wp-content/uploads/e6815f3e7f65fe97f8349877eb1e9c0d.jpg"
            alt=""
          />
          <p className="text-m font-semibold">Вирішених питань</p>
          <p className="text-[64px] font-bold max-h-20">1500+</p>
        </li>
        <li className="flex flex-col ">
          <img
            className="mb-5 w-56 h-44 object-cover"
            src="https://legalaid.gov.ua/wp-content/uploads/2019/08/robota.jpg"
            alt=""
          />
          <p className="text-m font-semibold">Виграних тендерів</p>
          <p className="text-[64px] font-bold max-h-20">350+</p>
        </li>
        <li className="flex flex-col ">
          <img
            className="mb-5 w-56 h-44 object-cover"
            src="https://rovesnyknews.te.ua/wp-content/uploads/2022/10/derzhavnyj-reyestrator.jpg"
            alt=""
          />
          <p className="text-m font-semibold">Юридичної практики</p>
          <p className="text-[64px] font-bold max-h-20 text-nowrap">10 років</p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
