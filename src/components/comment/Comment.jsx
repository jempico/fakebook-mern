import "./comment.css"

export default function Comment({comment, user}){
    console.log(user);

    return (
        <li className="comment">
            <img src={user.profilePicture} alt="" className="commentProfileImg" />
            <div className="commentDesc">
                <span className="commentAuthor">{user.username}</span>
                <span className="commentText">{comment.desc}</span>
            </div>
        </li>
    )
}