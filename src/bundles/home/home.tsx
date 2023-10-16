import About from "./about";
import Career from "./career";
import Education from "./education";
import Hero from "./hero";
import css from "./home.module.scss";
import Projects from "./projects";
import Section from "./section";
import Skills from "./skills";

export default function Home() {
  return (
    <main className={css.root}>
      <Hero />
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="career">
        <Career />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
    </main>
  );
}
