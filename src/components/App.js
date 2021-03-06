import React from "react";
import "../stylesheets/App.scss";
import TextInput from "./TextInput";
import MiMiTranslator from "./MimiTranslator";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myText = "";
    this.translateText = this.translateText.bind(this);
  }

  translateText(traductor) {
    this.myText = traductor.replace(/[aeiou]/gi, "i");
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <div className="page">
          <Header />
          <TextInput getInformation={this.translateText} />
          <MiMiTranslator displayText={this.myText} />
        </div>
      </>
    );
  }
}

export default App;
