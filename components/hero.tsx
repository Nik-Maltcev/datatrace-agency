"use client"

import { ArrowUpRight, Check, Sparkles } from "lucide-react"

const highlights = [
  "Удаляем клевету и негативные отзывы из поисковой выдачи",
  "Собираем доказательства и договариваемся с площадками",
  "Создаём позитивные материалы, чтобы вытеснить негатив",
]

const stats = [
  { label: "упоминаний удалено", value: "780+" },
  { label: "скорость реакции", value: "<4 ч" },
  { label: "клиентов остаются с нами", value: "93%" },
]

const insightCards = [
  {
    title: "Срочное удаление",
    value: "12 ч",
    caption: "быстрое удаление в кризисных ситуациях",
  },
  {
    title: "Проверка репутации",
    value: "360°",
    caption: "полный аудит перед продажей компании или выходом в публичное поле",
  },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(10,20,10,0.12),_transparent_70%)]" />
      <div className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-[1.05fr,0.95fr] lg:py-28">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/60">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            Управление репутацией
          </div>

          <div className="space-y-6">
            <h1 className="font-mono text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight">
              Защищаем вашу
              <br />
              <span className="text-brand-accent">репутацию</span> в сети
            </h1>
            <p className="max-w-xl text-base text-foreground/60 lg:text-lg leading-relaxed">
              Контролируем поисковую выдачу, соцсети и площадки. Ваша репутация остаётся безупречной даже при атаках.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-brand-black px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Обсудить проект
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <button className="inline-flex items-center rounded-full border border-border px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground/70 transition-all hover:border-foreground/50 hover:text-foreground">
              Кейсы
            </button>
          </div>

          <div className="space-y-4 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm">
            <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Что мы делаем</p>
            <ul className="space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-bold text-foreground tracking-tight">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-wider text-foreground/40">
            <span className="text-foreground/60">Доверяют:</span>
            <span>Blockchain</span>
            <span>Legal Hub</span>
            <span>Venture Club</span>
            <span>Banking</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-2xl border border-border/80 bg-background/95 p-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">Мониторинг</p>
                <h3 className="font-mono text-xl font-bold text-foreground tracking-tight">Следим за репутацией</h3>
              </div>
              <span className="rounded-full bg-brand-gray px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                24/7
              </span>
            </div>

            <div className="mt-8 grid gap-4">
              {insightCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-brand-gray/50 px-5 py-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] font-medium text-foreground/60">{item.title}</p>
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-accent" />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-bold text-foreground tracking-tight">{item.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">{item.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-xl bg-brand-black px-5 py-4 text-white">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Статус</p>
              <p className="font-mono text-lg font-bold tracking-tight">Восстановление имиджа</p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                Работаем со СМИ
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -left-8 z-0 h-72 w-72 rounded-[40px] bg-[radial-gradient(circle,_rgba(16,30,20,0.18),_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-10 -right-6 z-0 h-64 w-64 rounded-[40px] bg-[radial-gradient(circle,_rgba(0,0,0,0.15),_transparent_70%)] blur-3xl" />
        </div>
      </div>
    </section>
  )
}
