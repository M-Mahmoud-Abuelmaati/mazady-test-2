import Profile from "@/components/pages/Profile";
import QrCode from "@/components/pages/Profile/QrCode";
import Products from "@/components/pages/Profile/Products";

// It's suppose to be another page but it's going to be loaded by default so I made it in home.
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-between gap-6 py-12 px-4 sm:px-10 lg:px-[84px]">
      <div className="flex flex-col gap-6 md:w-4/12">
        <Profile />
        <QrCode />
      </div>
      <div className="md:w-8/12">
        <Products />
      </div>
    </main>
  );
}
