# React Memo Component

React memorization with render children pattern.

## Install

```bash
npm install --save react-memo-component
```

## Usage

```tsx
import Memo from "react-memo-component";
// import { Memo } from "react-memo-component"; // or

<Memo
  deps={[dep1, dep2, ...]}
  render={([dep1, dep2, ...]) => <div>...</div>}
/>
```

## Props

- deps?: any
  > Any deps of the component, common format is an array of items.
- compare?: (prevDeps, nextDeps) => boolean
  > Function used to compare the deps. If snapshots of deps are different, rerender will be triggered.
  > By default, shallow-equal algorithm will be used if `compare` is not specified.
- render?: (deps) => ReactElement
- children?: (deps) => ReactElement

## Advanced Usage

### Use hooks inside render

You can use hooks inside the render function (if your lint allows), which allows you to further optimize your render structure.

## License

MIT
