console.log("JavaScript подключен и работает");
const button_form = document.getElementById('btn_form');

button_form.addEventListener('click', () => {
    window.location.href = './index_form.html';
});

const appConfig = {
  appTitle: "Дисциплины",
  defaultStatus: "new",
  minValueForFilter: 900
};

let actionCount = 0;

actionCount += 1;
actionCount++;
actionCount = actionCount + 1;

appConfig.minValueForFilter = 1000;

console.log(actionCount);
console.log("Статус системы:", appConfig);

const users = [
  {
    id: 1,
    title: "Физика",
    value: 1000,
    status: "active",
    createdAt: "2026-10-29"
  },
  {
    id: 2,
    title: "Биология",
    value: 2132,
    status: "active", 
    createdAt: "2025-10-08"
  },
  {
    id: 3,
    title: "Философия",
    value: 3123,
    status: "new",
    createdAt: "2025-02-11"
  },
  {
    id: 4,
    title: "Английский язык",
    value: 3449,
    status: "blocked",
    createdAt: "2024-01-10"
  },
  {
    id: 5,
    title: "Русский язык",
    value: 5431,
    status: "active",
    createdAt: "2024-05-25"
  },
  {
    id: 6,
    title: "ИЗО",
    value: 777,
    status: "new",
    createdAt: "2023-04-10"
  }
];

console.log("Список пользователей:");
console.log(users);


const inputMinValue = "800";

const minValue = Number(inputMinValue);

if (Number.isNaN(minValue)) {
  console.log("Ошибка типа порога фильтрации!");
} else {
  console.log("Порог фильтрации:", minValue);
}


const user = {
  id: 1,
  title: "Физика",
  value: 1000,
  status: "new",
  createdAt: "2026-01-15"
};

switch (user.status) {
  case "new":
    console.log("Новая запись");
    break;
  case "done":
    console.log("Завершено");
    break;
  default:
    console.log("Неизвестный статус");
}

if (user.value >= 1000) {
  console.log("Высокое значение");
} else if (user.value >= 700) {
  console.log("Среднее значение");
} else {
  console.log("Низкое значение");
}

const users2 = [
  { id: 1, title: "Физика.", status: "new", value: 1000 },
  { id: 2, title: "Биология.", status: "active", value: 2132 },
  { id: 3, title: "Философия.", status: "new", value: 3123 },
  { id: 4, title: "Английский язык.", status: "blocked", value: 3449 },
  { id: 5, title: "Русский язык.", status: "active", value: 5431 },
  { id: 6, title: "ИЗО.", status: "new", value: 777 }
];

let newCount = 0;

for (const user of users2) {
  if (user.status === "new") {
    newCount++;
    console.log(`Новая дисциплина: ${user.title}`);
  }
}
console.log("Количество новых дисциплин:", newCount);

let newCountWhile = 0;
let i = 0;
while (i < users.length) {
  if (users[i].status === "new") {
    newCountWhile++;
  }
  i++;
}
console.log("Количество новых дисциплин while:", newCount)

const output = document.getElementById('output'); 

document.getElementById('btnAll')?.addEventListener('click', showAll);
document.getElementById('btnNew')?.addEventListener('click', showNew);
document.getElementById('btnStats')?.addEventListener('click', showStats);

function showAll() {
    let result = "    Все записи    \n\n";
    users.forEach(user => {
        result += `ID: ${user.id}, ФИО: ${user.title}, Сумма: ${user.value}, Статус: ${user.status}, Дата: ${user.createdAt}\n`;
    });
    output.textContent = result;
}

function showNew() {
    const newUsers = users.filter(user => user.status === "new");
    let result = `    Только NEW    \n\n`;
    
    if (newUsers.length === 0) {
        result += "Новых Дисциплин нет";
    } else {
        newUsers.forEach(user => {
            result += `ID: ${user.id}, ФИО: ${user.title}, Сумма: ${user.value}, Дата: ${user.createdAt}\n`;
        });
    }
    output.textContent = result;
}

function showStats() {
    const totalRecords = users.length;
    const totalValue = users.reduce((sum, user) => sum + user.value, 0);
    const maxValue = Math.max(...users.map(user => user.value));
    const newCount = users.filter(user => user.status === "new").length;
    
    const filterUsers = users.filter(user => user.value >= appConfig.minValueForFilter);
    
    let result = "Данные корректны\n";
    result += `Всего записей: ${totalRecords}\n`;
    result += `Сумма value: ${totalValue}\n`;
    result += `Максимум value: ${maxValue}\n`;
    result += `Количество status="new": ${newCount}\n`;
    result += `Фильтр value >= ${minValueForFilter}: (${filterUsers.length} записей)\n\n`;
    
    filterUsers.forEach(user => {
        result += ` ${user.title}: ${user.value} (${user.status})\n`;
    });
    
    output.textContent = result;
}
function showStats() {
    const totalRecords = users.length;
    const totalValue = users.reduce((sum, user) => sum + user.value, 0);
    const maxValue = Math.max(...users.map(user => user.value));
    const newCount = users.filter(user => user.status === "new").length;
   
    const filterUsers = users.filter(user => user.value >= appConfig.minValueForFilter);
   
    let result = "Данные корректны\n\n";
    result += `Всего записей: ${totalRecords}\n`;
    result += `Сумма value: ${totalValue}\n`;
    result += `Максимум value: ${maxValue}\n`;
    result += `Количество status="new": ${newCount}\n\n`;
    result += `Фильтр по value больше 900 >= ${appConfig.minValueForFilter}:\n`;
   
    filterUsers.forEach(user => {
        result += `  ${user.title}: ${user.value} (${user.status})\n`;
    });
   
    output.textContent = result;
}