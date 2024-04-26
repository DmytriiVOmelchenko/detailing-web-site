import CarImg from '../assets/img/cars/footer-car.png';

const Contact = () => {
  return (
    <section className="bg-blue-tertiary pt-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="order-1 lg:-order-1 lg:mat-16">
            <img className="-mb-[80px]" src={CarImg} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-blue-tartiary font-semibold mb-3">
              Contanct
            </div>
            <div className="text-4xl text-blue font-extrabold">
              044 020 30 20
            </div>
            <div className="mb-7 text-blue">
              Ми працюємо: ПН-СБ 9:00 - 20:00
            </div>
            <button className="btn">Отримати пропозицію</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
