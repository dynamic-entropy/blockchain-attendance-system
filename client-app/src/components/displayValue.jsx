import React from "react";

class DisplayValue extends React.PureComponent {
  render() {
    return (
      <h1>
        {this.props.label} : {this.props.data}
      </h1>
    );
  }
}

export default DisplayValue;
