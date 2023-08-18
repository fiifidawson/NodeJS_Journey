// CommonJS, every file is a module (by default)
// Modules: Separation. Encapsulated Code (only share minimum)

const names = require('./1-names');
const sayHi = require('./2-utils')
const data = require('./3-alternative-flavour')

sayHi('Ama');
sayHi(names.john);
sayHi(names.peter);

