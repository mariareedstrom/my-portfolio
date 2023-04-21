import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="lg:ml-8 lg:mr-8 ml-4 mr-4">
      <Main />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
