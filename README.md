# re-memo

>

[![NPM](https://img.shields.io/npm/v/re-memo.svg)](https://www.npmjs.com/package/re-memo)

## Install

```bash
npm install --save re-memo
```

## Usage

```tsx
import Memo from "re-memo";

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
