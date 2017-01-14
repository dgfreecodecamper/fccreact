import React, { Component } from 'react';
import marked from 'marked';

import './css/App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      input: 'enter the markup here which will be converted into the HTML and displayed in the preview pane to the right.',
      output: '',
      err: ''
    };
    this.update = this.update.bind(this);
  }
  
  update(e){
    let raw = e.target.value;
    
    this.setState({
      output: marked(raw)
    });
    
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Markdown preview application</h1>
        </div>
        <div className="container">
          <div className="pane">
            <textarea onChange={this.update} defaultValue="bla bla"></textarea>
          </div>
          <div className="pane">
            <pre dangerouslySetInnerHTML={{ __html: this.state.output }}></pre>
          </div>
        </div>
        <div className="footer">
          <h3>Convienent footer information here</h3>
          <p>such as the address and contact information</p>
        </div>
      </div>
    );
  }
}

export default App;


