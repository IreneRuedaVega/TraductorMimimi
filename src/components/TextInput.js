import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
  }
  handleText(event) {
    const inputValue = event.target.value;
    this.props.getInformation(inputValue);
  }

  render() {
    return (
      <div>
        <form className="form">
          <textarea
            maxLength="280"
            className="form__text"
            onChange={this.handleText}
            placeholder="Expresa aquí tu opinión"
          ></textarea>
        </form>
      </div>
    );
  }
}

export default TextInput;
