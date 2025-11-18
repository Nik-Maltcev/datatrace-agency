"use client"

import { ArrowUpRight, Check, Sparkles } from "lucide-react"

const highlights = [
  "Удаляем клевету, теневые публикации и токсичные дубликаты до 1-й и 2-й страниц выдачи",
  "Фиксируем доказательную базу и ведём переговоры напрямую с площадками и редакциями",
  "Ставим на поток выдачу «белых» материалов, чтобы занять весь экран контролируемым позитивом",
]

const stats = [
  { label: "упоминаний закрыто", value: "780+" },
  { label: "скорость реагирования", value: "<4 ч" },
  { label: "retain клиентов", value: "93%" },
]

const insightCards = [
  {
    title: "Panic removal",
    value: "12 ч",
    caption: "жёсткий SLA на удаление при кризисных кейсах",
  },
  {
    title: "Digital due diligence",
    value: "360°",
    caption: "пакетное обследование до продажи компании или личного выхода в публичность",
  },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(10,20,10,0.12),_transparent_70%)]" />
      <div className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-[1.05fr,0.95fr] lg:py-28">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-foreground/70">
            <Sparkles className="h-4 w-4 text-primary" />
            Кибер PR-команда
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05] font-black tracking-tight">
              Управляем цифровой репутацией людей и брендов как in‑house подразделение за вас.
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75 lg:text-xl">
              DataTrace — агентство premium-сегмента. Мы берём под контроль поисковую выдачу, соцсети, закрытые форумы и
              юридические площадки, чтобы бренд выглядел на 10/10 даже во время атак конкурентов или инфоповодов из
              прошлого.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[11px] font-black uppercase tracking-[0.35em] text-background transition hover:-translate-y-0.5">
              Получить стратегию
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center rounded-full border border-foreground/30 px-7 py-4 text-[11px] font-black uppercase tracking-[0.35em] text-foreground transition hover:border-foreground/70">
              Смотреть портфель
            </button>
          </div>

          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-[0_25px_80px_rgba(15,15,15,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/60">почему выбирают</p>
            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-4 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs uppercase tracking-[0.35em] text-foreground/50">
            <span className="text-foreground/80">доверяют: </span>
            <span>blockchain fond</span>
            <span>legal hub</span>
            <span>venture club</span>
            <span>private banking</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[32px] border border-border/80 bg-background/90 p-10 shadow-[0_25px_65px_rgba(15,15,15,0.1)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">Контур</p>
                <h3 className="text-2xl font-black text-foreground">LIVE мониторинг</h3>
              </div>
              <span className="rounded-full border border-foreground/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/70">
                24/7
              </span>
            </div>

            <div className="mt-10 grid gap-6">
              {insightCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-background/70 px-6 py-5 shadow-[0_10px_30px_rgba(15,15,15,0.04)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground/70">{item.title}</p>
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mt-3 text-3xl font-black text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">{item.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4 rounded-2xl border border-border/60 bg-foreground px-6 py-5 text-background">
              <p className="text-xs uppercase tracking-[0.4em] text-background/70">Статус</p>
              <p className="text-2xl font-black">Восстановление имиджа CEO</p>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                Escalation level • Direct media
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
