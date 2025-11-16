"use client"

import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "КОНСУЛЬТАЦИЯ",
      price: "Бесплатно",
      period: "30 минут",
      features: [
        "Анализ вашей репутации",
        "Определение источников негатива",
        "Примерная стоимость работ",
        "План действий",
      ],
    },
    {
      name: "СТАНДАРТНЫЙ",
      popular: true,
      price: "Индивидуально",
      period: "по запросу",
      features: [
        "Полное сканирование интернета",
        "Удаление из основных источников",
        "Деиндексация из поисковиков",
        "Подробный отчет",
        "Поддержка 30 дней",
      ],
    },
    {
      name: "ПРЕМИУМ",
      price: "Индивидуально",
      period: "комплексное решение",
      features: [
        "Все услуги стандартного плана",
        "Восстановление имиджа",
        "Создание позитивного контента",
        "Мониторинг 6 месяцев",
        "Приоритетная поддержка",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">ТАРИФЫ</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
            Индивидуальные решения для каждого
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border p-8 space-y-8 ${
                plan.popular ? "border-foreground border-2 bg-foreground/5" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-foreground">{plan.price}</span>
                </div>
                <p className="text-xs text-foreground uppercase tracking-widest font-bold">{plan.period}</p>
              </div>

              <button
                className={`w-full py-3 font-bold text-sm uppercase tracking-widest transition ${
                  plan.popular
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-foreground text-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.name === "КОНСУЛЬТАЦИЯ" ? "ЗАПИСАТЬСЯ" : "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ"}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
