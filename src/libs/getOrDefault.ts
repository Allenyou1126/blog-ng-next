export default function getOrDefault<T>(a: T, def: T) {
	if (a === undefined) {
		return def;
	}
	return a;
}
