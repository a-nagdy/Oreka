import EntryPoints from "./components/entrypoints/EntryPoints";
import MainBanners from "./components/mainBanners/MainBanners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 ">
      <MainBanners />
      <EntryPoints />
    </main>
  );
}
