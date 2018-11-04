export function pathConfig(child, url, relative) {
	const { props: { path: passedPath } } = child;
	const isBasePath = url === '/';
	const baseUrl = isBasePath ? '' : url;
	const path = relative ? baseUrl + passedPath : passedPath;

	return { path };
}