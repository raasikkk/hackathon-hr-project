import VacancyCard from "./VacancyCard";
import cards from "../vacancyInfo";

const VacancyCards = () => {
  return (
    <div className="container relative mx-auto mt-[150px] ">
      {/* Between Cards */}
      {/* <div className="between-cards absolute">
        <div className="between-card bg-corange w-[300px] h-[150px]">Hello</div>
      </div> */}

      <h2 className="text-corange  text-[40px] font-extrabold">Вакансии</h2>
      <div className="vcards grid justify-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
        {cards.map((item) => {
          return (
            <VacancyCard
              key={item.id}
              head={item.head}
              cost={item.cost}
              number={item.number}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VacancyCards;
