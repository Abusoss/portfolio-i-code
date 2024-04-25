import Home from "@/components/custom/Home";
import { getGifs, getHome } from "@/lib/data";
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
  await queryClient.prefetchQuery({
    queryKey: ['Gif'],
    queryFn: () => getGifs({ apiKey: "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh", id: "TfbqwmizD6vTrrhJuL" }),
  })
  // apiKey : "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"
  // id : "fpXxIjftmkk9y"
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
