const secret = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'

const ref = `
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.`

const getTopCharacters = (string, n, ignore = [' ']) => {
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

const compareCharCounts = (a, b, n = 1, ignore = []) => {
	const ac = getTopCharacters(a, n, ignore)
	const bc = getTopCharacters(b, n, ignore)
	return ac.map((c, i) => c == bc[i]).reduce((acc, v) => acc += v, 0)
}

let key

for (let z = 0; z < Math.pow(16, 2); z++) {
	const possible = secret
		.match(/.{2}/g)
		.map(i => parseInt(i, 16))
		.map((char, i) => char ^ z)
		.map(i => String.fromCharCode(i))
		.join('')
	const hit = compareCharCounts(possible, ref)
	if (hit) {
		key = String.fromCharCode(z)
		console.log('key', key, 'secret', possible)
		break
	}
}
