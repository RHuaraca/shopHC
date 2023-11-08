// Importamos el módulo de Webpack
import webpack from "webpack";

// Exportamos un objeto con la configuración de Webpack
export const entry = "./src/index.js";
export const output = {
  // El nombre del archivo que se generará
  filename: "bundle.js",
  // La ruta donde se guardará el archivo
  path: __dirname + "/dist",
};
export const module = {
  rules: [
    // Aquí podemos agregar reglas para procesar archivos CSS, SASS, LESS, etc.
    {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
    },
  ],
};
export const plugins = [
  // Aquí podemos agregar plugins para optimizar el código, generar archivos HTML, copiar archivos estáticos, etc.
];
