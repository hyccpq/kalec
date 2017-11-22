{
    let arr = Array.of(3,4,5,6,56);
    console.log('arr=',arr);
}

{
    for(let index of ['vue基础','c','te'].keys()){
        console.log('key',index);
    }
    // for(let value of ['vue基础','r','43'].values()){
    //     console.log('values',value);
    // }//gulp下运行
    for(let [index,value] of ['vue基础','43','red'].entries()){
        console.log('values',index,value);
    }

}

{
    console.log([1,3,5,3,6,6].copyWithin(1,2,5));
}

{
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>4;
    }));
    console.log([1,3,5,7,9,11].findIndex(function (item) {
        return item>4;
    }))
}
{
    console.log([1,4,NaN].includes(NaN));
}