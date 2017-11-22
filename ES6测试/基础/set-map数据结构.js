{
    let list = new Set();
    list.add(3);
    list.add(3);
    list.add(5);

    console.log(list);
}

{
    let arr = [1,3,5,6,6,4,3,3,5];
    let list = new Set(arr);
    console.log(list);
}

{
    let map = new Map();
    let arr = ['1234'];

    map.set(arr,456);
    console.log(map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log(map);
    console.log(map.size);
    console.log(map.delete('a'),map);
}