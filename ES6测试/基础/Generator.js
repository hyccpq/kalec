{
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';

    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for(let value of obj){
        console.log(value);
    }
}

{
    let state = function* () {
        while(1){
            yield 'a';
            yield 'b';
            yield 'c';
        }
    }

    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());

}

// {
//     let state = async function () {
//         while(1){
//             await 'a';
//             await 'b';
//             await 'c';
//         }
//     }
//
//     let status = state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//
// }