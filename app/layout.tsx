import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Pagination from "@/components/Pagination";


export const metadata = {
  title: "Slik Road media",
  description: "Slik Road media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Pagination></Pagination>
        <Footer></Footer>
      </body>
    </html>
  );
}
