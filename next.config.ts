import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Sirve el vCard con el content-type correcto para que iOS Safari
        // lo abra como contacto en vez de descargarlo como archivo.
        source: "/VapingChilpo.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Content-Disposition", value: "inline; filename=VapingChilpo.vcf" },
        ],
      },
    ];
  },
};

export default nextConfig;
