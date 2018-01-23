const string = `Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal`

const key = 'ICE'

const encrypted = string
	.split('')
	.map(i => i.charCodeAt(0))
	.map((i, index) => i ^ key[index % key.length].charCodeAt(0))
	.map(i => i.toString(16).padStart(2, '0'))
	.join('')

console.log('encrypted', encrypted)
