import { Send } from "./images";

function WriteComment({ hitComment, reply, hitReplyComment }) {
  return (
    <div className={reply ? "comment-card extra-css" : "comment-card"}>
      <div className="write-comment">
        <input
          disabled
          className="black-text md-font md-text"
          type="text"
          placeholder="Write your comment"
        />
        <img
          className="cursor-pointer"
          src={Send}
          alt="send"
          onClick={
            !reply ? () => hitComment(true) : () => hitReplyComment(true)
          }
        />
      </div>
    </div>
  );
}
export default WriteComment;
