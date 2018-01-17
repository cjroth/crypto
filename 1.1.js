const hexInput = '49276D206B696C6C696E6720796F757220627261696E206C696B65206120706F69736F6E6F7573206D757368726F6F6D'
const output = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

// const input = 'M'
// const output = 'TWFu'

const hex2ascii = (input) => {
	return input.match(/.{1,2}/g).map(chunk2 => {
		console.log('chunk2', chunk2)
		const code = parseInt(chunk2, 16)
		console.log('code', code)
		return String.fromCharCode(code)
	}).join('')
}

const input = hex2ascii(hexInput)

let key = ''

const ranges = ['AZ', 'az', '09'].map(([start, end]) => {
	for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
		key += String.fromCharCode(i)
	}
})

key += '+/'

let binary = ''
let chars = input.split('')

while (chars.length) {
	const char = chars.shift()
	const index = char.charCodeAt(0)
	const bits = index.toString(2).padStart(8, 0)
	binary += bits
}

const combined = binary.match(/.{1,24}/g).map(chunk24 => {
	return chunk24.match(/.{1,6}/g).map(chunk6 => {
		chunk6 = chunk6.padEnd(6, 0)
		const index = parseInt(chunk6, 2)
		const base64char = key[index]
		return base64char
	}).join('').padEnd(4, '=')
}).join('')

console.log('key', key)
console.log('input', input)
console.log('bin', binary)
console.log('output', combined)
