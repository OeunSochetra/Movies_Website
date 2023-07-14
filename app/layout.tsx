import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Mypage from "@/components/Mypage";



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
        <Mypage></Mypage>
        <Footer></Footer>
      </body>
    </html>
  );
}
