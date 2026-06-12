"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MENU, WA_MSG, waLink, waPedido, type MenuItem } from "@/data/menu";
import { CloseIcon, WhatsAppIcon } from "./icons";

const spring = { type: "spring" as const, stiffness: 420, damping: 38 };

function ProductRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex min-h-16 items-center gap-4 border-b border-hairline-faint py-3.5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-medium text-ink">{item.nombre}</p>
        <p className="mt-0.5 truncate text-[13px] text-ink-muted">{item.desc}</p>
      </div>
      <p className="shrink-0 font-display text-lg font-semibold text-gold-bright">
        {item.precio}
      </p>
      <motion.a
        href={waPedido(item.nombre)}
        target="_blank"
        rel="noopener"
        whileTap={{ scale: 0.94 }}
        className="flex min-h-11 shrink-0 items-center rounded-full border border-hairline px-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-bright transition-colors duration-150 hover:border-gold hover:bg-gold/5 active:bg-gold/10"
        aria-label={`Pedir ${item.nombre} por WhatsApp`}
      >
        Pedir
      </motion.a>
    </div>
  );
}

export default function MenuSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [filtro, setFiltro] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  // Bloquea el scroll del fondo mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const categorias = MENU.filter((c) => !filtro || c.categoria === filtro);
  const tabs: (string | null)[] = [null, ...MENU.map((c) => c.categoria)];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo oscurecido */}
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 z-50 cursor-default bg-black/70 backdrop-blur-[3px]"
          />

          {/* Hoja inferior */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menú de productos"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={reduceMotion ? { duration: 0 } : spring}
            drag={reduceMotion ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 110 || info.velocity.y > 600) onClose();
            }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[86dvh] w-full max-w-md flex-col rounded-t-sheet border-t border-hairline bg-surface"
            style={{ touchAction: "none" }}
          >
            {/* Asa para arrastrar */}
            <div className="flex shrink-0 justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-ink-faint/50" />
            </div>

            {/* Encabezado */}
            <div className="flex shrink-0 items-center justify-between px-6 pt-1 pb-3">
              <h2 className="font-display text-[26px] font-semibold tracking-wide text-gold-bright">
                Menú
              </h2>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
                aria-label="Cerrar"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline-faint text-ink-muted transition-colors duration-150 hover:text-ink"
              >
                <CloseIcon className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Pestañas de categorías */}
            <div className="no-scrollbar flex shrink-0 gap-2 overflow-x-auto px-6 pb-4">
              {tabs.map((tab) => {
                const active = filtro === tab;
                return (
                  <button
                    key={tab ?? "todo"}
                    type="button"
                    onClick={() => setFiltro(tab)}
                    className={`relative min-h-10 shrink-0 rounded-full px-4 text-[13px] font-medium transition-colors duration-200 ${
                      active ? "text-[#161002]" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="tab-pill"
                        transition={spring}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(160deg, var(--gold-bright), var(--gold))",
                        }}
                      />
                    )}
                    {!active && (
                      <span className="absolute inset-0 rounded-full border border-hairline-faint" />
                    )}
                    <span className="relative">{tab ?? "Todo"}</span>
                  </button>
                );
              })}
            </div>

            {/* Lista de productos */}
            <div
              className="flex-1 overflow-y-auto px-6 pb-8"
              style={{ touchAction: "pan-y" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={filtro ?? "todo"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {categorias.map((cat) => (
                    <section key={cat.categoria} className="mb-2">
                      <h3 className="mt-4 mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                        {cat.categoria}
                      </h3>
                      {cat.items.map((item) => (
                        <ProductRow key={item.nombre} item={item} />
                      ))}
                    </section>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pie con CTA de WhatsApp */}
            <div className="shrink-0 border-t border-hairline-faint px-6 pt-4 pb-[calc(20px+env(safe-area-inset-bottom))]">
              <motion.a
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener"
                whileTap={{ scale: 0.97 }}
                className="flex min-h-13 items-center justify-center gap-2.5 rounded-button text-[15px] font-semibold text-[#161002]"
                style={{
                  background:
                    "linear-gradient(160deg, var(--gold-bright), var(--gold) 90%)",
                }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
