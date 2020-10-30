# Flow

> Flow is a static type checker for JavaScript

https://github.com/facebook/flow

https://flow.org/en/docs/install/

```sh
$ yarn add --dev @babel/core @babel/cli @babel/preset-flow

```

```json
//.babelrc 
{
  "presets": ["@babel/preset-flow"]
}
```

```sh
$ yarn run babel src/ -d lib/

```

```json
// package.json
{
  "name": "my-project",
  "main": "lib/index.js",
  "scripts": {
    "build": "babel src/ -d lib/",
    "prepublish": "yarn run build"
  }
}

```

```sh
# local project
$ yarn add --dev flow-bin

# init
$ yarn run flow init 

$ yarn run flow

```

https://flow.org/en/docs/usage/

```js
// @flow


/* @flow */
```


## React Components

https://flow.org/en/docs/react/components/

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };

  render() {
    return <div>{this.props.bar}</div>;
  }
}

```

```jsx
import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

class MyComponent extends React.Component<Props> {
  render() {
    this.props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

    return <div>{this.props.bar}</div>;
  }
}

<MyComponent foo={42} />;

```


## FlowType

https://flow.org/en/docs/react/types/


https://www.saltycrane.com/cheat-sheets/flow-type/v0.55.0/

https://www.saltycrane.com/cheat-sheets/flow-type/latest/

