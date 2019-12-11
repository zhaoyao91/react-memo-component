import { FC, memo, ReactElement } from "react";
import shallowEqual from "shallowequal";

type Deps = any;

export type Props = {
  deps?: Deps;
  compare?: (prevDeps: any, nextDeps: any) => boolean;
  render?: (deps: Deps) => ReactElement | null;
  children?: (deps: Deps) => ReactElement | null;
};

const compareProps = (prevProps: Props, nextProps: Props) => {
  const compareDeps = nextProps.compare || shallowEqual;
  return compareDeps(prevProps.deps, nextProps.deps);
};

const Memo: FC<Props> = memo(({ deps, render, children }) => {
  if (!render) {
    render = children;
  }

  if (!render) {
    throw TypeError(
      "At least one of `render` or `children` prop should be specified"
    );
  }

  return render(deps);
}, compareProps);

export default Memo;
