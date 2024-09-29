// import { Footer, Sidebar, TopMenu } from "@/components";

import { Navbar } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <Navbar />
      {/* <TopMenu />
      <Sidebar /> */}
      <div className="px-0 sm:px-10">{children}</div>
      {/* <Footer /> */}
    </main>
  );
}
