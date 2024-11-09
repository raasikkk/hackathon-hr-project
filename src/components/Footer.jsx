import LogoOrange from '../assets/logo orange.png'
// import Instagram from '../assets/instagram-logo.svg'
// import Tiktok from '../assets/tiktok-logo.svg'
// import Telegram from '../assets/telegram-logo.svg'
import '../assets/css/Footer.css'

function Footer(){

    return(
        <footer className="bg-white p-8 border-t border-orange-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left footer-content">
                
                {/* Logo and Copyright */}
                <div>
                <img src={LogoOrange} alt="Logo"></img>
                </div>

                {/* Solutions */}
                <div>
                <h2 className="font-bold">Решения</h2>
                <ul className="mt-4 space-y-2">
                    <li><a href="">Поиск Резюме</a></li>
                    <li><a href="">Точная Обработка данных</a></li>
                    <li><a href="">Массовый импорт данных</a></li>
                    <li><a href="">Размещение вакансий</a></li>
                </ul>
                </div>

                {/* Resources */}
                <div>
                <h2 className="font-bold">Ресурсы</h2>
                <ul className="mt-4 space-y-2">
                    <li><a href="">Документация</a></li>
                    <li><a href="">Для Разработчиков</a></li>
                    <li><a href="">Документы</a></li>
                    <li><a href="">Безопасность данных</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">О нас</a></li>
                </ul>
                </div>

                {/* Contacts */}
                <div>
                <h2 className="font-bold">Контакты</h2>
                <ul className="mt-4 space-y-2">
                    <li className="font-bold">HireHub Inc.</li>
                    <li>Адрес проспект елорда чоттам</li>
                    <li>+7-(777)-777-77-77</li>
                    <li>hirehub@hirehub.com</li>
                </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-between mt-8 space-x-4 footer-bottom">
                <div>
                    <p className="mt-4 text-sm">© 2024 TOO «HireHub»</p>
                </div>
                <div>

                </div>
            </div>
        </footer>
    );
}

export default Footer