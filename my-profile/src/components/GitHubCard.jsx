import { useState, useEffect } from "react";

// API call: gets your photo and details from GitHub
function GitHubCard(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/" + props.username)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => setError("Couldn't load GitHub profile. Check the username in data.js."));
  }, [props.username]); // runs again only if the username changes

  if (error) return <p className="note">{error}</p>;
  if (!user) return <p className="note">Loading GitHub profile...</p>;

  return (
    <section className="github-card">
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h3>{user.name || user.login}</h3>
        <p>{user.public_repos} public repos · {user.followers} followers</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          See my GitHub
        </a>
      </div>
    </section>
  );
}

export default GitHubCard;
