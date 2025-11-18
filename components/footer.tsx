import Link from "next/link"
import { Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto space-y-12 px-6 py-16 lg:space-y-16 lg:py-24">
        <div className="rounded-[40px] border border-border/70 bg-foreground px-8 py-10 text-background shadow-[0_30px_80px_rgba(15,15,15,0.12)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-normal text-background/60">Готовы включиться</p>
              <h3 className="mt-3 text-3xl font-black leading-tight">Получите аудит за 48 часов и план зачистки.</h3>
              <p className="mt-3 text-sm text-background/80">
                Мы свяжемся через защищённый канал, подписываем NDA до передачи данных.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@datatrace.agency"
                className="rounded-full border border-background/40 px-8 py-4 text-center text-[11px] font-black uppercase tracking-normal text-background hover:border-background"
              >
                Написать на почту
              </a>
              <a
                href="https://t.me/"
                className="rounded-full bg-background px-8 py-4 text-center text-[11px] font-black uppercase tracking-normal text-foreground"
              >
                Telegram‑связь
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr,0.8fr,0.8fr,0.6fr]">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black text-foreground">
              datatrace.
            </Link>
            <p className="text-sm text-foreground/70">
              Агентство управления цифровой репутацией. Работаем глобально, штаб в Москве и Лимассоле.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Навигация</p>
            <div className="mt-4 space-y-3 text-sm text-foreground/70">
              <Link href="#solutions" className="block hover:text-foreground">
                Решения
              </Link>
              <Link href="#cases" className="block hover:text-foreground">
                Кейсы
              </Link>
              <Link href="#pricing" className="block hover:text-foreground">
                Тарифы
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Сервисы</p>
            <div className="mt-4 space-y-3 text-sm text-foreground/70">
              <span>Удаление и замещение в SERP</span>
              <span>Правовой суппорт</span>
              <span>Контентные кампании</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-normal text-foreground/60">Контакты</p>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@datatrace.agency" className="hover:text-primary">
                hello@datatrace.agency
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <Send className="h-4 w-4" />
              <a href="https://t.me/" className="hover:text-primary">
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
