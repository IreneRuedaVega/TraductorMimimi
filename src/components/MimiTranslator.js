import React from "react";
import Twitter from "../images/twitter_logo.png";
import Avatar from "../images/avatar.png";
import Comment from "../images/comment.png";
import Like from "../images/like.png";
import Info from "../images/info.png";
import "../stylesheets/MimiTranslator.scss";

class MiMiTranslator extends React.Component {
  render() {
    return (
      <div className="page__translator">
        <div className="twitterHeader">
          <img src={Avatar} alt="Avatar del twitter @kientapreguntao" />
          <div className="twitterHeader__user">
            <p className="twitterHeader__user--name">
              <strong>Mimimiguel</strong>
            </p>
            <span className="twitterHeader__user--count">&#64;mimimiguel</span>
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
        <div className="twitterTime">
          <p>1:56 AM &#8226;</p>
          <p className="twitterTime__date">Aug 3, 2020</p>
          <img
            className="twitterTime__img"
            src={Info}
            alt="Logo de información"
          />
        </div>
        <div className="twitterInteractions">
          <img
            className="twitterInteractions__img"
            src={Like}
            alt="Logo de los likes de Twitter"
          />
          <p className="twitterInteractions__likes">2.1K</p>
          <img
            className="twitterInteractions__img"
            src={Comment}
            alt="Logo de los comentarios de Twitter"
          />
          <p className="twitterInteractions__commets">1.9K</p>
        </div>
      </div>
    );
  }
}

export default MiMiTranslator;
