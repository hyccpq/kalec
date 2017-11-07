
{
   let re = /abc/i;
    console.log(re.flags);
}

{
    let b = 'bbb_aa_iiii_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log(`1.${a1.exec(b)},${a2.exec(b)}`);
    console.log(`2.${a1.exec(b)},${a2.exec(b)}`);
    console.log(`3.${a1.exec(b)},${a2.exec(b)}`);
    console.log(`4.${a1.exec(b)},${a2.exec(b)}`);
}

{
    console.log(`\u{20FFE}`);

    let s = '𠿾';

    console.log(`u_${/^.$/.test(s)}`);
    console.log(`u1_${/^.$/u.test(s)}`);

    console.log(`test ${/𠿾{2}/u.test('𠿾𠿾')}`);

}