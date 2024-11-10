import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SearchResume = () => {
  const [formData, setFormData] = useState({
    mainWords: "",
    specialization: "",
    experience: {
      JUNIOR: false,
      MIDDLE: false,
      SENIOR: false,
    },
    region: {
      АТЫРАУ: false,
      КАЗАХСТАН: false,
      АСТАНА: false,
      АЛМАТЫ: false,
      КАРАГАНДЫ: false,
    },
    age: { from: "", to: "" },
    workType: {
      Частичная_занятость: false,
      Проектная_работа: false,
      Полная_занятость: false,
      Стажировка: false,
      Волонтерство: false,
    },
    locationType: {
      Гибкий_график: false,
      Удаленная_работа: false,
      Удаленная_работа: false,
      Удаленная_работа: false,
      Удаленная_работа: false,
    },
    gender: "",
    salary: { from: "", to: "" },
    country: "",
  });

  // Handle changes for text, checkbox, radio, and range inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const [category, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [category]: {
          ...prevData[category],
          [field]: checked,
        },
      }));
    } else if (
      name === "age.from" ||
      name === "age.to" ||
      name === "salary.from" ||
      name === "salary.to"
    ) {
      const [category, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [category]: {
          ...prevData[category],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data here
  };
  return (
    <>
      <Navbar />;
      <div className="container mx-auto">
        <h1 className="mt-[50px] text-corange text-[40px] font-extrabold">
          Поиск Резюме
        </h1>
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="text-corange mt-[50px] flex flex-col"
        >
          <label className="flex flex-wrap items-center gap-[50px] lg:gap-[100px]">
            Ключевые слова
            <input
              type="text"
              name="mainWords"
              value={formData.mainWords}
              onChange={handleChange}
              placeholder="например, HTML-верстальщик"
              className="search-input"
            />
          </label>

          <label className="mt-[50px] lg:mt-[100px] flex flex-wrap items-center gap-[50px] lg:gap-[100px]">
            Специализация
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="search-input"
            />
          </label>

          <fieldset className="flex flex-row relative justify-center items-center mt-[50px] lg:mt-[100px]">
            <legend className="flex mb-4 lg:mb-0">Требуемый опыт работы</legend>
            <div className="flex flex-col gap-[30px] lg:absolute top-[-4] text-[20px]">
              {["JUNIOR", "MIDDLE", "SENIOR"].map((level) => (
                <label key={level} className="flex gap-[10px] text-[15px]">
                  <input
                    type="checkbox"
                    name={`experience.${level}`}
                    checked={formData.experience[level]}
                    onChange={handleChange}
                  />
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
                    <input
                      type="checkbox"
                      name={`region.${region}`}
                      checked={formData.region[region]}
                      onChange={handleChange}
                    />
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
              value={formData.age.from}
              onChange={handleChange}
              className="lg:ml-[250px] w-[100px]"
            />
            <input
              type="number"
              name="age.to"
              placeholder="To"
              value={formData.age.to}
              onChange={handleChange}
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
                  <input
                    type="checkbox"
                    name={`workType.${type}`}
                    checked={formData.workType[type]}
                    onChange={handleChange}
                  />
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
                  <input
                    type="checkbox"
                    name={`locationType.${location}`}
                    checked={formData.locationType[location]}
                    onChange={handleChange}
                  />
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
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                  />
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
              value={formData.salary.from}
              onChange={handleChange}
              className="lg:ml-[250px] w-[100px]"
            />
            <input
              type="number"
              name="salary.to"
              placeholder="To"
              value={formData.salary.to}
              onChange={handleChange}
              className="w-[100px]"
            />
          </label>

          <label className="mt-[100px]">
            Гражданство
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
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
      </div>
      <Footer />
    </>
  );
};

export default SearchResume;
