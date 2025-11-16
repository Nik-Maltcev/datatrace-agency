"use client"

import { ChevronRight, Check } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Content - Text and Description */}
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance">
              Восстановите свою репутацию в интернете
            </h1>

            <p className="text-base text-foreground/80 leading-relaxed max-w-md">
              Наша платформа использует ИИ для поиска и удаления негативного контента, защищая ваш имидж и возвращая
              вам контроль.
            </p>

            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-foreground/80 transition w-fit">
                Получить консультацию
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-4 text-foreground font-bold text-sm uppercase tracking-widest hover:text-foreground/80 transition w-fit">
                Как это работает?
              </button>
            </div>
          </div>

          {/* Right side - Large image with checklist below */}
          <div className="space-y-8 flex flex-col">
            <div className="relative flex items-center justify-center flex-1">
              <svg viewBox="0 0 300 300" className="w-full h-full max-w-md" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="lines" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="2" y2="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                  </pattern>
                </defs>

                {/* Main geometric shape with lines */}
                <path d="M 150 50 L 250 150 L 150 250 L 50 150 Z" fill="none" stroke="currentColor" strokeWidth="2" />

                {/* Inner circles with line pattern */}
                <circle cx="150" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <circle cx="150" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

                {/* Radiating lines */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2
                  const x1 = 150 + 50 * Math.cos(angle)
                  const y1 = 150 + 50 * Math.sin(angle)
                  const x2 = 150 + 90 * Math.cos(angle)
                  const y2 = 150 + 90 * Math.sin(angle)
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.2" />
                  )
                })}
              </svg>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Поиск негативного контента в открытых источниках</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Анализ негативных упоминаний и отзывов</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Мониторинг репутации в режиме реального времени</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Легитимное удаление контента и деиндексация</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Восстановление позитивного онлайн-имиджа</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
