import { ShieldCheck, Target, TrendingUp } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 border-b border-border bg-background">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Наши преимущества
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
              Полный контроль над вашим онлайн-имиджем
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-foreground/70">
              Мы предлагаем комплексные решения, которые не просто удаляют негатив, но и активно формируют
              положительное восприятие вашего бренда или личности в сети.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-border rounded-xl bg-background/50 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Автоматический мониторинг 24/7</h3>
              <p className="text-foreground/70">
                Наша система непрерывно сканирует интернет, чтобы мгновенно обнаруживать новые угрозы вашей репутации и
                незамедлительно на них реагировать.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-border rounded-xl bg-background/50 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Точечное удаление контента</h3>
              <p className="text-foreground/70">
                Мы используем передовые технологии для быстрого и легитимного удаления нежелательной информации, будь
                то статьи, отзывы или личные данные.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-border rounded-xl bg-background/50 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Повышение рейтинга в поиске</h3>
              <p className="text-foreground/70">
                Мы не только удаляем негатив, но и помогаем продвигать позитивный контент, чтобы он занимал верхние
                строчки в поисковой выдаче.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
