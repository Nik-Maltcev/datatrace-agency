import Link from "next/link"
import { Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-16 lg:space-y-16 lg:py-24">
        <div className="rounded-2xl bg-brand-black px-8 py-10 text-white">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">Готовы включиться</p>
              <h3 className="mt-3 font-mono text-2xl font-bold leading-tight tracking-tight">Аудит за 48 часов</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Защищённый канал, NDA до передачи данных.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@datatrace.agency"
                className="rounded-full border border-white/30 px-6 py-3 text-center font-mono text-[10px] font-medium uppercase tracking-wider text-white hover:border-white/60 transition-colors"
              >
                Почта
              </a>
              <a
                href="https://t.me/"
                className="rounded-full bg-white px-6 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-black hover:-translate-y-0.5 transition-all"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr,0.8fr,0.8fr,0.6fr]">
          <div className="space-y-3">
            <Link href="/" className="font-mono text-xl font-bold text-foreground tracking-tight">
              datatrace
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Управление репутацией. Москва, Лимассол.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Навигация</p>
            <div className="mt-4 space-y-2 text-sm text-foreground/60">
              <Link href="#solutions" className="block hover:text-foreground transition-colors">
                Решения
              </Link>
              <Link href="#cases" className="block hover:text-foreground transition-colors">
                Кейсы
              </Link>
              <Link href="#pricing" className="block hover:text-foreground transition-colors">
                Тарифы
              </Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Сервисы</p>
            <div className="mt-4 space-y-2 text-sm text-foreground/60">
              <span className="block">SERP-менеджмент</span>
              <span className="block">Юридическая защита</span>
              <span className="block">Контент-кампании</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50">Контакты</p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Mail className="h-3.5 w-3.5" />
              <a href="mailto:hello@datatrace.agency" className="hover:text-foreground transition-colors">
                hello@datatrace.agency
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Send className="h-3.5 w-3.5" />
              <a href="https://t.me/" className="hover:text-foreground transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/80 pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Datatrace Agency. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-primary">
              Условия оказания услуг
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
