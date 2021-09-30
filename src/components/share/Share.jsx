import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share(){
  return(
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
             <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input className="shareInput" placeholder="What's in your mind?" />
          </div>
          <hr className="shareHr"></hr>
          <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Media</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
          </div>

        </div>
    </div>
   )
  }