import compareCharacterCounts from './lib/compareCharacterCounts'

const secret = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'

const ref = `
The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.`

let key

for (let z = 0; z < Math.pow(16, 2); z++) {
	const possible = secret
		.match(/.{2}/g)
		.map(i => parseInt(i, 16))
		.map((char, i) => char ^ z)
		.map(i => String.fromCharCode(i))
		.join('')
	const hit = compareCharacterCounts(possible, ref)
	if (hit) {
		key = String.fromCharCode(z)
		console.log('key', key, 'secret', possible)
		break
	}
}
