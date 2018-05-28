# backbone.marionette.jsx
A *very* lightweight (326 bytes gzipped!) library to use JSX in your backbone marionette views.

This library assumes you already have `react` and `react-dom` installed.

This library was intended to be used with Marionette 3.x.

## Installation

`npm install --save backbone.marionette.jsx`
or
`yarn add backbone.marionette.jsx`

## Usage

```js
import Mn from 'backbone.marionette';
import { jsxView } from 'backbone.marionette.jsx'

@jsxView
export default class ViewUsingJSX extends Mn.View {
  template() {
    return (
      <h1>Hey! JSX in my Marionette!</h1>
    )
  }
}
```