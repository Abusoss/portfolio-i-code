import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
const Gifs = async () => {
   const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
   const { data } = await giphyFetch.gif("fpXxIjftmkk9y");
   return (
      <span className="hidden hover:block">
         {data ? <Gif gif={data} width={300} /> : null}
      </span>
   )
}