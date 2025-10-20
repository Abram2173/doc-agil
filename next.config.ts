import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Exporta como sitio estático
  basePath: '/doc-agil',  // Nombre de tu repo
  assetPrefix: '/doc-agil/',  // Para assets como CSS e imágenes
  images: {
    unoptimized: true  // Necesario para sitios estáticos
  },
  trailingSlash: true  // Opcional, para URLs consistentes
};

export default nextConfig;