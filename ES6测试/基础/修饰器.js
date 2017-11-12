{
    let readOnly = function (targat,name,descriptor) {
        descriptor.writable = false;
        return descriptor;
    };

    class Test{
        @readOnly
        time(){
            return '2017-11-12';
        }
    }

    let test = new Test();
    test.time = function(){
        console.log('reset time');
    };
    console.log(test.time());
}