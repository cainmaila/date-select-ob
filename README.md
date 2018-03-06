# DeteSelectOb

這是一個萬年曆的資料，可以利用某一天來取得當月份的月歷，或者相鄰月份的月歷，你可以利用他製作自己的月歷版面

## How to install

```sh
npm i date-select-ob
# or
# yarn add date-select-ob
```

## How to use

```javascript
//建立一個月歷物件
var deteSelectOb = new DeteSelectOb()
//月歷的資料，他是一個日期列表
var calendarList
//取得月曆
calendarList = deteSelectOb.rest()
console.log("Get this month's calendar", calendarList)
//取得下個月月歷
calendarList = deteSelectOb.next()
console.log("Get next month's calendar", calendarList)
//取得上個月月歷
deteSelectOb.rest()
deteSelectOb.back()
console.log("Get last month's calendar", calendarList)
//取得特定日期月歷
deteSelectOb.yy = 2018
deteSelectOb.mm = 2
calendarList = deteSelectOb.getDate()
console.log("Select a month's calendar", calendarList)
```

輸出 2018/2 月曆資料

```json
{
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
}
```
