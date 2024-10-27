import { Projets } from "@/components/custom/Pages/Projets";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey: ['Home'],
  //   queryFn: getHome,
  // })
  await queryClient.prefetchQuery({
    queryKey: ['Home'],
    queryFn: async () => {
      const data = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            Home: {
              title: 'Home',
            },
          });
        }, 1000);
      });
      return data;
    },
  })
  // apiKey : "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"
  // id : "fpXxIjftmkk9y"
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Projets />
    </HydrationBoundary>
  );
}
