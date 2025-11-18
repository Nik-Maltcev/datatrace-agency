"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Мониторинг",
    price: "от 190 000 ₽",
    period: "ежемесячно",
    description: "Поддержка репутации бренда или персоны с постоянным мониторингом и быстрым реагированием.",
    features: [
      "Мониторинг упоминаний и еженедельные отчёты",
      "Удаление или скрытие простого негатива",
      "Публикации в дружественных СМИ",
      "Персональный менеджер",
    ],
  },
  {
    name: "Антикризис",
    highlighted: true,
    price: "индивидуально",
    period: "проект 30–90 дней",
    description: "Полное удаление негатива из поисковой выдачи, юридическая защита и создание позитивного фона.",
    features: [
      "Команда на связи 24/7, реагируем в течение часа",
      "Комплексное удаление и замещение негатива",
      "Юридическая поддержка: переговоры и претензии",
      "Публикации в проверенных СМИ и у лидеров мнений",
      "Прозрачные отчёты с понятными показателями",
    ],
  },
  {
    name: "Стратегия",
    price: "по запросу",
    period: "12 месяцев",
    description: "Долгосрочное управление репутацией для публичных лиц, семей и фондов.",
    features: [
      "Персональный менеджер и аналитик",
      "Постоянный контроль поисковой выдачи",
      "Консультации перед сделками и публичными выступлениями",
      "Организация интервью, колонок и выступлений",
      "Прямой канал связи и личные встречи",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-20 lg:space-y-16 lg:py-28">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Тарифы</p>
          <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Стоимость зависит от масштаба задачи и количества площадок.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 lg:text-lg">
            Перед началом работы проводим аудит. Подбираем инструменты и закрепляем цели в договоре.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[32px] border border-border/80 p-8 shadow-[0_30px_80px_rgba(15,15,15,0.08)] ${
                plan.highlighted ? "bg-foreground text-background" : "bg-background/85"
              }`}
            >
              <div className="space-y-3">
                <p
                  className={`text-xs uppercase tracking-normal ${
                    plan.highlighted ? "text-background/70" : "text-foreground/60"
                  }`}
                >
                  {plan.period}
                </p>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-lg font-black">{plan.price}</p>
                <p className={`text-sm ${plan.highlighted ? "text-background/80" : "text-foreground/75"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm">
                    <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-primary"}`} />
                    <span className={plan.highlighted ? "text-background/90" : "text-foreground/80"}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 rounded-full border px-6 py-3 text-[11px] font-black uppercase tracking-normal transition ${
                  plan.highlighted
                    ? "border-background/40 text-background hover:border-background"
                    : "border-foreground/40 text-foreground hover:border-foreground"
                }`}
              >
                Запросить расчёт
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
