const VacancyCard = (props) => {
  return (
    <div className="vcard relative mt-[20px] w-[250px] h-[200px] p-2 rounded-[11px] shadow-md bg-[#EEEEEE]">
      <h3 className="text-[30px] text-corange font-extrabold">{props.head}</h3>
      <p className="text-[15px] text-corange">{props.cost}</p>
      <p className="text-corange absolute bottom-3">{props.number}</p>
    </div>
  );
};

export default VacancyCard;
