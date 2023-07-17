"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// export const metadata = {
//   title: "Slik Road media",
//   description: "Slik Road media",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  function hideNavbar() {
    if (pathname !== "/login" && pathname !== "/signup") {
      return <Navbar />;
    }
  }

  return (
    <html lang="en">
      <body>
        {hideNavbar()}
        {/* {pathname !== "/login" && pathname !== "/signup" && <Navbar></Navbar>} */}

        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
