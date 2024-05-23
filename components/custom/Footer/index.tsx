import { Separator } from "../Separator"

export const Footer = () => {
   return (

      <footer className="container text-center my-6 p-8 text-gray3">
         <Separator />
         <div className="pt-10">Vous avez trouvé un problème avec cette page ? <a className="text-blue-500" href="https://github.com/Abusoss/portfolio-i-code/tree/main/components/custom/Pages">Corrigez-la sur GitHub</a></div>

         <div className="py-3">
            Besoin d'aide ? Envoyez un email à <a href="mailto:m.loulou9311@gmail.com"><span className="text-white font-bold">m.loulou9311@gmail.com</span></a>
         </div>
         <div className="flex justify-center items-center my-2">
            <a href="https://app.daily.dev/abusoss"><i className="w-6 inline-block mx-2">
            <svg viewBox="0 0 32 18" xmlns="http://www.w3.org/2000/svg" className="h-logo"><g fill="hsl(var(--foreground))" fillRule="nonzero"><path d="M26.633 8.69l-3.424-3.431 1.711-3.43 5.563 5.575c.709.71.709 1.861 0 2.572l-6.847 6.86c-.709.711-1.858.711-2.567 0a1.821 1.821 0 010-2.571l5.564-5.575z" fillOpacity="0.64"></path><path d="M21.07.536a1.813 1.813 0 012.568 0l1.283 1.286L9.945 16.83c-.709.71-1.858.71-2.567 0l-1.284-1.287L21.071.536zm-6.418 4.717l-2.567 2.572-3.424-3.43-4.28 4.288 3.424 3.43-1.71 3.43L.531 9.97a1.821 1.821 0 010-2.572L7.378.537A1.813 1.813 0 019.945.535l4.707 4.717z"></path></g></svg></i>
            </a>
            <a href="https://github.com/Abusoss/">
               <i className="w-6 inline-block mx-2"><svg aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svggithub "><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></i>
            </a>
         </div>

         {/* <h6>Liens utile</h6>

         <div className="py-3">
            <a href="/contributors">Contrib</a> |
            <a href="/privacy">Privacy</a> |
            <a href="/termes">Termes</a>
         </div> */}


         <div className="text-xs">
            Copyright ©  2024 I-CODE <br />
         </div>

      </footer>

   )
}