import { useState, useEffect } from "react";
import axios from "axios";

type CommentsSectionProps = {
  restaurantId: string;
};

function CommentsSection({ restaurantId }: CommentsSectionProps) {
  const [comments, setComments] = useState<{ text: string }[]>([]);
  const [newComment, setNewComment] = useState<{ text: string }>({ text: "" });

  useEffect(() => {
    axios
      .get(`/api/restaurants/${restaurantId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the comments!", error);
      });
  }, [restaurantId]);

  const handleAddComment = () => {
    axios
      .post(`/api/restaurants/${restaurantId}/comments`, newComment)
      .then((response) => {
        setComments(response.data.comments);
        setNewComment({ text: "" });
      })
      .catch((error) => {
        console.error("There was an error adding the comment!", error);
      });
  };

  return (
    <div>
      <h3>Comments</h3>
      <input
        type="text"
        value={newComment.text}
        onChange={(e) => setNewComment({ text: e.target.value })}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => <li key={index}>{comment.text}</li>)
        ) : (
          <li>No comments available.</li>
        )}
      </ul>
    </div>
  );
}

export default CommentsSection;
