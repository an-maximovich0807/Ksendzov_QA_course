function checkAge() {
    let age_1 = prompt("How old are you?", 17);
    const age_2 = 18,
        age_3 = 61;
    if (isNaN(age_1)) {
        alert("Write a number");
    } else if (age_1 < age_2) {
        alert(
            "You don't have access cause your age is " +
                age_1 +
                "." +
                " It's less then " +
                age_2
        );
    } else if (age_2 >= age_1 && age_1 < age_3) {
        alert("You are welcome!");
    } else if (age_1 > age_3) {
        alert("Keep calm and watch Culture channel");
    } else alert("Technical works");
    return age_1;
}
checkAge();
