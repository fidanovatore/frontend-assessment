import { useState } from "react";
import CommentCard from "./CommentCard";
import { User1, User2, User3, User4 } from "./images";
import WriteComment from "./WriteComment";

function Comment() {
  const [comment, setComment] = useState(false);
  const hitComment = (value) => {
    setComment(value);
  };
  return (
    <section className="comment-section">
      <h1 className="black-text bold-font lg-text">Comment</h1>

      {/* comment card  */}
      <CommentCard
        Title="Maria"
        Description="I was very glad to have you after such a long time. Can you plan a
          meetup? Maybe this weekend?"
        image={User1}
      />

      <CommentCard
        Title="Alex Benjamin"
        Description="Home sweet home! I’m glad you are back. It’s been two year and miss
            the football matches we have together. A lot has been changed since
            you left. Let’s meet at the ground tomorrow evening?"
        image={User2}
      />

      <CommentCard
        Title="Tania"
        Description="Hey bud, welcome back to home. It’s so long to see you back again.
            Would love to hear the travelling stories of yours. Your or my
            place?"
        image={User3}
      />

      {comment ? (
        <CommentCard
          Title="John Doe"
          Description="Thank you all"
          image={User4}
          comment={comment}
          hitComment={hitComment}
        />
      ) : (
        ""
      )}

      {/* <!-- write comment --> */}
      <WriteComment hitComment={hitComment} />
    </section>
  );
}
export default Comment;
