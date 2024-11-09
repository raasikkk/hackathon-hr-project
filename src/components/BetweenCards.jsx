const BetweenCards = () => {
  return (
    <div className=" lg:absolute left-[0] right-[0] z-30">
      <div className="between-cards container mx-auto center-horizontal hidden lg:flex justify-between">
        <div className="between-card">
          <h2 className="text-[20px] font-extrabold">Поиск кандидатов</h2>
          <p>Найдите подходящих специалистов быстро и удобно.</p>
        </div>
        <div className="between-card">
          <h2 className="text-[20px] font-extrabold">Управление вакансиями</h2>
          <p>Создавайте вакансии и отслеживайте отклики в одном месте.</p>
        </div>
        <div className="between-card">
          <h2 className="text-[20px] font-extrabold">Аналитика и отчёты</h2>
          <p>Получите статистику по процессу найма.</p>
        </div>
        <div className="between-card">
          <h2 className="text-[20px] font-extrabold">Настройки профиля</h2>
          <p>Управляйте настройками и уведомлениями.</p>
        </div>
      </div>
    </div>
  );
};

export default BetweenCards;
