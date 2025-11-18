const playbook = [
  {
    number: "01",
    title: "Диагностика инфополя",
    description: "Формируем карту рисков и возможностей, оцениваем силу атакующих площадок.",
    bullets: ["Сканируем 1200+ площадок, включая форумы и закрытые каналы", "Определяем приоритет по влиянию и срокам устранения"],
  },
  {
    number: "02",
    title: "Тактика устранения",
    description: "Подбираем комбинацию юридических, переговорных и контентных инструментов.",
    bullets: ["Личные контакты с редакциями и блогерами из white-list базы", "Резервируем позитивный контент для замещения"],
  },
  {
    number: "03",
    title: "Закрепление позиций",
    description: "Контролируем SERP, агрегаторы и соцмедиа, чтобы негатив не возвращался.",
    bullets: ["Еженедельные срезы по позициям и тональности", "Автоматические сигналы при повторных публикациях"],
  },
]

const deliverables = [
  { label: "SLA на удаление", value: "10-15 дн" },
  { label: "Каналов в работе", value: "30+" },
  { label: "Monitoring refresh", value: "15 мин" },
]

export default function Solutions() {
  return (
    <section id="solutions" className="border-b border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-20 lg:space-y-16 lg:py-28">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Playbook</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Каждому кейсу — собственная стратегия давления на площадки и наращивания позитива.
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
              <p className="text-xs uppercase tracking-normal text-background/60">Premium формат</p>
              <h3 className="mt-4 text-3xl font-black">Dedicated team</h3>
              <p className="mt-4 text-sm text-background/80">
                Вы получаете личный war-room: team lead, юрист, медиатор и контент-группа. Все коммуникации фиксируются в
                закрытом канале, статус обновляется ежедневно.
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
              <p className="text-xs uppercase tracking-normal text-foreground/60">Что входит</p>
              <ul className="mt-6 space-y-4 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Мониторинг SEO, соцсетей, review-площадок, госреестров и даркнета
                </li>
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Правовой суппорт: претензии, медиативные договорённости, фиксация ущерба
                </li>
                <li className="flex gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Производство и публикации поддерживающего контента в управляемом пуле медиа
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
