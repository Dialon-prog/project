'use strict'

let money = prompt("Ваш бюджет на месяц?", ''),
 time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1: "80000",
        answer2: "20000" 
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
b = prompt("Во сколько обойдется?", ''),
a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
b1 = prompt("Во сколько обойдется?", '');

appData.expenses[a] = b;
appData.expenses[a1] = b1;

alert(appData.budget / 30);


 