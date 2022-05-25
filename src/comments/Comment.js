import UserInfo from "./UserInfo";

function Comment(props) {
    console.log(props)
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

export default Comment;