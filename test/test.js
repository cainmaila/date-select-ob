var assert = require('assert')
var DeteSelectOb = require('../index')
describe('DeteSelectOb', function() {
    describe('#getDate()', function() {
        it('Get 2018/2 calendar', function() {
            var deteSelectOb = new DeteSelectOb()
            deteSelectOb.yy = 2018
            deteSelectOb.mm = 2
            calendarList = deteSelectOb.getDate()
            console.log(calendarList)
            assert.deepEqual(calendarList, {
                list: [
                    { yy: 2018, mm: 1, dd: 25 },
                    { yy: 2018, mm: 1, dd: 26 },
                    { yy: 2018, mm: 1, dd: 27 },
                    { yy: 2018, mm: 1, dd: 28 },
                    { yy: 2018, mm: 2, dd: 1 },
                    { yy: 2018, mm: 2, dd: 2 },
                    { yy: 2018, mm: 2, dd: 3 },
                    { yy: 2018, mm: 2, dd: 4 },
                    { yy: 2018, mm: 2, dd: 5 },
                    { yy: 2018, mm: 2, dd: 6 },
                    { yy: 2018, mm: 2, dd: 7 },
                    { yy: 2018, mm: 2, dd: 8 },
                    { yy: 2018, mm: 2, dd: 9 },
                    { yy: 2018, mm: 2, dd: 10 },
                    { yy: 2018, mm: 2, dd: 11 },
                    { yy: 2018, mm: 2, dd: 12 },
                    { yy: 2018, mm: 2, dd: 13 },
                    { yy: 2018, mm: 2, dd: 14 },
                    { yy: 2018, mm: 2, dd: 15 },
                    { yy: 2018, mm: 2, dd: 16 },
                    { yy: 2018, mm: 2, dd: 17 },
                    { yy: 2018, mm: 2, dd: 18 },
                    { yy: 2018, mm: 2, dd: 19 },
                    { yy: 2018, mm: 2, dd: 20 },
                    { yy: 2018, mm: 2, dd: 21 },
                    { yy: 2018, mm: 2, dd: 22 },
                    { yy: 2018, mm: 2, dd: 23 },
                    { yy: 2018, mm: 2, dd: 24 },
                    { yy: 2018, mm: 2, dd: 25 },
                    { yy: 2018, mm: 2, dd: 26 },
                    { yy: 2018, mm: 2, dd: 27 },
                    { yy: 2018, mm: 2, dd: 28 },
                    { yy: 2018, mm: 2, dd: 29 },
                    { yy: 2018, mm: 2, dd: 30 },
                    { yy: 2018, mm: 2, dd: 31 }
                ],
                yy: 2018,
                mm: 2
            })
        })
    })

    describe('#next()', function() {
        it('Get 2018/3 calendar', function() {
            var deteSelectOb = new DeteSelectOb()
            deteSelectOb.yy = 2018
            deteSelectOb.mm = 2
            calendarList = deteSelectOb.next()
            assert.deepEqual(calendarList, {
                list: [
                    { yy: 2018, mm: 3, dd: 1 },
                    { yy: 2018, mm: 3, dd: 2 },
                    { yy: 2018, mm: 3, dd: 3 },
                    { yy: 2018, mm: 3, dd: 4 },
                    { yy: 2018, mm: 3, dd: 5 },
                    { yy: 2018, mm: 3, dd: 6 },
                    { yy: 2018, mm: 3, dd: 7 },
                    { yy: 2018, mm: 3, dd: 8 },
                    { yy: 2018, mm: 3, dd: 9 },
                    { yy: 2018, mm: 3, dd: 10 },
                    { yy: 2018, mm: 3, dd: 11 },
                    { yy: 2018, mm: 3, dd: 12 },
                    { yy: 2018, mm: 3, dd: 13 },
                    { yy: 2018, mm: 3, dd: 14 },
                    { yy: 2018, mm: 3, dd: 15 },
                    { yy: 2018, mm: 3, dd: 16 },
                    { yy: 2018, mm: 3, dd: 17 },
                    { yy: 2018, mm: 3, dd: 18 },
                    { yy: 2018, mm: 3, dd: 19 },
                    { yy: 2018, mm: 3, dd: 20 },
                    { yy: 2018, mm: 3, dd: 21 },
                    { yy: 2018, mm: 3, dd: 22 },
                    { yy: 2018, mm: 3, dd: 23 },
                    { yy: 2018, mm: 3, dd: 24 },
                    { yy: 2018, mm: 3, dd: 25 },
                    { yy: 2018, mm: 3, dd: 26 },
                    { yy: 2018, mm: 3, dd: 27 },
                    { yy: 2018, mm: 3, dd: 28 },
                    { yy: 2018, mm: 3, dd: 29 },
                    { yy: 2018, mm: 3, dd: 30 },
                    { yy: 2018, mm: 4, dd: 1 },
                    { yy: 2018, mm: 4, dd: 2 },
                    { yy: 2018, mm: 4, dd: 3 },
                    { yy: 2018, mm: 4, dd: 4 },
                    { yy: 2018, mm: 4, dd: 5 }
                ],
                yy: 2018,
                mm: 3
            })
        })
    })
})
