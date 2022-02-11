<body>
  <div id="app-root"></div>
  <div id="portal-root"></div> {/* create portal root */}
</body>


// ============================
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// portal root
const portalRoot = document.getElementById('portal-root');

export class Modal extends Component {
  render() {
    return (
      ReactDOM.createPortal(
        <>
          <h1>hello</h1>
          <div>{children}</div>
        </>,
        portalRoot
      )
    )
  }
}

export class PortalComponent extends Component {
  render() {
    return (
      <Modal>
        <h1>hello portal react</h1>
      </Modal>
    )
  }
}
