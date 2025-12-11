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
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Тарифы</p>
          <h2 className="font-mono text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl tracking-tight">
            Стоимость зависит от масштаба
          </h2>
          <p className="mx-auto max-w-xl text-sm text-foreground/60 lg:text-base leading-relaxed">
            Аудит перед стартом. Инструменты и цели — в договоре.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-6 ${
                plan.highlighted ? "bg-brand-black text-white border-brand-black" : "bg-white border-border"
              }`}
            >
              <div className="space-y-2">
                <p
                  className={`font-mono text-[9px] uppercase tracking-wider ${
                    plan.highlighted ? "text-white/50" : "text-foreground/50"
                  }`}
                >
                  {plan.period}
                </p>
                <h3 className="font-mono text-xl font-bold tracking-tight">{plan.name}</h3>
                <p className="font-mono text-base font-semibold">{plan.price}</p>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-white/70" : "text-foreground/60"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2.5 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-brand-accent" : "text-brand-accent"}`} />
                    <span className={plan.highlighted ? "text-white/80" : "text-foreground/70"}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 rounded-full px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-white text-brand-black hover:shadow-lg"
                    : "border border-border text-foreground hover:border-foreground/50"
                }`}
              >
                Расчёт
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
