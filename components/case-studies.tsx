export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Удаление негативной информации политика",
      description:
        "Требуется удаление негативной информации по запросу Абай Бекбоев Зарлыкович. В первую очередь с ip Киргизии. В идеале все упоминания в поисковиках.",
      sources: ["economist.kg", "elgezit.kg", "nazarnews.org"],
      result: "Успешно удалено 4 упоминания из основных источников",
      timeline: "7 дней",
    },
    {
      id: 2,
      title: "Восстановление репутации после компрометации",
      description:
        "Никогда не занималась подобной деятельностью. Фото с социальных сетей мои, личная информация тоже, но ни переписок подобных, ни тем более видео/фото никогда не делала.",
      sources: ["shluha.to", "Поисковые индексы"],
      result: "Полное удаление компрометирующего контента и восстановление репутации",
      timeline: "5 дней",
    },
  ]

  return (
    <section id="cases" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">РЕАЛЬНЫЕ КЕЙСЫ</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
            Примеры успешного восстановления репутации
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <div key={caseStudy.id} className="border border-foreground p-8 space-y-6">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-foreground">{caseStudy.title}</h4>
                <p className="text-sm text-foreground leading-relaxed">{caseStudy.description}</p>
              </div>

              <div className="border-t border-foreground pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Источники</p>
                    <div className="space-y-1">
                      {caseStudy.sources.map((source, idx) => (
                        <p key={idx} className="text-sm text-foreground">
                          {source}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Сроки</p>
                    <p className="text-sm text-foreground">{caseStudy.timeline}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-foreground">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Результат</p>
                  <p className="text-sm text-foreground">{caseStudy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
