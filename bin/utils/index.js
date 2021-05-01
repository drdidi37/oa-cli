const chalk = require('chalk')

module.exports.chalkLog = (chalkColor) => {
  return (content) => {
    console.log(chalk[chalkColor](content))
  }
}
