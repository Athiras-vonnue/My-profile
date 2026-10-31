import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

function Projects(props) {
  // State: what is typed in the form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // State: id of the project being edited (null = we are adding a new one)
  const [editingId, setEditingId] = useState(null);
  // State: is the popup form open?
  const [showForm, setShowForm] = useState(false);

  function clearForm() {
    setTitle("");
    setDescription("");
    setEditingId(null);
    setShowForm(false);
  }

  // Edit button: copy the project's details into the form
  function startEdit(project) {
    setTitle(project.title);
    setDescription(project.description);
    setEditingId(project.id);
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (title.trim() === "") return;

    const data = { title: title.trim(), description: description.trim() };
    if (editingId === null) {
      props.onAdd(data);
    } else {
      props.onEdit(editingId, data);
    }
    clearForm();
  }

  function handleDelete(id) {
    props.onDelete(id);
    if (editingId === id) clearForm(); // don't keep editing a deleted project
  }

  return (
    <section>
      <div className="section-head">
        <h2>🚀 My projects</h2>
        <button className="main-btn" onClick={() => setShowForm(true)}>
          ➕ Add project
        </button>
      </div>
      {props.list.map((project) => (
        <ProjectCard
          key={project.id}
          icon={project.icon}
          title={project.title}
          description={project.description}
          onEdit={() => startEdit(project)}
          onDelete={() => handleDelete(project.id)}
        />
      ))}

      {/* && : the popup shows only when showForm is true */}
      {showForm && (
        <div className="modal-bg" onClick={clearForm}>
      <form className="form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h3>{editingId === null ? "➕ Add a project" : "✏️ Edit project"}</h3>
        <input
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="actions">
          <button className="main-btn" type="submit">
            {editingId === null ? "Add project" : "Save changes"}
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

export default Projects;
