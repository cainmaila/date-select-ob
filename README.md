# DeteSelectOb

This is a calendar data generator, you can use a day to get the monthly calendar, or the monthly calendar of the adjacent month, you can use him to create their own calendar layout.

這是一個月曆資料生成器，可以利用某一天來取得當月份的月歷，或者相鄰月份的月歷，你可以利用他製作自己的月歷版面

## How to install

```sh
npm i date-select-ob
# or
# yarn add date-select-ob
```

## How to use

```javascript
//Create a calendar object
var deteSelectOb = new DeteSelectOb()

//Calendar of the information, it is a list of dates
var calendarList

//Get the current calendar
calendarList = deteSelectOb.rest()
console.log('Get the current calendar', calendarList)

//Get the next month's calendar
calendarList = deteSelectOb.next()
console.log("Get next month's calendar", calendarList)

//Get the last month's calendar
deteSelectOb.rest()
deteSelectOb.back()
console.log("Get last month's calendar", calendarList)

//Get a specific date calendar
deteSelectOb.yy = 2018
deteSelectOb.mm = 2
calendarList = deteSelectOb.getDate()
console.log("Select a month's calendar", calendarList)
```

Output 2018/2 calendar data，like this

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
