"use server"
import { request } from "graphql-request";
import { env } from 'process';
import { graphql } from './graphql';

const HomeQuery = graphql(`
    query Home {
        Home {
            Hero_title
            Hero_description
        }
    }
    `,
);
// You can now use this in your `useQuery` calls.
export async function getHome() {
    // return fetch("http://0.0.0.0:8055/graphql", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({query:query}),
    // }).then((data) => {
    //     console.log("hello");
    //     console.log(data);
    // }).catch((error) => {
    //     console.error(error);
    // });
    return request(env.NEXT_PUBLIC_GRAPHQL, HomeQuery).then((data) => {
        console.log(data);
        return data.Home;
    });
};