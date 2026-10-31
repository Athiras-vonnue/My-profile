import { useEffect, useState } from "react";
import "./modern.css";

// ---------- Small reusable pieces (each one is a React component) ----------

// useState + useEffect: types out each role, one letter at a time
function Typing({ words }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);        // which word
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDeleting(false); setI(i + 1); }
        }
      },
      deleting ? 40 : 90
    );
    return () => clearTimeout(t); // cleanup so timers never pile up
  }, [text, deleting, i, words]);

  return <span className="m-typing">{text}<i>|</i></span>;
}

// useEffect again: count a number up from 0 when the page loads
function Counter({ to, decimals = 0 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let frame, start;
    const tick = (now) => {
      start ??= now;
      const p = Math.min((now - start) / 1200, 1);
      setN(to * p);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);
  return n.toFixed(decimals);
}

// Props: title + children let one component wrap any content
function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="m-section">
      <p className="m-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Skills with filter tabs: state decides which group to show
function Skills({ groups }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...groups.map((g) => g.group)];
  const shown = active === "All" ? groups : groups.filter((g) => g.group === active);
  return (
    <>
      <div className="m-tabs">
        {tabs.map((t) => (
          <button key={t} className={t === active ? "on" : ""} onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      <div className="m-chips">
        {shown.flatMap((g) => g.items).map((s) => <span key={s} className="m-chip">{s}</span>)}
      </div>
    </>
  );
}

const initials = (name) => name.split(" ").map((w) => w[0]).join("");

// ---------- The page ----------
export default function ModernTemplate({ data: d }) {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "m-page dark" : "m-page"}>
      <header className="m-nav">
        <a href="#top" className="m-logo">{initials(d.name)}<b>.</b></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="m-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="m-hero">
        <div className="m-blob b1" /><div className="m-blob b2" />
        <div className="m-hero-text">
          <p className="m-hello">👋 Hi, I'm</p>
          <h1>{d.name}</h1>
          <p className="m-role">{d.title} · <Typing words={d.roles} /></p>
          <p className="m-lead">
            I started as a teaching assistant helping students learn React. Today I build
            production apps for global clients. You can do this too. 🚀
          </p>
          <div className="m-cta">
            <a className="m-btn primary" href="#projects">See my work</a>
            <a className="m-btn" href={`mailto:${d.email}`}>Get in touch</a>
          </div>
        </div>
        <div className="m-avatar"><span>{initials(d.name)}</span></div>
      </section>

      {/* STATS */}
      <div className="m-stats">
        {d.stats.map((s) => (
          <div key={s.label} className="m-stat">
            <strong><Counter to={s.value} decimals={s.decimals} />{s.suffix}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <Section id="about" eyebrow="About me" title="A little about my journey">
        <p className="m-about">{d.summary}</p>
      </Section>

      <Section id="skills" eyebrow="Toolbox" title="Skills I use every day">
        <Skills groups={d.skills} />
      </Section>

      <Section id="experience" eyebrow="Career" title="Where I've worked">
        <div className="m-timeline">
          {d.experience.map((x) => (
            <div key={x.company} className="m-tl-item">
              <span className="m-dot" />
              <div className="m-card">
                <span className="m-badge">{x.period}</span>
                <h3>{x.role}</h3>
                <p className="m-muted">{x.company} · {x.location}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Portfolio" title="Things I've built">
        <div className="m-grid">
          {d.projects.map((p, i) => (
            <article key={p.name} className="m-card m-project">
              <div className="m-num">0{i + 1}</div>
              <h3>{p.name}</h3>
              <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Learning" title="Education & certifications">
        <div className="m-grid two">
          <div>
            {d.education.map((e) => (
              <div key={e.school} className="m-card m-mini">
                <span className="m-badge">{e.period}</span>
                <h4>{e.degree}</h4>
                <p className="m-muted">{e.school}{e.detail ? ` · ${e.detail}` : ""}</p>
              </div>
            ))}
          </div>
          <div>
            {d.certifications.map((c) => (
              <div key={c.name} className="m-card m-mini">
                <span className="m-badge">🏅 {c.period}</span>
                <h4>{c.name}</h4>
                <p className="m-muted">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's connect">
        <div className="m-contact">
          <a href={`mailto:${d.email}`}>✉️ {d.email}</a>
          {d.phone && <a href={`tel:${d.phone}`}>📞 {d.phone}</a>}
          <a href={`https://${d.github}`} target="_blank" rel="noreferrer">💻 {d.github}</a>
          <a href={`https://${d.linkedin}`} target="_blank" rel="noreferrer">🔗 {d.linkedin}</a>
        </div>
      </Section>

      <footer className="m-footer">
        <p>✨ Built with React. Your turn: swap in <b>your</b> details in <code>resume.js</code> and make it yours.</p>
        <small>© {new Date().getFullYear()} {d.name}</small>
      </footer>
    </div>
  );
}
