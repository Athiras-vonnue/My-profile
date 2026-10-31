import "./sidebar.css";

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function Section({ title, children }) {
  return (
    <section className="sb-section">
      <h2 className="sb-heading">{title}</h2>
      {children}
    </section>
  );
}

export default function SidebarTemplate({ data }) {
  const d = data;
  return (
    <div className="sb-page">
      <aside className="sb-side">
        <div className="sb-avatar">{initials(d.name)}</div>
        <h1 className="sb-name">{d.name}</h1>
        <p className="sb-title">{d.title}</p>

        <div className="sb-block">
          <h3>Contact</h3>
          <ul className="sb-contact">
            <li><a href={`mailto:${d.email}`}>{d.email}</a></li>
            {d.phone && <li><a href={`tel:${d.phone}`}>{d.phone}</a></li>}
            <li><a href={`https://${d.github}`} target="_blank" rel="noreferrer">{d.github}</a></li>
            <li><a href={`https://${d.linkedin}`} target="_blank" rel="noreferrer">{d.linkedin}</a></li>
            <li>{d.location}</li>
          </ul>
        </div>

        <div className="sb-block">
          <h3>Skills</h3>
          {d.skills.map((g) => (
            <div key={g.group} className="sb-skillgroup">
              <p>{g.group}</p>
              <div className="sb-chips">
                {g.items.map((s) => <span key={s} className="sb-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="sb-block">
          <h3>Education</h3>
          {d.education.map((e) => (
            <div key={e.school} className="sb-edu">
              <strong>{e.degree}</strong>
              <span>{e.school}</span>
              <span>{e.period}{e.detail ? ` · ${e.detail}` : ""}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="sb-main">
        <Section title="Professional Summary">
          <p className="sb-summary">{d.summary}</p>
        </Section>

        <Section title="Professional Experience">
          {d.experience.map((x) => (
            <article key={x.company} className="sb-item">
              <div className="sb-row">
                <h3>{x.role}</h3>
                <span className="sb-period">{x.period}</span>
              </div>
              <p className="sb-sub">{x.company} · {x.location}</p>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </Section>

        <Section title="Key Projects">
          {d.projects.map((p) => (
            <article key={p.name} className="sb-item">
              <h3>{p.name}</h3>
              <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </Section>

        <Section title="Certifications">
          {d.certifications.map((c) => (
            <article key={c.name} className="sb-item sb-cert">
              <div className="sb-row">
                <h3>{c.name}</h3>
                <span className="sb-period">{c.period}</span>
              </div>
              <p className="sb-sub">{c.issuer} · {c.detail}</p>
            </article>
          ))}
        </Section>
      </main>
    </div>
  );
}
