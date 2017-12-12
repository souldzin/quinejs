const {EOL} = require('os');
const X = 'module.exports = function quine(endl = EOL) { return `const {EOL} = require(\'os\');${endl}const X = \'${X.replace(/\\\\/g, "\\\\\\\\").replace(/\'/g, "\\\\\'")}\';${endl}${X}${endl}`; };';
module.exports = function quine(endl = EOL) { return `const {EOL} = require('os');${endl}const X = '${X.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}';${endl}${X}${endl}`; };
