import { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledCommentButton,
  StyledCommentInput,
  StyledCommentList,
} from "./CommentsSection.styled.ts";

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
    if (newComment.text.trim() === "") {
      return;
    }
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
      <StyledCommentInput
        type="text"
        value={newComment.text}
        onChange={(e) => setNewComment({ text: e.target.value })}
        placeholder="Add a comment"
      />
      <StyledCommentButton onClick={handleAddComment}>
        Add Comment
      </StyledCommentButton>

      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <StyledCommentList key={index}>- {comment.text}</StyledCommentList>
          ))
        ) : (
          <li>No comments available.</li>
        )}
      </ul>
    </div>
  );
}

export default CommentsSection;
