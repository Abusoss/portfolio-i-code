import Home from "@/components/custom/Home";
import { getHome } from "@/lib/data";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query';

export default async function Page() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['Home'],
    queryFn: getHome,
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
