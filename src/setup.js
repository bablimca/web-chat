"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom"); // For React 17
// var ReactDOM = require("react-dom/client"); //For React 18

var App = require("./App.jsx"); // Our React Components

// buffer of DOM elements rendering React components

// utility to mount React nodes to target DOM elements
exports.LeadBoxWebChat = {
  unmountAll: function () {
    if (nodes.length === 0) {
      return;
    }
    nodes.forEach((node) => React.unmountComponentAtNode(node));
    nodes = [];
  },
  unmount: function (node) {
    React.unmountComponentAtNode(node);
  },
  /**
   * Setup, Creates, renders and returns a React element created
   * from component class using given props and rendered
   * into the targetNode.
   */
  setup: function (props, targetNode) {
    // For React 17

    const container = document.getElementById(targetNode);
    ReactDOM.render(<App.default {...props} />, container);

    // For React 18
    // var reactElement = React.createElement(component, props, null);
    // const container = document.getElementById(targetNode);
    // const root = ReactDOM.createRoot(container);
    // return root.render(reactElement);
  },
};
