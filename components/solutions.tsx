const playbook = [
  {
    number: "01",
    title: "Анализ ситуации",
    description: "Составляем карту рисков и возможностей, оцениваем влиятельность площадок.",
    bullets: ["Сканируем более 1200 площадок, включая форумы и закрытые каналы", "Определяем, что и в какие сроки нужно убрать"],
  },
  {
    number: "02",
    title: "Устранение негатива",
    description: "Подбираем нужную комбинацию юридических, переговорных и контентных инструментов.",
    bullets: ["Используем личные контакты с редакциями и блогерами", "Готовим позитивный контент для замещения негатива"],
  },
  {
    number: "03",
    title: "Поддержка результата",
    description: "Контролируем поисковую выдачу, агрегаторы и соцсети, чтобы негатив не вернулся.",
    bullets: ["Еженедельно проверяем позиции и тональность", "Моментально реагируем на повторные публикации"],
  },
]

const deliverables = [
  { label: "Сроки удаления", value: "10-15 дн" },
  { label: "Каналов в работе", value: "30+" },
  { label: "Обновление мониторинга", value: "15 мин" },
]

export default function Solutions() {
  return (
    <section id="solutions" className="border-b border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-20 lg:space-y-16 lg:py-28">
        <div className="space-y-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Как мы решаем задачи</p>
          <h2 className="font-mono text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl tracking-tight">
            Для каждого случая — своя стратегия
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.08)]">
            <div className="space-y-6">
              {playbook.map((block) => (
                <div key={block.number} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl font-bold text-foreground/10">{block.number}</span>
                    <h3 className="font-mono text-lg font-semibold text-foreground tracking-tight">{block.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{block.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/60">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-brand-black px-7 py-8 text-white">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Ваша команда</p>
              <h3 className="mt-3 font-mono text-2xl font-bold tracking-tight">Личная команда</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Руководитель, юрист, переговорщик и редакция. Закрытый чат, ежедневные апдейты.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {deliverables.map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-xl font-bold">{item.value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/80 p-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">Что входит</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/60 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                  Мониторинг поисковиков, соцсетей и отзовиков
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                  Юридическая поддержка и переговоры
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                  Позитивные материалы в проверенных СМИ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
