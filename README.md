# Vaping Chilpo — Portal de enlaces

Página móvil tipo "link in bio" para pedidos por WhatsApp.

## Cómo correrla en tu compu

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en el navegador.

## Cómo editar productos, precios, número y mensajes

Todo está en **UN solo archivo**: `data/menu.ts`
(número de WhatsApp, mensajes prellenados y el menú completo).
Tiene comentarios en español que explican cada cosa.

## Tu logo

Suelta tu archivo `logo.png` dentro de la carpeta `public/`.
Mientras no exista, la página muestra un monograma "VC" elegante.

## Tarjeta de contacto

El archivo `public/VapingChilpo.vcf` es el contacto que la gente
guarda en su cel. Edítalo con cualquier editor de texto si cambias
de número.

## Publicar en Vercel

Sube el proyecto a GitHub y conéctalo en vercel.com — no necesita
ninguna configuración extra.
