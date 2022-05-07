// const validator = require('validator')
import validator from 'validator'
import tripleMe from './tripleMe'

console.log(validator.isEmail('John@test.com'))
console.log(tripleMe(7)) 

document.querySelector('h1').innerText = "Good"

if (module.hot){
    module.hot.accept()
}