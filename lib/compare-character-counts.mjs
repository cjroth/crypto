import getTopCharacters from './get-top-characters'

export default (a, b, n = 1, ignore = []) => {
	const ac = getTopCharacters(a, n, ignore)
	const bc = getTopCharacters(b, n, ignore)
	return ac.map((c, i) => c == bc[i]).reduce((acc, v) => acc += v, 0)
}
