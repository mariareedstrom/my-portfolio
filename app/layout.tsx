import "./globals.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
      <body>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {children}
      </body>
    </html>
  );
}
