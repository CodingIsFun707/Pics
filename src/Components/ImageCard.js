import React, { useState } from "react";
import ImageList from "./ImageList";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current?this.imageRef.current.clientHeight:250;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  render(props) {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
          ref={this.imageRef}
        />
      </div>
    );
  }
}
export default ImageCard;