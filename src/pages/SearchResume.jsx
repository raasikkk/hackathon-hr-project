import { useState } from "react";
import Navbar from "../components/Navbar";
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
          <label className="flex items-center gap-[100px]">
            Ключевые слова
            <input
              type="text"
              name="mainWords"
              value={formData.mainWords}
              onChange={handleChange}
              className="search-input"
            />
          </label>

          <label>
            Специализация
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="search-input"
            />
          </label>

          <fieldset>
            <legend>Требуемый опыт работы</legend>
            {["JUNIOR", "MIDDLE", "SENIOR"].map((level) => (
              <label key={level}>
                <input
                  type="checkbox"
                  name={`experience.${level}`}
                  checked={formData.experience[level]}
                  onChange={handleChange}
                />
                {level}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Регион</legend>
            {["АТЫРАУ", "КАЗАХСТАН", "АСТАНА", "АЛМАТЫ", "КАРАГАНДЫ"].map(
              (region) => (
                <label key={region}>
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
          </fieldset>

          <label>
            Возраст
            <input
              type="number"
              name="age.from"
              placeholder="From"
              value={formData.age.from}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age.to"
              placeholder="To"
              value={formData.age.to}
              onChange={handleChange}
            />
          </label>

          <fieldset>
            <legend>Тип занятости</legend>
            {[
              "Частичная занятость",
              "Проектная работа",
              "Полная занятость",
            ].map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  name={`workType.${type}`}
                  checked={formData.workType[type]}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Тип занятости</legend>
            {[
              "Гибкий график",
              "Удаленная работа",
              "Полный день",
              "Сменный график",
              "Вахтовый метод",
            ].map((location) => (
              <label key={location}>
                <input
                  type="checkbox"
                  name={`locationType.${location}`}
                  checked={formData.locationType[location]}
                  onChange={handleChange}
                />
                {location}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Пол</legend>
            {["Мужской", "Женский"].map((gender) => (
              <label key={gender}>
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
          </fieldset>

          <label>
            Уровень дохода
            <input
              type="number"
              name="salary.from"
              placeholder="From"
              value={formData.salary.from}
              onChange={handleChange}
            />
            <input
              type="number"
              name="salary.to"
              placeholder="To"
              value={formData.salary.to}
              onChange={handleChange}
            />
          </label>

          <label>
            Гражданство
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchResume;
