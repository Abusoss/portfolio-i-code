import { Orange } from "@/components/custom/Pages/Projets/Orange";
import { getHome } from "@/lib/data";
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
      <Orange />
    </HydrationBoundary>
  );
}
