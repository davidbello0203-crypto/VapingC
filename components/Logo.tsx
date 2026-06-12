"use client";

import { useState } from "react";
import { CrownIcon } from "./icons";

/*
  Logo: busca /logo.png en la carpeta public/.
  Si todavía no existe, muestra un monograma "VC" elegante
  dentro del mismo aro dorado (el dueño puede soltar el
  archivo logo.png después y aparecerá solo).
*/
export default function Logo() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative">
      {/* Aro dorado fino */}
      <div
        className="relative h-28 w-28 rounded-full p-[1.5px]"
        style={{
          background:
            "linear-gradient(160deg, var(--gold-bright), var(--gold) 45%, var(--gold-deep))",
          boxShadow: "0 0 44px rgba(212,164,55,0.22)",
        }}
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#0b0a08]">
          {hasImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt="Logotipo de Vaping Chilpo: gorila con corona dorada"
              className="h-full w-full object-cover"
              onError={() => setHasImage(false)}
            />
          ) : (
            <div className="flex flex-col items-center gap-0.5" aria-hidden="true">
              <CrownIcon className="h-5 w-5 text-gold" />
              <span className="font-display text-3xl font-semibold leading-none tracking-[0.08em] text-gold-bright">
                VC
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
