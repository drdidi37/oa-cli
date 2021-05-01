const inquirer = require('inquirer')

const opt = {
  初始化Cli: 'init',
  退出: 'exit'
}

module.exports.initPanel = () => {
  const question = [
    {
      type: 'rawlist',
      message: '请选择操作',
      name: 'operation',
      choices: Object.keys(opt)
    }
  ]
  async function query () {
    const answer = await inquirer.prompt(question)
    console.log('answer', answer)
    if (answer.operation === '退出') return
    await require(`../operation/${opt[answer.operation]}`)()
    await query()
  }
  query()
}
