/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto es crucial para generar HTML estático

  // --- Estas líneas son la clave para que CSS/JS/Imágenes funcionen ---
  images: {
    unoptimized: true, // Esto es recomendable para la optimización de imágenes en sitios estáticos
  },
  // basePath y assetPrefix deben ser vacíos para un dominio de usuario como victorbarreiro.github.io
  basePath: '',
  assetPrefix: '',
  // ------------------------------------------------------------------
};

module.exports = nextConfig;
