import heroBg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <div
      className="hero bg-cover bg-center h-[900px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto pt-[100px]">
        <div className="hero-header text-[60px] font-extrabold">
          <p>Добро Пожаловать в</p>
          <p className="text-corange">
            HireHub <span className="text-white">!</span>
          </p>
          <p className="descr mt-[10px] text-[20px] font-semibold">
            Ваша платформа для эффективного и быстрого подбора талантов. <br />
            Используйте интеллектуальный поиск, фильтры и автоматизацию, <br />
            чтобы найти идеальных кандидатов для вашей команды!
          </p>
        </div>

        {/* Inputs */}
        <div className="hero-form">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
