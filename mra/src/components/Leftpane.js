import React, { Component } from 'react';


class Leftpane extends Component {
  render() {
    return (
      <div className="pane">
        <textarea onChange={this.props} value={this.props.defaultValue}></textarea>
      </div>
    );
  }
}

export default Leftpane;
