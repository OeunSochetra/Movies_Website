"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { createContext, useState } from "react";
import { thumbs } from "@/constant";

// export const metadata = {
//   title: "Slik Road media",
//   description: "Slik Road media",
// };

interface Thumb {
  title: string;
  imgUrl: string;
}

export const Mycontext = createContext<any>(null);

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

  const [searchTerm, setSearchTerm] = useState("");

  const filteredThumbs = thumbs.filter((thumb: Thumb) =>
    thumb.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <html lang="en">
      <body>
        <Mycontext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            filteredThumbs,
            handleSearchTermChange,
          }}
        >
          {hideNavbar()}
          {/* {pathname !== "/login" && pathname !== "/signup" && <Navbar></Navbar>} */}

          <main>{children}</main>
          <Footer></Footer>
        </Mycontext.Provider>
        {/* {hideNavbar()}
        

        <main>{children}</main>
        <Footer></Footer> */}
      </body>
    </html>
  );
}
