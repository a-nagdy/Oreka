import Catalogues from "@/components/Catalogues/Catalogues";
import Loading from "@/components/Loading/Loading";
import { StoreProvider } from "@/util/Store";
import { Suspense } from "react";
import EntryPoints from "../components/entrypoints/EntryPoints";
import MainBanners from "../components/mainBanners/MainBanners";
import MainProducts from "../components/mainProducts/MainProducts";

export default async function Home({ params }) {
  return (
    <StoreProvider>
      <Suspense fallback={<Loading className="top-0" />}>
        <main className="flex min-h-screen flex-col items-center justify-between py-14">
          <MainBanners />
          <EntryPoints />
          <Catalogues />
          <MainProducts />
        </main>
      </Suspense>
    </StoreProvider>
  );
}
