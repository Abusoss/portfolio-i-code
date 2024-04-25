"use server"
import { GiphyFetch } from "@giphy/js-fetch-api";
import { request } from "graphql-request";
import { env } from 'process';
import { graphql } from './graphql';

const HomeQuery = graphql(`
    query Home {
        Home {
            Hero_title
            Hero_description
            Hero_a_propos_titre
            Hero_a_propos_sous_titre
            Hero_a_propos_texte
            Portrait {
                filename_disk
                focal_point_x
                focal_point_y
            }
        }
    }
    `,
);
// You can now use this in your `useQuery` calls.
export async function getHome() {
    return request(env.NEXT_PUBLIC_GRAPHQL, HomeQuery).then((data) => {
        return data.Home;
    });
};


export async function getGif({ apiKey, id }: { apiKey: string, id: string }) {
    const giphyFetch = new GiphyFetch(apiKey);
    return giphyFetch.gif(id).then((data) => {
        return data.data;
    });
}