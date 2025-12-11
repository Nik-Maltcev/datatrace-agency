"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Агентство", href: "#top" },
  { label: "Решения", href: "#solutions" },
  { label: "Этапы", href: "#process" },
  { label: "Кейсы", href: "#cases" },
  { label: "Тарифы", href: "#pricing" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 border-b border-border/80 shadow-[0_10px_40px_rgba(15,15,15,0.06)] backdrop-blur"
          : "bg-background/70 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-brand-black">
              <div className="h-3 w-3 rounded-full bg-brand-accent" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-mono font-bold text-lg text-foreground tracking-tight">datatrace</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">reputation</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] font-medium uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <Link
              href="mailto:hello@datatrace.agency"
              className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/50 hover:text-foreground transition-colors"
            >
              24/7
            </Link>
            <button className="rounded-full bg-brand-black px-6 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white hover:bg-brand-dark hover:-translate-y-0.5 transition-all">
              Аудит
            </button>
          </div>

          <button
            className="md:hidden rounded-full border border-border p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-xs font-semibold uppercase tracking-normal text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full rounded-full border border-foreground px-6 py-3 text-[11px] font-black uppercase tracking-normal text-foreground">
              Запросить аудит
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
