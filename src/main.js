// ██████╗ ███████╗████████╗███████╗███████╗███████╗██╗     ███████╗ ██████╗████████╗ ██████╗ ██████╗
// ██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
// ██║  ██║█████╗     ██║   █████╗  ███████╗█████╗  ██║     █████╗  ██║        ██║   ██║   ██║██████╔╝
// ██║  ██║██╔══╝     ██║   ██╔══╝  ╚════██║██╔══╝  ██║     ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
// ██████╔╝███████╗   ██║   ███████╗███████║███████╗███████╗███████╗╚██████╗   ██║   ╚██████╔╝██████╔╝
// ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═════╝

/**
 * 日歷物件
 */
function DeteSelectOb() {
    let now = new Date()
    this.yy = now.getFullYear()
    this.mm = now.getMonth()
    this.today = {
        yy: this.yy,
        mm: this.mm,
        dd: now.getDate()
    }
}

/**
 * 是否為今日
 * @param {*} date 日期物件
 */
DeteSelectOb.prototype.isToday = function(date) {
    if (
        date.dd === this.today.dd &&
        date.mm === this.today.mm &&
        date.yy === this.today.yy
    ) {
        return true
    } else {
        return false
    }
}

/**
 * 取回本月份
 */
DeteSelectOb.prototype.rest = function() {
    this.yy = this.today.yy
    this.mm = this.today.mm
    return getList({ yy: this.yy, mm: this.mm })
}

/**
 * 取回選擇的月份
 */
DeteSelectOb.prototype.getDate = function() {
    return getList({ yy: this.yy, mm: this.mm })
}

/**
 * 下個月份
 */
DeteSelectOb.prototype.next = function() {
    this.mm++
    if (this.mm >= 12) {
        this.mm = 0
        this.yy++
    }
    return getList({ yy: this.yy, mm: this.mm })
}

/**
 * 上個月份
 */
DeteSelectOb.prototype.back = function() {
    this.mm--
    if (this.mm < 0) {
        this.mm = 11
        this.yy--
    }
    return getList({ yy: this.yy, mm: this.mm })
}

/**
 * 取回月份
 * @param {*} _yy_mm 月份
 */
function getList(_yy_mm) {
    let today
    if (_yy_mm) {
        today = new Date(_yy_mm.yy, _yy_mm.mm, 1)
    } else {
        today = new Date()
    }
    let nowMon = today.getMonth()
    let nowYear = today.getFullYear()
    let firstDay = new Date(nowYear, nowMon, 1)
    let firstDayWe = firstDay.getDay()
    let dayList = []
    dayList.push({
        yy: nowYear,
        mm: nowMon,
        dd: 1
    })
    let add = 1
    let nextDay
    while (firstDayWe > 0) {
        add--
        firstDayWe--
        nextDay = new Date(nowYear, nowMon, add)
        dayList.unshift({
            yy: nextDay.getFullYear(),
            mm: nextDay.getMonth(),
            dd: nextDay.getDate()
        })
    }
    add = 2
    while (add <= 28) {
        dayList.push({
            yy: nowYear,
            mm: nowMon,
            dd: add
        })
        add++
    }
    nextDay = new Date(nowYear, nowMon, add)
    let nextMon = nextDay.getMonth()
    while (nowMon === nextMon) {
        dayList.push({
            yy: nowYear,
            mm: nowMon,
            dd: add
        })
        add++
        nextDay = new Date(nowYear, nowMon, add)
        nextMon = nextDay.getMonth()
    }
    let lestDayWe = nextDay.getDay()
    let nextYear = nextDay.getFullYear()
    add = 1
    while (lestDayWe !== 0 && lestDayWe <= 6) {
        dayList.push({
            yy: nextYear,
            mm: nextMon,
            dd: add
        })
        add++
        lestDayWe++
    }
    return {
        list: dayList,
        yy: nowYear,
        mm: nowMon
    }
}

export default DeteSelectOb
