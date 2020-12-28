import React from "react";
import Twitter from "../images/twitter_logo.png";
import Avatar from "../images/avatar.png";
import Comment from "../images/comment.png";
import Like from "../images/like.png";
import Info from "../images/info.png";

class MiMiTranslator extends React.Component {
  render() {
    return (
      <div className="page__translator">
        <div className="twitterHeader">
          <img src={Avatar} alt="Avatar del twitter @kientapreguntao" />
          <div className="twitterHeader__user">
            <p className="twitterHeader__user--name">
              <strong>Kien Tapreguntao</strong>
            </p>
            <span className="twitterHeader__user--count">
              &#64;kientapreguntao
            </span>
          </div>
          <img src={Twitter} alt="Logo de Twitter" />
        </div>
        <div className="twitterMain">
          <p className="twitterMain__answer">
            En respuesta a{" "}
            <span className="twitterMain__answer--user">&#64;Irenelandia_</span>
          </p>
          <p className="twitterMain__text">{this.props.displayText}</p>
        </div>
        <div className="twittertime">
          <p>1:56 AM &#8226;</p>
          <p className="twittertime__date">Aug 3, 2020</p>
          <img
            className="twittertime__img"
            src={Info}
            alt="Logo de información"
          />
        </div>
        <div className="twitterinteractions">
          <img
            className="twitterinteractions__img"
            src={Like}
            alt="Logo de los likes de Twitter"
          />
          <p className="twitterinteractions__likes">2.1K</p>
          <img
            className="twitterinteractions__img"
            src={Comment}
            alt="Logo de los comentarios de Twitter"
          />
          <p className="twitterinteractions__commets">1.9K</p>
        </div>
      </div>
    );
  }
}

export default MiMiTranslator;
