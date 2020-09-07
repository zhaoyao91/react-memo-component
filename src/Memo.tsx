import { memo, ReactElement } from 'react';
import shallowEqual from 'shallowequal';

export type Props<TDeps> = {
  deps?: TDeps;
  compare?: (prevDeps: TDeps, nextDeps: TDeps) => boolean;
  render?: (deps: TDeps) => ReactElement | null;
  children?: (deps: TDeps) => ReactElement | null;
};

const compareProps = <TDeps extends any>(
  prevProps: Props<TDeps>,
  nextProps: Props<TDeps>
) => {
  // edge case: if deps' are not specified, it should be treated as no memorization as `useMemo`
  if (!('deps' in prevProps) && !('deps' in nextProps)) {
    return false;
  }

  const compareDeps = nextProps.compare ?? shallowEqual;
  return compareDeps(prevProps.deps, nextProps.deps);
};

type MemoType = <TDeps>(props: Props<TDeps>) => ReactElement | null;

const Memo: MemoType = memo(function Memo({ deps, render, children }) {
  render = render ?? children;

  if (!render) {
    throw TypeError(
      'At least one of `render` or `children` prop should be specified'
    );
  }

  return render(deps!);
}, compareProps);

export default Memo;
