import "./globals.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

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
        {children}
      </body>
    </html>
  );
}
