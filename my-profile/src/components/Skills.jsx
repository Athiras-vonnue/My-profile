import { useState } from "react";
import SkillCard from "./SkillCard.jsx";

function Skills(props) {
  // State: what is typed in the form
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Learning");
  const [percent, setPercent] = useState(50);
  // State: id of the skill being edited (null = we are adding a new one)
  const [editingId, setEditingId] = useState(null);
  // State: is the popup form open?
  const [showForm, setShowForm] = useState(false);

  function clearForm() {
    setName("");
    setLevel("Learning");
    setPercent(50);
    setEditingId(null);
    setShowForm(false);
  }

  // Edit button: copy the skill's details into the form
  function startEdit(skill) {
    setName(skill.name);
    setLevel(skill.level);
    setPercent(skill.percent);
    setEditingId(skill.id);
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (name.trim() === "") return;

    const data = { name: name.trim(), level: level, percent: Number(percent) };
    if (editingId === null) {
      props.onAdd(data);
    } else {
      props.onEdit(editingId, data);
    }
    clearForm();
  }

  function handleDelete(id) {
    props.onDelete(id);
    if (editingId === id) clearForm(); // don't keep editing a deleted skill
  }

  return (
    <section>
      <div className="section-head">
        <h2>🛠️ My skills</h2>
        <button className="main-btn" onClick={() => setShowForm(true)}>
          ➕ Add skill
        </button>
      </div>
      <div className="skill-grid">
        {/* map(): one SkillCard for each skill in the list */}
        {props.list.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            percent={skill.percent}
            onEdit={() => startEdit(skill)}
            onDelete={() => handleDelete(skill.id)}
          />
        ))}
      </div>

      {/* && : the popup shows only when showForm is true */}
      {showForm && (
        <div className="modal-bg" onClick={clearForm}>
      <form className="form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h3>{editingId === null ? "➕ Add a skill" : "✏️ Edit skill"}</h3>
        <input
          placeholder="Skill name (e.g. Python)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>New</option>
          <option>Learning</option>
          <option>Good</option>
          <option>Expert</option>
        </select>
        <label>
          How well do you know it? {percent}%
          <input
            type="range"
            min="0"
            max="100"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </label>
        <div className="actions">
          <button className="main-btn" type="submit">
            {editingId === null ? "Add skill" : "Save changes"}
          </button>
          {editingId !== null && (
            <button type="button" onClick={clearForm}>Cancel</button>
          )}
        </div>
      </form>
        </div>
      )}
    </section>
  );
}

export default Skills;
