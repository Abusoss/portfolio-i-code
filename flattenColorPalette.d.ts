// Déclaration pour le module 'tailwindcss/lib/util/flattenColorPalette'
declare module 'tailwindcss/lib/util/flattenColorPalette' {
   // Type pour une palette de couleurs
   type ColorPalette = {
      [colorName: string]: string | ColorPalette;
   };

   // Déclaration de la fonction flattenColorPalette
   export default function flattenColorPalette(colors: ColorPalette): { [key: string]: string };
}