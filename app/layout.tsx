import "./globals.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export const metadata = {
  title: "Maria Reedstrom",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#ecf0f3]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
