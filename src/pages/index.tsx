import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Banner from "@/components/banner";
import Menu from "@/components/menu";
import List from "@/components/list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 px-4 sm:px-6 lg:px-8">
        <Navigation />
        <Banner />
        <Menu />
        <List />
      </div>
    </main>
  );
}
