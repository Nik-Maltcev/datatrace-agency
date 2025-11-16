export default function RemovalStages() {
  const stages = [
    {
      step: "ЭТАП 1",
      title: "Формирование списка источников",
      description:
        "Формирование списка источников. На данном этапе важно найти все ссылки, при переходе по которым клиент сталкивается с негативом",
    },
    {
      step: "ЭТАП 2",
      title: "Составление перечня негативных отзывов",
      description: "Составление полного перечня негативных отзывов и упоминаний в Интернете",
    },
    {
      step: "ЭТАП 3",
      title: "Уточнение процесса",
      description: "Уточнение самого процесса – негатив еще создается или процесс завершен",
    },
  ]

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto space-y-16">
        {/* Section Title */}
        <div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance">
            Этапы удаления информации
          </h2>
        </div>

        {/* Stages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="border border-border p-8 space-y-6">
              {/* Content */}
              <div className="space-y-3">
                <p className="text-lg font-bold text-primary uppercase tracking-widest">{stage.step}</p>
                <h3 className="text-lg font-bold text-foreground">{stage.title}</h3>
                <p className="text-sm text-foreground leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
