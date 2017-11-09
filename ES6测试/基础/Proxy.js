{
    let obj = {
        time:'2017-3-11',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{

        // get(target,key){
        //     return target[key]='2018';
        // },

        set(target,key,value){
            if(key === 'name'){
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        has(target,key){
            if(key === 'name'){
               return target[key];
            } else {
                return false;
            }

        },

        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
            } else {
                return target[key];
            }
        }
    });

    console.log('get',monitor.time);

    monitor.time = '2018';
    monitor.name = 'kalegos';
    // console.log(monitor.time);
    console.log(monitor);
    console.log('name' in monitor);

    delete monitor.time;
    console.log(monitor);
    delete monitor._r;
    console.log(monitor);
}