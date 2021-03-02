const getAge = function (birthyear) {
    return 2021 - birthyear;
}

const yearsUntilRetirement = function (firstname, birthyear) {
    const age = getAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0)
        return retirement;
    else
        return -1;
}

console.log(yearsUntilRetirement('Kelvin', 1946));