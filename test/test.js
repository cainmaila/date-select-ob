var assert = require('assert')
var DeteSelectOb = require('../index')
describe('DeteSelectOb', function() {
    describe('#indexOf()', function() {
        it('未找到值时应当返回-1', function() {
            var deteSelectOb = new DeteSelectOb()
            deteSelectOb.yy = 2018
            deteSelectOb.mm = 2
            calendarList = deteSelectOb.getDate()
            console.log(calendarList)
            assert.equal(-1, [1, 2, 3].indexOf(4))
        })
    })
})
