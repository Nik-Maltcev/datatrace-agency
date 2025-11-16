"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Сколько времени занимает удаление информации?",
      answer:
        "Время удаления зависит от количества источников и сложности кейса. Обычно это занимает от 3 до 14 дней. Простые случаи могут быть решены за несколько часов.",
    },
    {
      question: "Гарантируете ли вы полное удаление информации?",
      answer:
        "Мы гарантируем 100% удаление информации из официальных источников. Наши специалисты проводят постоянный мониторинг повторного появления контента.",
    },
    {
      question: "Как работает мониторинг репутации?",
      answer:
        "Наша система автоматически сканирует интернет ежедневно в поисках упоминаний вашего имени, персональных данных и компрометирующей информации.",
    },
    {
      question: "Какие источники вы проверяете?",
      answer:
        "Мы проверяем открытые источники, поисковые индексы, социальные сети, даркнет, форумы и специализированные базы данных компрометированной информации.",
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">ПОМОЩЬ</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
            Остались вопросы?
          </h3>
          <p className="text-base text-foreground">Мы готовы помочь! Ответы на популярные вопросы о нашем сервисе</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border overflow-hidden">
              <button
                className="w-full p-6 flex items-center justify-between bg-background hover:bg-foreground/5 transition text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-foreground text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-foreground/5 border-t border-border">
                  <p className="text-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
