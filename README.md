# Auto Hide Hook

## Description

This is a React hook that will hide mobile menu bar if you touch outside of the menu bar or scroll down.

## Usage

To use this hook you need to set a useRef to the element you want to hide the menu bar.
Then you need to pass the ref to the hook and the state of the menu bar.

## Install

```
npm i auto-hide-hook
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
import useAutoHide from 'use-auto-hide';

const App = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useAutoHide(ref, setShow);

  return (
    <div ref={ref}>
      <div className={show ? 'show' : 'hide'}>Hello World</div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default App;
```

## License   
MIT

## Author   
Raul Jimenez

## Website  
[RaulWebDev.com](https://raulwebdev.com)
