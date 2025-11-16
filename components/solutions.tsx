export default function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Анализ и сканирование",
      description:
        "Модуль DataTrace проводит комплексный анализ интернета в поиске негативной информации о вас или вашем бренде. Сканирует поисковые системы, социальные сети, форумы, сайты отзывов и другие источники.",
    },
    {
      number: "02",
      title: "Удаление и деиндексация",
      description:
        "Наша команда работает с владельцами сайтов и платформ для легитимного удаления или скрытия негативного контента. Проводим полную деиндексацию из поисковых систем с помощью официальных инструментов.",
    },
  ]

  return (
    <section id="solutions" className="py-20 lg:py-28 px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">РЕШЕНИЯ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="space-y-6 border-l-2 border-foreground pl-8">
              <div className="text-5xl lg:text-6xl font-black text-foreground/10">{solution.number}</div>
              <div className="space-y-4 -mt-8">
                <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                <p className="text-base text-foreground leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
