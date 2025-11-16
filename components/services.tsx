export default function Services() {
  const services = [
    {
      number: "01",
      title: "Аналитический модуль",
      description:
        "RepClean ищет утечки персональных данных и негативный контент по всем доступным источникам и предоставляет полный отчет о найденной информации",
    },
    {
      number: "02",
      title: "ИИ модуль анализа репутации",
      description:
        "Анализирует вашу репутацию в интернете на основе больших данных, предоставляя комплексную оценку цифрового следа и репутационных рисков",
    },
    {
      number: "03",
      title: "Модуль удаления",
      description:
        "Проводит легитимное удаление информации из источников с последующим мониторингом и контролем повторного появления",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 px-4 lg:px-8">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Наши решения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к защите и восстановлению вашей репутации в интернете
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:border-primary/50 transition"
            >
              <div className="text-5xl font-bold text-primary/20">{service.number}</div>
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
