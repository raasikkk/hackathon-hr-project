import Profile from "../assets/profile.png";

const ResultCard = () => {
  return (
    <div className="result-card p-5 gap-[10px] flex w-[550px] h-[200px] border-4 border-corange rounded-[11px]">
      <img src={Profile} className="w-[150px]" alt="profile" />
      <div className="info ">
        <h3 className="text-[25px] font-bold text-corange">
          Front-end разработчик
        </h3>
        <div className="info-det flex text-corange text-[10px] gap-5">
          <p className="text-corange">19 Лет</p>
          <p className="text-corange">Был более двух недель назад</p>
          <p className="text-corange">Обновлено 3 декабря 2021</p>
        </div>
        <div className="price text-[15px] text-black font-extrabold">
          800,000 ₸
        </div>
        <div className="exp text-corange">Опыт работы : Junior</div>
        <div className="location text-corange">
          Последнее место работы : Join Way Company
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
