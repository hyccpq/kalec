const inventors = [{
        first: 'Shere',
        last: 'H',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Sh3',
        last: 'p',
        year: 5439,
        passed: 1657
    },
    {
        first: 'Sh34',
        last: 'o',
        year: 6796,
        passed: 4656
    },
    {
        first: 'Sh5',
        last: ',',
        year: 1559,
        passed: 4656
    },
    {
        first: 'Sh6',
        last: 'j',
        year: 5657,
        passed: 1656
    },
    {
        first: 'Sh7',
        last: 'h',
        year: 1546,
        passed: 7777
    },
    {
        first: 'Sh8',
        last: 'd',
        year: 3333,
        passed: 1111
    },
    {
        first: 'Sh9',
        last: 'q',
        year: 1999,
        passed: 3434
    },
];
const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year <= 1600) {
        return true;
    } else {
        return false;
    }
});
console.table(fifteen);