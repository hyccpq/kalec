
function Object1() {
    let items = {};
    // this.arr = arr;
    this.add = function (value) {
        items[value] = value;
    };
    this.values = function () {
        let values = [];
        for(let attr in items){
            if(items.hasOwnProperty(attr)){
                values.push(items[attr]);
            }
        }
        return values;
    };
    this.removeDup = function (arr) {
        for(let i=0;i<arr.length;i++){ 
            this.add(arr[i]);
        }
        return this.values();
    }
}



let arr = [1,1,2,3,3,3,3,5,5,9,0,9,9,9,8,8,8,9];
let obj = new Object1();
arr = obj.removeDup(arr);
console.log(arr);