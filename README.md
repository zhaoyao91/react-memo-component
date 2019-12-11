# React Memo Component

## Install

```bash
npm install --save react-memo-component
```

## Usage

```tsx
import Memo from "react-memo-component";

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

## License

MIT
