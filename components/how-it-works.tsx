"use client"

import { Check, Globe, MessageSquare, Search, Shield } from "lucide-react"

const sources = [
  {
    icon: <Search className="h-5 w-5 text-primary" />,
    name: "Поисковая выдача",
    description: "Google, Yandex, Yahoo, Bing, DuckDuckGo",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    name: "Соцмедиа и мессенджеры",
    description: "VK, Telegram, X, Instagram, TikTok",
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    name: "Рейтинги и каталоги",
    description: "Avvo, Tripadvisor, 2Gis, Yell, Flamp",
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    name: "Правовые и теневые базы",
    description: "Arbitr, Kartoteka, даркнет-форумы, paste-сервисы",
  },
]

const actions = [
  {
    step: "01",
    title: "Сбор и форензика",
    description:
      "Сканируем тональность, посещаемость, трафиковый потенциал, фиксируем юридические доказательства и финансовый ущерб.",
  },
  {
    step: "02",
    title: "Стратегия давления",
    description:
      "Выбираем инструменты: юридическое воздействие, переговоры, медиабаинг, SEO и продакшн новых материалов.",
  },
  {
    step: "03",
    title: "Исполнение и эскалация",
    description:
      "Запускаем кампанию, подключаем личные контакты, держим ежедневный статус-контроль и повышаем давление, если нужно.",
  },
  {
    step: "04",
    title: "Контроль и отчёты",
    description:
      "Фиксируем результаты, закрепляем позитив, обеспечиваем мониторинг и создаём отчёты для руководства и юристов.",
  },
]

export default function HowItWorks() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container mx-auto space-y-16 px-6 py-20 lg:py-28">
        <div className="text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Как это работает</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Технологический мониторинг + переговорная мощь + юридический рычаг.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-foreground/70 lg:text-lg">
            Мы комбинируем инструменты цифрового форензика, правовой практики и медиапродюсирования. Поэтому получаем
            прогнозируемые результаты даже на сложных площадках.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_20px_60px_rgba(15,15,15,0.08)]">
            <p className="text-xs uppercase tracking-normal text-foreground/60">Смотрим шире всех</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {sources.map((source) => (
                <div key={source.name} className="rounded-2xl border border-border/70 bg-background/70 p-6">
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <div className="rounded-full border border-border/80 p-2">{source.icon}</div>
                    {source.name}
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-normal text-foreground/60">{source.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_30px_80px_rgba(15,15,15,0.09)]">
            <p className="text-xs uppercase tracking-normal text-foreground/60">Путь клиента</p>
            <div className="mt-8 space-y-6">
              {actions.map((action, index) => (
                <div key={action.step} className="relative rounded-2xl border border-border/70 bg-background/60 p-6">
                  {index !== actions.length - 1 && (
                    <span className="absolute left-8 top-full h-6 w-px bg-border/80" aria-hidden="true" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-foreground/20">{action.step}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-normal text-foreground/60">
                      SLA контролируем
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{action.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{action.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border/70 bg-foreground px-6 py-5 text-background">
              <p className="text-xs uppercase tracking-normal text-background/60">Отчётность</p>
              <p className="mt-3 flex items-center gap-3 text-sm text-background/80">
                <Check className="h-4 w-4 text-primary" />
                Дашборд с KPI по позициям, удалённым материалам и новым угрозам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
