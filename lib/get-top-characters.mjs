export default (string, n, ignore = [' ']) => {
	return Array.from(
		string
			.split('')
			.map(i => i)
			.filter(i => ignore.includes(i) === false)
			.reduce((map, value) => {
				if (map.has(value)) {
					map.set(value, map.get(value) + 1)
				} else {
					map.set(value, 1)
				}
				return map
			}, new Map())
			.entries()
	)
		.sort(([ka, va], [kb, vb]) => vb - va)
		.map(([k, v]) => k)
		.slice(0, n)
}
