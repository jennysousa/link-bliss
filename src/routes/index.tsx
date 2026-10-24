import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarHeart, Mail } from "lucide-react";

import dudaPortrait from "@/assets/duda-bertocco.asset.json";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duda Bertocco - Amamente Feliz" },
      {
        name: "description",
        content:
          "Cursos e consultoria com Duda Bertocco para produzir mais leite, amamentar sem dor e desmamar com respeito.",
      },
      { property: "og:title", content: "Duda Bertocco - Amamente Feliz" },
      {
        property: "og:description",
        content: "Apoio para cada fase da amamentação, com informação e acolhimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const paths = [
  {
    title: "Amamente sem dor",
    description: "Entenda o que está errado e como corrigir.",
    href: "https://amamentefeliz.com.br/amamentesemdor?src=bio-asd&utm_source=instagram&utm_medium=bio&utm_campaign=asd&utm_content=minisite",
  },
  {
    title: "Tchau, Tchau, Tetê",
    description: "Desmame gentil, total ou parcial.",
    href: "https://amamentefeliz.com.br/tchautchautete?src=bio-ttt&utm_source=instagram&utm_medium=bio&utm_campaign=ttt&utm_content=minisite",
  },
];

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="relative flex min-h-screen justify-center overflow-x-hidden bg-background text-foreground antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 -top-24 size-80 rounded-full bg-secondary/55 blur-3xl" />
        <div className="absolute -right-16 top-28 size-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute left-8 top-56 size-52 rounded-full bg-secondary/30 blur-2xl" />
      </div>

      <main className="relative flex min-h-screen w-full max-w-[430px] flex-col gap-3 px-4 pb-10 pt-6 sm:py-10">
        <header className="rise flex items-center gap-4 px-1 pt-2">
          <img
            src={dudaPortrait.url}
            alt="Duda Bertocco"
            width={160}
            height={160}
            className="size-[80px] shrink-0 object-cover"
          />
          <div className="min-w-0">
            <h1 className="font-display text-[30px] leading-none">Duda Bertocco</h1>
            <p className="mt-2 text-[13px] leading-snug text-foreground/70">
              Consultora de amamentação · Psicóloga perinatal · Doula
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase text-foreground/50">CRP 05/67778</p>
          </div>
        </header>

        <p className="rise px-1 text-[13.5px] leading-relaxed text-foreground/70 [animation-delay:60ms]">
          Respire fundo. Aqui você encontra apoio para cada fase da amamentação.
        </p>

        <section className="rise rounded-[28px] border border-primary-foreground/20 bg-primary p-5 text-primary-foreground shadow-feature [animation-delay:120ms]">
          <p className="text-[11px] font-medium uppercase text-secondary">Comece por aqui</p>
          <h2 className="mt-2 font-display text-[32px] font-bold leading-none">Mais Leite Hoje</h2>
          <p className="mt-3 text-[13.5px] leading-relaxed text-primary-foreground/85">
            Seu corpo pode produzir mais leite. Aprenda a estimular do jeito certo, com segurança e sem culpa.
          </p>
          <a
            href="https://amamentefeliz.com.br/metodomaisleitehoje?utm_source=instagram&utm_medium=bio&utm_campaign=mlh&utm_content=minisite"
            className={cn(
              buttonVariants(),
              "mt-5 h-12 w-full rounded-full bg-background px-4 text-primary shadow-none hover:bg-background/90",
            )}
          >
            <span>Quero produzir mais leite</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section aria-labelledby="outros-caminhos" className="rise flex flex-col gap-2 [animation-delay:180ms]">
          <h2 id="outros-caminhos" className="sr-only">Outros caminhos para você</h2>
          {paths.map((path) => (
            <a
              key={path.title}
              href={path.href}
              className="group grid min-h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-glass-border bg-glass p-3.5 shadow-glass backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-glass-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="min-w-0">
                <span className="block font-display text-[21px] leading-tight">{path.title}</span>
                <span className="mt-0.5 block text-xs leading-snug text-foreground/60">{path.description}</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          ))}
        </section>

        <a
          href="https://chat.whatsapp.com/EiuL4BHiJ7yH6b0qSGHPv8?utm_source=instagram&utm_medium=bio&utm_campaign=whatsapp_group"
          className="rise group grid min-h-[76px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-glass-border bg-glass p-4 shadow-glass backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-glass-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [animation-delay:240ms]"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary/45 text-primary">
            <WhatsAppMark className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[20px] leading-tight">Grupo do WhatsApp</span>
            <span className="block text-xs leading-snug text-foreground/60">Promoções exclusivas de produtos para bebê</span>
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>

        <a
          href="https://wa.me/5521974374458?text=Oi%20Duda%2C%20quero%20saber%20mais%20sobre%20seus%20atendimentos"
          className="rise group grid min-h-[76px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-foreground p-4 text-background shadow-feature transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [animation-delay:300ms]"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-secondary">
            <CalendarHeart className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[20px] leading-tight">Consultoria individual</span>
            <span className="block text-xs leading-snug text-background/65">Um atendimento especializado para o seu caso</span>
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>

        <footer className="rise pt-3 text-center text-[11px] leading-relaxed text-foreground/50 [animation-delay:360ms]">
          <a className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="mailto:contato@dudabertocco.com">
            <Mail className="size-3.5" aria-hidden="true" />
            contato@dudabertocco.com
          </a>
          <p className="mt-2">© 2026 Amamente Feliz Ltda. Todos os direitos reservados.</p>
          <p className="mt-1">Política de Privacidade · Termos de uso</p>
        </footer>
      </main>
    </div>
  );
}
