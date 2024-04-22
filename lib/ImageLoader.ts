import { ImageLoaderProps } from "next/image";
import { env } from 'process';

const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src

export function Loader({ src, width, quality }: ImageLoaderProps) {
   console.log(src);
   console.log(env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
   const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
   const url = `${env.DOMAIN_DIRECTUS}/assets/${normalizeSrc(src)}`;
   console.log(url);
   return url;
}