'use strict'

function example() {
    this.exampleTask = function () {
        console.log('task 1 done')
        return 'task 1 done'
    }
}

module.exports = new example()