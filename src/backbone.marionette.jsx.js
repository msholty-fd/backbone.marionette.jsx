const ReactDOM = require('react-dom');

function jsxView(parent) {
  Object.assign(parent.prototype, {
    attachElContent: function attachJsxContent(jsx) {
      ReactDOM.render(jsx, this.el);
    },
  });
}

module.exports = { jsxView };