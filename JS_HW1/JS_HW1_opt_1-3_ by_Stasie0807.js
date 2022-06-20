function checkAge(age_1, age_2, age_3) {
    if (isNaN(age_1) || isNaN(age_2) || isNaN(age_3)) {
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
        } else if (age_1 >= age_3) {
            console.log("Keep calm and watch Culture channel");
        }
    }
    return age_1;
}
console.log("----------------Check additional task #1--------------");
checkAge(17, 18, 61);

console.log("----------------Check additional task #2--------------");
checkAge(17, "Hello mentor", 61);

console.log("----------------Check additional task #3--------------");
checkAge(17, 18, "61");
