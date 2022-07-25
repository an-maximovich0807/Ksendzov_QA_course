console.log(
    "--------------------------------Task#1--------------------------------"
);

const users = [
    {
        firstName: "John",
        lastName: "Caper",
        phone: "7436676737634",
        registrationDate: "12.10.2021",
    },
    {
        firstName: "Clark",
        lastName: "Kent",
        phone: "4346676737634",
        registrationDate: "16.09.2021",
    },
    {
        firstName: "Tony",
        lastName: "Stark",
        phone: "7436698337634",
        registrationDate: "11.10.2021",
    },
    {
        firstName: "Bruce",
        lastName: "Wayne",
        phone: "1111176737634",
        registrationDate: "09.10.2021",
    },
    {
        firstName: "Star",
        lastName: "Lord",
        phone: "7439374737634",
        registrationDate: "10.10.2021",
    },
    {
        firstName: "Kate",
        lastName: "Bishop",
        phone: "7436693647634",
        registrationDate: "11.10.2021",
    },
    {
        firstName: "Jerry",
        lastName: "James",
        phone: "7409048737634",
        registrationDate: "10.10.2021",
    },
    {
        firstName: "Jeremy",
        lastName: "Clarkson",
        phone: "743667600289334",
        registrationDate: "16.10.2020",
    },
    {
        firstName: "Robert",
        lastName: "Patrik",
        phone: "7436676730093",
        registrationDate: "10.10.2020",
    },
    {
        firstName: "Jonny",
        lastName: "Sins",
        phone: "74923982737634",
        registrationDate: "01.01.2021",
    },
    {
        firstName: "Andrew",
        lastName: "Garfield",
        phone: "743667988344",
        registrationDate: "09.10.2019",
    },
    {
        firstName: "Jane",
        lastName: "Foster",
        phone: "74368783427634",
        registrationDate: "09.10.2019",
    },
    {
        firstName: "Rick",
        lastName: "Smith",
        phone: "700000037634",
        registrationDate: "12.10.2021",
    },
];
let date1 = "09.10.2021";
let date2 = "10.10.2021";
var result = users.filter(
    (el) => el.registrationDate == date1 || el.registrationDate == date2
);
console.log(result);

console.log(
    "--------------------------------Task#2--------------------------------"
);

const fs = require("fs");

let file_cont = fs.readFileSync("task2.json", "utf-8");
let data = JSON.parse(file_cont);

function removeDuplicates(data, key) {
    return [...new Map(data.map((item) => [key(item), item])).values()];
}

console.log(removeDuplicates(data, (item) => item.name));

console.log(
    "--------------------------------Task#3.1--------------------------------"
);

const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ],
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ],
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ],
    },
];

const empl_counter = function (number) {
    let lastNumber = number.toString().split("").pop();
    if (lastNumber && number) {
        if (lastNumber == 1) return `${number} сотрудник`;
        else if (lastNumber > 1 && lastNumber <= 4)
            return `${number} сотрудникa`;
        else return `${number} сотрудников`;
    } else return "сотрудников нет";
};

const getDepts = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                depts.push(
                    `-${dept.name}(${empl_counter(dept.employees_count)})`
                );
            });
            depts[0] += `(${empl_counter(count)})`;
        }
        console.log(depts.join(`\n `));
    });
};
getDepts(enterprises);
