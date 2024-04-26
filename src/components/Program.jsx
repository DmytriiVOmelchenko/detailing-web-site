import phoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
    <div>
      <div className="flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg-[34px]"
          src={phoneIcon}
          alt=""
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
          044 020 30 20
        </div>
      </div>
      <div>
        <div className="hidden lg:flex">Ми працюємо: ПН-СБ 9:00 - 20:00</div>
      </div>
      <div className="text-sm">
        <div className="lg:hidden text-right">ПН-СБ 9:00 - 20:00</div>
      </div>
    </div>
  );
};

export default Program;
