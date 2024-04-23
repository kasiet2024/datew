let date = document.getElementById("date")
let day = document.getElementById("day")
let month = document.getElementById("month")
let yaer = document.getElementById("year")

let today = new Date ()
let weekdays = ["monday,","monday,","monday,","monday,","monday,","monday,","monday,"]

let allmonth = ["april","april","april","april","april","april",]

date.innerHTML= today.getDate()
day.innerHTML= weekdays[today.getDay()]
month.innerHTML = allmonth[today.getMonth()]
yaer.innerHTML= today.getFullYear()