import { Check, LineChart, ShieldCheck, Target, Zap } from "lucide-react"

const checklist = [
  "Единый кроссплатформенный war-room, где видим любое упоминание в течение 60 секунд",
  "Команда аналитиков и юристов, специализирующихся на каждой категории площадок",
  "Собственный пул редакций и лидеров мнений для публикаций в white‑list медиах",
  "Финансовая ответственность и понятные KPI — позиции, сроки, количество материалов",
]

const pillars = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Brand shield",
    description: "Юридический и медийный стек блокирует негатив ещё до публикации.",
    metric: "18 запросов остановлено на модерации за квартал.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "SERM orchestration",
    description: "Алгоритмически распределяем позитивный контент по SERP и агрегаторам.",
    metric: "Топ‑10 занят управляемыми материалами на 92%.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    title: "Realtime аналитика",
    description: "Снимки динамики репутационных рисков + прогнозы на неделю вперёд.",
    metric: "13 сценариев реагирования автоматически активируются при угрозе.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Crisis sprint",
    description: "Штаб включается в течение часа, подключая PR, legal и paid-команды.",
    metric: "Полное закрытие инфополя в среднем за 21 день.",
  },
]

export default function Features() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),transparent)]" />
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:py-28">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
              Полный цикл DataTrace
            </p>
            <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Редакция, юристы и аналитики работают как единая операционная система вашей репутации.
            </h2>
            <p className="text-base text-foreground/75 lg:text-lg">
              Мы проектируем для клиентов экосистему: наблюдаем за инфополем, прогнозируем риски, создаём поддерживающую
              повестку и защищаем от атак. Каждый поток фиксируем в дашбордах и SLA.
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.08)]">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">Премиальный контроль</p>
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
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-foreground/60">{pillar.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
