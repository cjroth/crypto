const a = '1c0111001f010100061a024b53535009181c'
const b = '686974207468652062756c6c277320657965'

const aArray = a.match(/.{2}/g).map(i => parseInt(i, 16))
const bArray = b.match(/.{2}/g).map(i => parseInt(i, 16))
const c = aArray.map((char, i) => char ^ bArray[i]).map(char => char.toString(16)).join('')

console.log('c', c)
