import { memo, ReactElement } from "react";
import shallowEqual from "shallowequal";

export interface Props<DepProps>{
	deps?: DepProps;
	compare?: (prevDeps: DepProps, nextDeps: DepProps) => boolean;
	render?: (deps: DepProps) => ReactElement | null;
	children?: (deps: DepProps) => ReactElement | null;
};

function compareProps<T>(prevProps: Props<T>, nextProps: Props<T>) {
	const compareDeps = nextProps.compare || shallowEqual;
	return compareDeps(prevProps.deps!, nextProps.deps!);
};

type MemoType = <T>(props: Props<T>) => ReactElement | null;

export const Memo: MemoType = memo(MemoComp, compareProps);

function MemoComp<T>({ deps, render, children }:Props<T>){
	if (!render) {
		render = children;
	}

	if (!render) {
		throw TypeError(
			"At least one of `render` or `children` prop should be specified"
		);
	}

	return render(deps!);
}