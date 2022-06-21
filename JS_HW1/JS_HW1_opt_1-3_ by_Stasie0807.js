function checkAge(age_1) {
    const age_2 = 18;
    const age_3 = 60;
    if (isNaN(age_1)) {
        console.log("Write a number");
    } else {
        if (age_1 < age_2) {
            console.log(
                "You don't have access cause your age is " +
                    age_1 +
                    "." +
                    " It's less then " +
                    age_2
            );
        } else if ((age_1 >= age_2, age_1 < age_3)) {
            console.log("You are welcome!");
        } else if (age_1 > age_3) {
            console.log("Keep calm and watch Culture channel");
        } else console.log("Technical works");
    }
    return age_1;
}
console.log("----------------Check additional task #1--------------");
checkAge(17);
checkAge(18);
checkAge(61);

console.log("----------------Check additional task #2--------------");
checkAge("Mentor glad to see you again");

console.log("----------------Check additional task #3--------------");
checkAge("61");
