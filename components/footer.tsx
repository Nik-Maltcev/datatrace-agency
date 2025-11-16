import Link from "next/link"
import { Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8 space-y-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block font-bold text-lg">
              repclean.
            </Link>
            <p className="text-sm text-foreground leading-relaxed max-w-xs">
              ИИ-платформа для поиска и удаления компрометирующей информации из интернета
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest">КОМПАНИЯ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-foreground hover:text-primary transition">
                  Решения
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground hover:text-primary transition">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest">РЕШЕНИЯ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Обнаружение и удаление
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Мониторинг глубинного интернета
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Анализ репутации
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest">КОНТАКТЫ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@repclean.ru" className="text-foreground hover:text-primary transition">
                  support@repclean.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <a href="#" className="text-foreground hover:text-primary transition">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs text-foreground">
          <p>© 2025 RepClean. Все права защищены.</p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="#" className="hover:text-primary transition">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Соглашение об обработке данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
