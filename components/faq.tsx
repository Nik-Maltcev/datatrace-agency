"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени уходит на полное удаление негативных материалов?",
    answer:
      "Срок зависит от площадки. У блогов и каталогов — от 3 до 10 дней. СМИ и крупные видео‑форматы занимают 3–6 недель. Мы всегда закладываем буфер и работаем до фактического подтверждения удаления или замещения.",
  },
  {
    question: "Вы даёте юридические гарантии?",
    answer:
      "Да. В договоре фиксируем KPI: перечень запросов, порог позиций, количество материалов и дедлайны. Также прописываем возврат гонорара, если площадка не сняла материал при соблюдении условий медиации.",
  },
  {
    question: "Чем вы отличаетесь от типовых SERM-агентств?",
    answer:
      "У нас собственные медиаторы и пул проверенных редакций, мы работаем с даркнетом и судебными реестрами, используем цифровую форензику. Плюс, за каждым кейсом стоит выделенная команда, а не конвейер.",
  },
  {
    question: "Можете ли работать полностью анонимно?",
    answer:
      "Да. Возможно ведение на доверенном лице, через управляющую компанию или адвокатский запрос. Все материалы шифруются, информацию получают только те специалисты, кто работает над кейсом.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-border bg-background">
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[0.9fr,1.1fr] lg:py-28">
        <div className="space-y-6 rounded-[32px] border border-border/70 bg-background/80 p-8 shadow-[0_20px_60px_rgba(15,15,15,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">FAQ</p>
          <h2 className="text-3xl font-black leading-tight text-foreground">
            Работайте с нами так, будто у вас есть внутренняя PR-команда уровня Tier 1.
          </h2>
          <p className="text-sm text-foreground/70">
            В начале проекта вы получаете чек-лист прозрачности: каналы связи, формат отчётов, KPI и роли. С юридической
            стороны всё закрываем договором, NDA и допсоглашениями.
          </p>
          <div className="rounded-2xl border border-border/70 bg-foreground px-6 py-5 text-background">
            <p className="text-[10px] uppercase tracking-[0.35em] text-background/60">Next step</p>
            <p className="mt-2 text-base">Проведём аудит за 48 часов и покажем, что реально удалить.</p>
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
