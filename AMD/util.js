define(function () {
    var util = {
        getFormatDate: function (data, type) {
            console.log(data);
            if(type === 1){
                return '2017-10-25';
            }
            if(type === 2){
                return '2017年10月25日';
            }
        }
    }
    return util;
})