// One card. It gets its data through props.
function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="icon">{props.icon}</div>
      <h3>{props.name}</h3>
      <p>{props.level}</p>
      {/* The bar's width comes from the percent prop */}
      <div className="bar">
        <div className="bar-fill" style={{ width: props.percent + "%" }}></div>
      </div>
      <div className="actions">
        <button className="small-btn" onClick={props.onEdit}>✏️ Edit</button>
        <button className="small-btn" onClick={props.onDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default SkillCard;
