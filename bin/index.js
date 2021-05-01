#!/usr/bin/env node
const { promisify } = require('util')

const figlet = promisify(require('figlet'))
const clear = require('clear')
const { chalkLog } = require('./utils')
const { initPanel } = require('./commandPanel')

const log = chalkLog('green')

clear()

log(figlet.textSync('Welcome', {
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
}))
initPanel()
