import LikeButton from "./LikeButton.jsx";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="icon">{props.icon}</div>
      <div className="project-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="actions">
          <button className="small-btn" onClick={props.onEdit}>✏️ Edit</button>
          <button className="small-btn" onClick={props.onDelete}>🗑️ Delete</button>
        </div>
      </div>
      <LikeButton />
    </div>
  );
}

export default ProjectCard;
