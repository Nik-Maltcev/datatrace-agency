import { Check, LineChart, ShieldCheck, Target, Zap } from "lucide-react"

const checklist = [
  "Отслеживаем упоминания в реальном времени на всех площадках",
  "Команда юристов и аналитиков, которые знают специфику каждой площадки",
  "Сотрудничаем с проверенными СМИ и лидерами мнений",
  "Работаем по договору с чёткими KPI: сроки, позиции в выдаче, количество публикаций",
]

const pillars = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Защита бренда",
    description: "Работаем на опережение и блокируем негатив до его публикации.",
    metric: "Остановили 18 негативных публикаций за квартал.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Управление выдачей",
    description: "Продвигаем позитивные материалы в поисковой выдаче и на сайтах-отзовиках.",
    metric: "92% топ-10 поисковой выдачи занимают наши материалы.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    title: "Аналитика",
    description: "Анализируем риски и прогнозируем развитие ситуации на неделю вперёд.",
    metric: "При угрозе репутации автоматически запускаем один из 13 сценариев защиты.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Антикризисное реагирование",
    description: "Включаемся в работу в течение часа, подключая юристов, PR и маркетинг.",
    metric: "В среднем убираем негатив из инфополя за 21 день.",
  },
]

export default function Features() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),transparent)]" />
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:py-28">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Как мы работаем</p>
            <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Наша команда — редакция, юристы и аналитики — работает слаженно для защиты вашей репутации.
            </h2>
            <p className="text-base text-foreground/75 lg:text-lg">
              Мы создаём для клиентов систему защиты: следим за упоминаниями, прогнозируем риски, формируем позитивный
              фон и отражаем атаки. Все результаты фиксируем в отчётах.
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.08)]">
            <p className="text-xs uppercase tracking-normal text-foreground/60">Наш подход</p>
            <ul className="mt-6 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-4 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`flex flex-col justify-between rounded-2xl border border-border/70 bg-background/80 p-6 ${
                index % 2 === 0 ? "translate-y-0" : "lg:-translate-y-6"
              } shadow-[0_15px_40px_rgba(15,15,15,0.06)]`}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-border/80 p-3">{pillar.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
              </div>
              <p className="mt-5 text-sm text-foreground/75">{pillar.description}</p>
              <p className="mt-6 text-xs uppercase tracking-normal text-foreground/60">{pillar.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
