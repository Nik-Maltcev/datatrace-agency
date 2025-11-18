const cases = [
  {
    title: "CEO Fintech-холдинга под санкционным давлением",
    description:
      "В выдаче — расследования пятилетней давности, утечки персональных данных и обсуждения на зарубежных форумах. Нужно быстро зачистить поле перед сделкой по привлечению капитала.",
    sources: ["10 деловых СМИ", "3 англоязычных форума", "LinkedIn / Telegram"],
    result: "Удалено 14 материалов + замещено 9 публикациями уровня Forbes, VC.ru, Inc.",
    timeline: "7 недель",
    industry: "Финансы",
  },
  {
    title: "Premium-девелопер, против которого работал black PR от конкурентов",
    description:
      "Появились отзывы о «замороженных» объектах, слухи о судах и один крупный материал на региональном телеканале. Задача — снять тревожность клиентов и стабилизировать продажи.",
    sources: ["Yandex, Google", "Telegram / VK обзоры", "YouTube репортаж"],
    result: "Полностью обновлена SERP по бренду, создан пул материалов с отзывами клиентов и партнёров.",
    timeline: "5 недель",
    industry: "Недвижимость",
  },
  {
    title: "Публичный политик — рестарт карьеры после старого скандала",
    description:
      "Перед новым назначением в выдаче остались архивные публикации и токсичные обсуждения в даркнете. Нужно вернуть нейтральный фон и показать актуальную повестку.",
    sources: ["Архивы СМИ", "Форумы, paste-сервисы", "Поисковая выдача"],
    result: "Удалены или вытеснены 90% негативных ссылок, собрана база позитивных тезисов и Q&A.",
    timeline: "6 недель",
    industry: "Public sector",
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="border-b border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-20 lg:space-y-16 lg:py-28">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Кейсы</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Работаем в режимах кризиса, слияния, личного ребрендинга.
          </h2>
          <p className="text-base text-foreground/70 lg:text-lg">
            Детали кейсов под NDA, но паттерны остаются: сложные исходные условия, прозрачные KPI, ощутимый бизнес-результат.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-[32px] border border-border/80 bg-background/85 p-8 shadow-[0_30px_80px_rgba(15,15,15,0.09)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/60">
                {item.industry}
                <span className="rounded-full border border-border/70 px-4 py-1 text-[10px]">{item.timeline}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm text-foreground/75 flex-1">{item.description}</p>

              <div className="mt-6 space-y-4 rounded-2xl border border-border/60 bg-background/70 p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/60">Ключевые площадки</p>
                <div className="space-y-1 text-sm text-foreground/70">
                  {item.sources.map((source) => (
                    <p key={source}>{source}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-foreground px-5 py-4 text-background">
                <p className="text-[10px] uppercase tracking-[0.35em] text-background/60">Результат</p>
                <p className="mt-2 text-sm text-background/90">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
