import { useState } from "react";
import { Like, Unlike, User4 } from "./images";
import WriteComment from "./WriteComment";

function CommentCard({ Title, Description, image, comment, hitComment }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [reply, setReply] = useState(false);
  const [replyComment, setReplyComment] = useState(false);

  const hitLike = () => {
    setLike((prev) => !prev);
    setCount((prev) => !prev);
  };

  const hitReply = () => {
    setReply((prev) => !prev);
  };

  const hitReplyComment = (value) => {
    setReplyComment(value);
  };

  return (
    <div className="comment-card">
      <div className="comment-img">
        <img src={image} alt="user1" />
      </div>
      <div className="comment-text">
        <h3 className="black-text md-text md-font">
          {Title}
          {comment ? <span>ME</span> : ""}
        </h3>
        <p className="grey-text md-text light-font">{Description}</p>
        <div className="comment-reaction">
          <div className="comment-like">
            {like ? (
              <img
                className="cursor-pointer like"
                src={Like}
                alt="like"
                onClick={hitLike}
              />
            ) : (
              <img
                className="cursor-pointer unlike"
                src={Unlike}
                alt="unlike"
                onClick={hitLike}
              />
            )}

            <span className="grey-text sm-text light-font">{like ? 1 : 0}</span>
          </div>
          {comment ? (
            <div className="comment-reply" onClick={() => hitComment(false)}>
              <h5 className="red-text md-font md-text cursor-pointer">
                Remove
              </h5>
            </div>
          ) : (
            <div className="comment-reply" onClick={() => hitReply(true)}>
              <h5 className="blue-text md-font md-text cursor-pointer">
                Reply
              </h5>
            </div>
          )}
        </div>
        {replyComment ? (
          <CommentCard
            Title="John Doe"
            Description="Old rivalry! Consider me in ;-)"
            image={User4}
            comment={comment}
            hitComment={hitComment}
            reply={reply}
          />
        ) : (
          ""
        )}
        {reply ? (
          <WriteComment reply={reply} hitReplyComment={hitReplyComment} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default CommentCard;
