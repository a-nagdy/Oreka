import EntryPoints from "./components/entrypoints/EntryPoints";
import MainBanners from "./components/mainBanners/MainBanners";
import MainProducts from "./components/mainProducts/MainProducts";

export default async function Home() {
  // const uri =
  //   "mongodb+srv://ahmednagdy:0xh9RxB7qqhIiLS5@cluster0.ahzi82r.mongodb.net/?retryWrites=true&w=majority";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 ">
      <MainBanners />
      <EntryPoints />
      <MainProducts />
    </main>
  );
}
