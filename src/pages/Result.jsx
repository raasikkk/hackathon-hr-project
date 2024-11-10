import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";

const Result = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1>Найдено 13 резюме у 12 соискателей</h1>
        <div className="flex flex-wrap lg:flex-nowrap">
          <form className="text-corange mt-[50px] flex flex-col">
            <label className="flex flex-wrap items-center gap-[50px] lg:gap-[100px]">
              Ключевые слова
              <input
                type="text"
                name="mainWords"
                value="Frontend-разработчик"
                className="search-input"
              />
            </label>

            <label className="mt-[50px] lg:mt-[100px] flex flex-wrap items-center gap-[50px] lg:gap-[100px]">
              Специализация
              <input
                type="text"
                name="specialization"
                value="Frontend-разработчик"
                className="search-input"
              />
            </label>

            <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[100px]">
              <legend className="flex mb-4 lg:mb-0">
                Требуемый опыт работы
              </legend>
              <div className="flex flex-col gap-[30px] lg:absolute top-[-4] text-[20px]">
                {["JUNIOR", "MIDDLE", "SENIOR"].map((level) => (
                  <label key={level} className="flex gap-[10px] text-[15px]">
                    <input type="checkbox" name={`experience.${level}`} />
                    {level}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[200px]">
              <legend className="flex mb-4 lg:mb-0">Регион</legend>
              <div className="flex flex-col gap-[30px] lg:absolute top-[2]">
                {["АТЫРАУ", "КАЗАХСТАН", "АСТАНА", "АЛМАТЫ", "КАРАГАНДЫ"].map(
                  (region) => (
                    <label key={region} className="flex gap-[10px] text-[15px]">
                      <input type="checkbox" name={`region.${region}`} />
                      {region}
                    </label>
                  )
                )}
              </div>
            </fieldset>

            <label className="mt-[150px] flex gap-[50px]">
              Возраст
              <input
                type="number"
                name="age.from"
                placeholder="From"
                className="lg:ml-[250px] w-[100px]"
              />
              <input
                type="number"
                name="age.to"
                placeholder="To"
                className="w-[100px]"
              />
            </label>

            <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[100px]">
              <legend className="flex mb-4 lg:mb-0">Тип занятости</legend>
              <div className="flex flex-col gap-[30px] lg:absolute top-[2]">
                {[
                  "Частичная занятость",
                  "Проектная работа",
                  "Полная занятость",
                ].map((type) => (
                  <label key={type} className="flex gap-[10px] text-[15px]">
                    <input type="checkbox" name={`workType.${type}`} />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[200px]">
              <legend className="flex mb-4 lg:mb-0">Тип занятости</legend>
              <div className="flex flex-col gap-[30px] lg:absolute top-[2]">
                {[
                  "Гибкий график",
                  "Удаленная работа",
                  "Полный день",
                  "Сменный график",
                  "Вахтовый метод",
                ].map((location) => (
                  <label key={location} className="flex gap-[10px] text-[15px]">
                    <input type="checkbox" name={`locationType.${location}`} />
                    {location}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[200px]">
              <legend className="flex mb-4 lg:mb-0">Пол</legend>
              <div className="flex flex-col gap-[30px] lg:absolute top-[2]">
                {["Мужской", "Женский"].map((gender) => (
                  <label key={gender} className="flex gap-[10px] text-[15px]">
                    <input type="radio" name="gender" value={gender} />
                    {gender}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-[150px] flex gap-[50px]">
              Уровень дохода
              <input
                type="number"
                name="salary.from"
                placeholder="From"
                className="lg:ml-[250px] w-[100px]"
              />
              <input
                type="number"
                name="salary.to"
                placeholder="To"
                className="w-[100px]"
              />
            </label>

            <label className="mt-[100px]">
              Гражданство
              <input
                type="text"
                name="country"
                placeholder="Страна"
                className="border-2 border-corange rounded-[11px] p-2 lg:ml-[250px]"
              />
            </label>

            <button
              type="submit"
              className="w-[200px] h-[60px] bg-corange rounded-[11px] text-white font-bold mx-auto mt-[50px]"
            >
              Search
            </button>
          </form>
          <div className="result-cards mx-auto lg:ml-2 flex flex-col gap-[15px]">
            {[...Array(10)].map((_, i) => (
              <ResultCard key={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Result;
