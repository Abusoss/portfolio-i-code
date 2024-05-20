import { Glpi } from "@/components/custom/Pages/Projets/Glpi";
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
  await queryClient.prefetchQuery({
    queryKey: ['Gif'],
    queryFn: () => getGif({ apiKey: "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh", id: "TfbqwmizD6vTrrhJuL" }),
  })
  // apiKey : "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"
  // id : "fpXxIjftmkk9y"
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Glpi />
    </HydrationBoundary>
  );
}
