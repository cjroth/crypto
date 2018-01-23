export default (string) => {
	return string
		.match(/.{2}/g)
		.map(i => parseInt(i, 16))
		.map(i => String.fromCharCode(i))
		.join('')
}
