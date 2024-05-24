import { Projets } from "@/components/custom/Pages/Projets";
import { getGif, getHome } from "@/lib/data";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['Home'],
    queryFn: getHome,
  })
  // apiKey : "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"
  // id : "fpXxIjftmkk9y"
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Projets />
    </HydrationBoundary>
  );
}
