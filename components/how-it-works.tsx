"use client"

import { Globe, Search, MessageSquare, Shield, Check } from "lucide-react"

export default function HowItWorks() {
  const sources = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Поисковые системы",
      description: "Google, Yandex и другие поисковики.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Социальные сети",
      description: "Facebook, VK, Instagram, TikTok и другие.",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Сайты отзывов",
      description: "Яндекс.Карты, 2Gis, Avvo, Trustpilot и другие.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Новостные сайты и форумы",
      description: "Публикации на новостных порталах и блогах.",
    },
  ]

  const actions = [
    {
      step: "01",
      title: "Анализ и стратегия",
      description: "Определяем источники и масштаб проблемы, разрабатываем план действий.",
    },
    {
      step: "02",
      title: "Процесс удаления",
      description: "Связываемся с владельцами сайтов и используем юридические методы.",
    },
    {
      step: "03",
      title: "Вытеснение негатива",
      description: "Создаем и продвигаем позитивный контент для улучшения репутации.",
    },
    {
      step: "04",
      title: "Мониторинг и отчетность",
      description: "Отслеживаем результаты и предоставляем подробные отчеты о проделанной работе.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 border-b border-border bg-background">
      <div className="container mx-auto space-y-20">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Как мы работаем
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
            Прозрачный процесс, реальные результаты
          </h2>
          <p className="text-lg mt-4 text-foreground/70">
            Мы следуем проверенному четырехэтапному процессу, чтобы гарантировать эффективное и легитимное решение
            ваших репутационных проблем.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px border border-border rounded-xl overflow-hidden">
          {actions.map((item, index) => (
            <div key={index} className="bg-background/50 p-8 space-y-4">
              <div className="text-4xl font-black text-primary/20">{item.step}</div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Sources Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Работаем со всеми источниками</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sources.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
