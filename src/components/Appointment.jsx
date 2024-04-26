import DogImg from '../assets/img/cars/Car-appointment.png';

const Appointment = () => {
  return (
    <section className="bg-blue-tertiary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]">
      <div className="container mx-auto">
        <div>
          <div className="hidden w-full max-w-[790px] mx-auto lg:flex justify-center">
            <img src={DogImg} alt="" />
          </div>
          <form className="bg-blue-quaternary py-8 px-6 w-full max-w-[790px] h-[500px] mx-auto lg:-mt-28 rounded-[60px] text-center flex flex-col justify-start items-center gap-y-4">
            <h2 className="h2 my-4">Отримати пропозицію</h2>
            <input
              className="input-control"
              type="text"
              placeholder="Повне ім’я"
            />
            <input className="input-control" type="text" placeholder="Email " />
            <input
              className="input-control"
              type="text"
              placeholder="Номер телефону"
            />
            <button className="btn w-full max-w-[514px]">Відправити</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
