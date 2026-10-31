import { useState } from 'react';
import { resume } from './data/resume.js';
import { templates } from './templates/index.js';

export default function App() {
  const [id, setId] = useState(templates[0].id);
  const Active = templates.find((t) => t.id === id).component;

  return (
    <>
      {templates.length > 1 && (
        <nav className='switcher'>
          {templates.map((t) => (
            <button
              key={t.id}
              className={t.id === id ? 'on' : ''}
              onClick={() => setId(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      )}
      <Active data={resume} />
    </>
  );
}
