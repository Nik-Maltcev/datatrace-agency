const stages = [
  {
    step: "Подготовка",
    title: "Фиксируем повестку и договариваемся о правилах игры",
    description:
      "Проводим аудит всех упоминаний, собираем юридические доказательства, определяем tone of voice и KPI. Формируем карту вовлечённых стейкхолдеров и составляем календарь публикаций.",
    duration: "3‑5 дней",
    focus: "Risk mapping • Legal пакет • Content backlog",
  },
  {
    step: "Удаление и замещение",
    title: "Работаем с площадками, пока вы занимаетесь бизнесом",
    description:
      "Ведём переговоры, подключаем юристов и редакторов, запускаем позитивные публикации. На уровне SEO закрепляем обновлённые позиции, чтобы выдача оставалась управляемой.",
    duration: "до 30 дней",
    focus: "Negotiation desk • Media buy • SEO takeover",
  },
  {
    step: "Закрепление и контроль",
    title: "Даём гарантию возврата к идеальному виду выдачи",
    description:
      "Подстрахуем постоянным мониторингом: обновляем позитивные страницы, отслеживаем упоминания в real-time и подключаем кризисный штаб при первых сигналах повторных атак.",
    duration: "long-run",
    focus: "Realtime alerts • Monthly board • Anti-crisis sprint",
  },
]

export default function RemovalStages() {
  return (
    <section id="process" className="border-b border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-20 lg:space-y-16 lg:py-28">
        <div className="max-w-4xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Процесс</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Чёткий маршрут из трёх фаз. Каждая завершается пакетом артефактов и обновлённой выдачей.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.step}
              className="relative rounded-[28px] border border-border/80 bg-background/80 p-8 shadow-[0_20px_60px_rgba(15,15,15,0.08)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-normal text-foreground/60">{stage.step}</p>
                <span className="rounded-full border border-border/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-normal text-foreground/70">
                  {stage.duration}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{stage.title}</h3>
              <p className="mt-4 text-sm text-foreground/75">{stage.description}</p>
              <p className="mt-6 text-xs uppercase tracking-normal text-foreground/60">{stage.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
