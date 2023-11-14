import { Suspense, lazy, ComponentType } from 'react';
import { Loading } from './Loading';

export function LazyWrapper<P = any, T = ComponentType<P>>(
	componentPromise: Promise<{ default: (props?: P) => T }>,
	componentFallback?: JSX.Element
) {
	return (props?: P) => {
		const Component = lazy(() => componentPromise.then());
		return (
			<Suspense fallback={componentFallback ?? <Loading />}>
				<Component {...props} />
			</Suspense>
		);
	};
}
