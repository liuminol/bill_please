'use strict';

// Список персон
// Элемент: имя и внесенная сумма
let persons = [
    {
        name: "Alex",
        deposited: 5000,
    },
    {
        name: "Ann",
        deposited: 1500,
    },
    {
        name: "Sergio",
        deposited: 0,
    },
    {
        name: "Mark",
        deposited: 3000,
    },
    {
        name: "Alice",
        deposited: 1000,
    },
];
let sum = 0;
let receivers = [];
let debtors = [];

// Получаем сумму и высчитываем среднее значение
persons.map(person => sum += person.deposited);
let avg = sum / persons.length;

// Рассчитываем баланс
// Если отрицательный, значит этой персоне должны => добавляем в массив receivers
// Если положительный, значит эта персона должник => добавляем в массив debtors
console.log("===> Считаем баланс. Если орицательный - ему должны, положительный - он должен. Равен нуля - сбалансировано");
persons.map(person => {
    let balance = avg - person.deposited;
    balance > 0
        ?
        debtors.push(create(person, balance))
        :
        receivers.push(create(person, balance));
});

// Производим расчет
for (let r = 0; r < receivers.length; r++) {

    for (let d = 0; d < debtors.length; d++) {

        if (debtors[d].balance === 0 || receivers[r].balance === 0) {
        } else {
            if (debtors[d].balance + receivers[r].balance < 0) {
                debtors[d].debts.push({name: receivers[r].name, debt: debtors[d].balance});
                receivers[r].balance = receivers[r].balance + debtors[d].balance;
                debtors[d].balance = 0;
            } else {
                debtors[d].debts.push({name: receivers[r].name, debt: Math.abs(receivers[r].balance)});
                debtors[d].balance = debtors[d].balance + receivers[r].balance;
                receivers[r].balance = 0;
            }
        }
    }

}

// Выводим результат
console.log(" ");
console.log("===> Выводим результат");
if (debtors.length === 0) {
    console.log("Никто никому ничего не должен");
} else {
    debtors.map(debtor => {
            if (debtor.debts.length === 0) return;

            console.log(debtor.name + "! Вы должны ");
            debtor.debts.map(debt => console.log("персоне " + debt.name + " " + debt.debt + " рублей."));
            console.log(" ");
        }
    );
}

// Возвращает промежуточную персону для расчетов
function create(person, balance) {
    console.log(person.name + " " + balance);
    return {
        name: person.name,
        balance: balance,
        debts: [],
    }
}
