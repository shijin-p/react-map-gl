// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {PropTypes, Component} from 'react';
import ViewportMercator from 'viewport-mercator-project';

const PROP_TYPES = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  redraw: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
  // TODO: style
};

export default class HTMLOverlay extends Component {

  render() {
    const {width, height, isDragging} = this.props;
    const style = {
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      top: 0,
      width,
      height,
      ...this.props.style
    };
    const mercator = ViewportMercator(this.props);
    const {project, unproject} = mercator;

    return (
      <div ref="overlay" style={ style }>
        { this.props.redraw({width, height, project, unproject, isDragging}) }
      </div>
    );
  }
}

HTMLOverlay.propTypes = PROP_TYPES;
