import Benefits from '../components/Benefits';
import HowItsWork from '../components/HowItsWork';

const HomePage = () => {
  return (
    <div>
      <section className="mb-6  z-0 ">
        <div className="h-40 relative">
          <div className="brightness-50 absolute top-0 w-screenUp -translate-x-[10%] h-40 bg-hero  bg bg-no-repeat bg-center bg-cover rounded-b-3xl flex items-center justify-centerbg-slate-500"></div>
          <h1 className=" text-white text-5xl text-center absolute top-6 left-2/4 -translate-x-[50%] ">
            Консультації юристів онлайн
          </h1>
        </div>
      </section>
      <Benefits />
      <HowItsWork />
    </div>
  );
};

export default HomePage;
