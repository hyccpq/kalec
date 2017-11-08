{
    console.log(0b1000100111);
    console.log(0o767364);
}
{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
    console.log('0',Number.isNaN(0));
}

{
    console.log('25',Number.isInteger(25));
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
}

