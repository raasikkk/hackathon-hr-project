import { Link } from "react-router-dom";
import Logo from "../assets/logo-orange.png";
import Insta from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Telegram from "../assets/telegram.svg";

const Footer = () => {
  return (
    <footer className="mt-[70px]">
      <div className="underline border-b-4 border-corange"></div>
      <div className="container mx-auto flex sm:flex-row flex-col items-start justify-between">
        <img src={Logo} alt="" className="mt-[20px] sm:mx-0 mx-auto" />
        {/* Footer Content */}
        <div className="footer-content mt-[20px] min-h-[300px] w-[70%] mx-auto gap-5 flex flex-wrap justify-between">
          <div className="solution ">
            <h3 className="text-corange text-[20px] font-bold">Решения</h3>
            <ul className="text-corange flex flex-col mt-[30px] gap-[20px]">
              <Link to="/">Поиск Резюме</Link>
              <Link to="/">Точная Обработка данных</Link>
              <Link to="/">Массовый импорт данных</Link>
              <Link to="/">Размещение вакансий</Link>
            </ul>
          </div>
          <div className="resource">
            <h3 className="text-corange text-[20px] font-bold">Ресурсы</h3>
            <ul className="text-corange flex flex-col mt-[30px] gap-[20px]">
              <Link to="/">Документация</Link>
              <Link to="/">Для Разработчиков</Link>
              <Link to="/">Документы</Link>
              <Link to="/">Безопасность данных</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">О нас</Link>
            </ul>
          </div>
          <div className="contact">
            <h3 className="text-corange text-[20px] font-bold">Контакты</h3>
            <ul className="text-corange flex flex-col mt-[30px] gap-[20px]">
              <Link to="/" className="font-bold">
                HireHub Inc.
              </Link>
              <Link to="/">Адрес проспект елорда чототам </Link>
              <Link to="/">+7-(777)-777-77-77</Link>
              <Link to="/">hirehub@hirehub.com</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="underline border-b-4 border-corange"></div>
      <div className="container mx-auto mb-[25px] pt-[10px] flex justify-between ">
        <div className="copyright text-corange text-[15px] md:text-[20px]">
          © 2024 ТОО «HireHub»
        </div>
        <div className="social-icons flex gap-4">
          <Link to="/">
            <img src={Insta} alt="insta" />
          </Link>
          <Link to="/">
            <img src={Tiktok} alt="tiktok" />
          </Link>
          <Link to="/">
            <img src={Telegram} alt="telegram" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
