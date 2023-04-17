# Auto Hide Hook   
![npm](https://img.shields.io/npm/dw/auto-hide-hook)

## Description

This is a React hook that will hide mobile menu dropdown bar if you click, touch or scroll outside of the dropdown menu.

## Usage

To use this hook you need to set a useRef to the element you want use as a reference and a setShow function to set the state of the element you want to hide. The hook will return a function that will hide the element when you click, touch or scroll outside of the element.

## Install npm or yarn

```
npm i auto-hide-hook
```
or
```
yarn add auto-hide-hook
```

## Import

```
import useAutoHide from 'auto-hide-hook';
```

## Parameters

```
useAutoHide(ref, setShow);
```

## Example

```js
import React, { useRef, useState } from 'react';
import useAutoHide from 'auto-hide-hook';

const App = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  
  useAutoHide(ref, show, setShow);

  return (
    <div ref={ref}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <div className={show ? 'show' : 'hide'}>Hello World</div>
    </div>
  );
};

export default App;
```

## CSS

```css
.hide {
  display: none;
}

.show {
  display: block;
}
```

## License

[ISC](https://opensource.org/licenses/ISC)

## Author

Raul Jimenez

## Website

[RaulWebDev.com](https://raulwebdev.com)
