"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, type Variants } from "motion/react";
import { WA_MSG, waLink } from "@/data/menu";
import Logo from "./Logo";
import MenuSheet from "./MenuSheet";
import {
  ChevronRightIcon,
  ContactIcon,
  CrownIcon,
  MenuIcon,
  WhatsAppIcon,
} from "./icons";

/* Animación de entrada: aparición escalonada con resorte suave */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 340, damping: 30 },
  },
};

const tap = { scale: 0.97 };
const hover = { y: -2 };
const springFast = { type: "spring" as const, stiffness: 500, damping: 32 };

function ActionRow({
  title,
  subtitle,
  icon,
  variant,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  variant: "gold" | "card" | "ghost";
}) {
  const isGold = variant === "gold";
  return (
    <span
      className={`flex w-full items-center gap-4 rounded-button px-5 py-4 text-left transition-colors duration-200 ${
        isGold
          ? "text-[#161002]"
          : variant === "card"
            ? "border border-hairline bg-surface text-ink hover:border-gold/45"
            : "border border-hairline-faint bg-transparent text-ink hover:border-hairline"
      }`}
      style={
        isGold
          ? {
              background:
                "linear-gradient(160deg, var(--gold-bright), var(--gold) 70%, var(--gold-deep) 130%)",
            }
          : undefined
      }
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
          isGold ? "border-[#161002]/20" : "border-hairline text-gold-bright"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15.5px] font-semibold leading-snug">{title}</span>
        <span
          className={`mt-0.5 block text-[12.5px] font-normal leading-snug ${
            isGold ? "text-[#161002]/70" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </span>
      </span>
      <ChevronRightIcon
        className={`h-4 w-4 shrink-0 ${isGold ? "text-[#161002]/50" : "text-ink-faint"}`}
      />
    </span>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  // En iPhone, Safari abre la tarjeta de contacto directo si NO se
  // fuerza la descarga; en Android se descarga el .vcf y al tocarlo
  // abre la app de Contactos.
  const isIphone = useSyncExternalStore(
    () => () => {},
    () => /iPhone|iPad|iPod/.test(navigator.userAgent),
    () => false,
  );

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pt-14 pb-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col items-center"
      >
        {/* Identidad */}
        <motion.div variants={item}>
          <Logo />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-center font-display text-[44px] font-semibold uppercase leading-none tracking-[0.12em]"
        >
          <span className="text-silver-sheen">Vaping</span>{" "}
          <span className="text-gold-sheen">Chilpo</span>
        </motion.h1>

        <motion.div variants={item} className="mt-5 flex w-full items-center gap-4">
          <span className="hairline-h flex-1" />
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Tu punto de confianza en vapes
          </p>
          <span className="hairline-h flex-1" />
        </motion.div>

        {/* Estado */}
        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-2.5"
          role="status"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status" />
          </span>
          <p className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-ink-muted">
            Pedidos y entregas por WhatsApp
          </p>
        </motion.div>

        {/* Acciones */}
        <div className="mt-10 flex w-full flex-col gap-3.5">
          <motion.a
            variants={item}
            whileTap={tap}
            whileHover={hover}
            transition={springFast}
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener"
          >
            <ActionRow
              variant="gold"
              title="Mándanos WhatsApp"
              subtitle="Escríbenos y guárdanos para tu próximo pedido"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            />
          </motion.a>

          <motion.button
            variants={item}
            whileTap={tap}
            whileHover={hover}
            transition={springFast}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          >
            <ActionRow
              variant="card"
              title="Ver el menú"
              subtitle="Toda la variedad y precios"
              icon={<MenuIcon className="h-5 w-5" />}
            />
          </motion.button>

          <motion.a
            variants={item}
            whileTap={tap}
            whileHover={hover}
            transition={springFast}
            href="/VapingChilpo.vcf"
            {...(isIphone ? {} : { download: "VapingChilpo.vcf" })}
          >
            <ActionRow
              variant="ghost"
              title="Guardar contacto"
              subtitle="Toca y agréganos directo a tus contactos"
              icon={<ContactIcon className="h-5 w-5" />}
            />
          </motion.a>
        </div>

        {/* Mensaje de contexto */}
        <motion.p
          variants={item}
          className="mt-9 max-w-75 text-center text-[13.5px] leading-relaxed text-ink-muted"
        >
          ¿Andas en la <strong className="font-semibold text-gold-bright">peda</strong> y
          se está acabando el vape? Mándanos mensaje ahorita y{" "}
          <strong className="font-semibold text-gold-bright">guárdanos</strong> — el
          próximo te lo llevamos antes de que truene.
        </motion.p>

        {/* Pie */}
        <motion.footer
          variants={item}
          className="mt-12 flex flex-col items-center gap-3 pb-[env(safe-area-inset-bottom)]"
        >
          <CrownIcon className="h-4 w-4 text-gold/60" />
          <p className="text-center text-[11.5px] leading-relaxed text-ink-faint">
            © 2026 Vaping Chilpo · Solo mayores de 18 años
          </p>
        </motion.footer>
      </motion.div>

      <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}
