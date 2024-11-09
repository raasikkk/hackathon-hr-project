import { useState } from "react";
import Bg1 from "../assets/another-card-bg-1.png";
import Bg2 from "../assets/another-card-bg-2.png";
import searchIcon from "../assets/search-icon-white.png";
import submitIcon from "../assets/submit-icon.png";
import settingIcon from "../assets/settings-icon.png";

const Another = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="bg-corange min-h-[800px] mt-[70px]">
      <div className="container mx-auto pt-[50px] flex flex-wrap gap-[10px] justify-center lg:justify-between">
        <div
          className="w-[600px] h-[700px] relative"
          style={{ backgroundImage: `url(${Bg1})` }}
        >
          <h2 className="mt-[30px] text-corange text-center text-[40px] font-extrabold ">
            Разместитe <br /> вакансию на HireHub !
          </h2>
          <p className="text-corange hidden sm:block text-center px-[70px] font-semibold">
            Находите сотрудников среди тех, кто действительно хочет работать у
            вас. HireHub — ведущий сервис для поиска специалистов в Казахстане*
          </p>

          <button className="absolute bottom-3 left-[10%] px-[60px] py-[30px] bg-corange text-[30px] font-extrabold rounded-[11px]">
            Разместить Вакансию
          </button>
        </div>
        <div
          className="w-[600px] h-[700px] relative"
          style={{ backgroundImage: `url(${Bg2})` }}
        >
          <h2 className="mt-[30px] text-corange text-center text-[40px] font-extrabold">
            Какие сотрудники <br /> есть на HireHub?
          </h2>
          <p className="text-corange hidden sm:block text-center px-[50px] font-semibold">
            Не ждите, пока вам ответят — выберите идеального сотрудника из 5 944
            901 резюме от 4 259 919 соискателей.
          </p>
          <div className="hero-form absolute bottom-5 left-8 mt-[30px] flex flex-wrap gap-[25px] items-center">
            <input
              className="orange-input w-[350px] h-[65px] border-none bg-no-repeat bg-corange rounded-[11px] p-5 pl-14"
              type="text"
              placeholder="Навыки, профессия, местоположение"
              value={input}
              onChange={handleChange}
              style={{
                backgroundImage: `url(${searchIcon})`,
                backgroundPosition: "10px center",
              }}
            />
            <div className="buttons flex gap-5">
              <button className="bg-corange h-[65px] aspect-square rounded-[11px]">
                <img className="mx-auto" src={submitIcon} alt="btn" />
              </button>
              <button className="bg-corange h-[65px] aspect-square rounded-[11px]">
                <img className="mx-auto" src={settingIcon} alt="btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Another;
