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
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Как мы решаем задачи</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Для каждого случая — своя стратегия: убираем негатив и создаём позитивный фон.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.08)]">
            <div className="space-y-8">
              {playbook.map((block) => (
                <div key={block.number} className="border-b border-border/60 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-foreground/10">{block.number}</span>
                    <h3 className="text-xl font-bold text-foreground">{block.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-foreground/75">{block.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-border/70 bg-foreground px-8 py-10 text-background shadow-[0_25px_65px_rgba(15,15,15,0.12)]">
              <p className="text-xs uppercase tracking-normal text-background/60">Ваша команда</p>
              <h3 className="mt-4 text-3xl font-black">Личная команда</h3>
              <p className="mt-4 text-sm text-background/80">
                Вы получаете личную команду: руководитель, юрист, переговорщик и редакция. Общаемся в закрытом чате,
                статус обновляем каждый день.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {deliverables.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-black">{item.value}</p>
                    <p className="text-[10px] uppercase tracking-normal text-background/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_15px_40px_rgba(15,15,15,0.06)]">
              <p className="text-xs uppercase tracking-normal text-foreground/60">Что входит в услугу</p>
              <ul className="mt-6 space-y-4 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Мониторинг поисковиков, соцсетей, сайтов-отзовиков и госреестров
                </li>
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Юридическая поддержка: претензии, переговоры, фиксация ущерба
                </li>
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Создание и размещение позитивных материалов в проверенных СМИ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
