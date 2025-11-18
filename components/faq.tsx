"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает удаление негатива?",
    answer:
      "Сроки зависят от площадки. Блоги и каталоги — 3-10 дней. СМИ и видеохостинги — 3-6 недель. Мы всегда работаем до полного удаления или замещения материала.",
  },
  {
    question: "Какие у вас гарантии?",
    answer:
      "Мы закрепляем в договоре все цели: список запросов, позиции в выдаче, количество материалов и сроки. Если площадка не удалила материал по нашей вине, мы вернём деньги.",
  },
  {
    question: "Чем вы лучше других агентств?",
    answer:
      "У нас есть свои переговорщики и проверенные редакции, мы работаем со сложными площадками, включая даркнет и судебные реестры. Для каждого проекта мы выделяем отдельную команду.",
  },
  {
    question: "Можно ли работать с вами анонимно?",
    answer:
      "Да. Мы можем работать через доверенное лицо, управляющую компанию или адвоката. Все данные шифруются, а доступ к ним есть только у специалистов, которые работают над вашим проектом.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-border bg-background">
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[0.9fr,1.1fr] lg:py-28">
        <div className="space-y-6 rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_20px_60px_rgba(15,15,15,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Частые вопросы</p>
          <h2 className="text-3xl font-black leading-tight text-foreground">
            Работаем как ваша личная команда по управлению репутацией.
          </h2>
          <p className="text-sm text-foreground/70">
            В начале работы вы получите чёткий план: как мы общаемся, как отчитываемся, какие цели и роли в команде.
            Всё фиксируем в договоре, включая соглашение о неразглашении.
          </p>
          <div className="rounded-2xl border border-border/70 bg-foreground px-6 py-5 text-background">
            <p className="text-[10px] uppercase tracking-normal text-background/60">Следующий шаг</p>
            <p className="mt-2 text-base">Проведём аудит за 48 часов и расскажем, что можно удалить.</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-[24px] border border-border/70 bg-background/80">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-foreground/70 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border/70 px-6 py-4 text-sm text-foreground/75">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
