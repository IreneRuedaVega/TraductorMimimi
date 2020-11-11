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
        <h2>Traductor MIMIMI</h2>
        <form>
          <textarea onChange={this.handleText}></textarea>
        </form>
      </div>
    );
  }
}

export default TextInput;
