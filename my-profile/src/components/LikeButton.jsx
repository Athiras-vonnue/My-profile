import { useState } from "react";

function LikeButton() {
  // State: this button remembers its own number of likes
  const [likes, setLikes] = useState(0);

  return (
    <button className="like-btn" onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  );
}

export default LikeButton;
