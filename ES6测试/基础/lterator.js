{
    let arr = ['hellow','world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start:[1,2,3],
        end:[5,6,7],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false,
                        }

                    } else {
                        return {
                            value:arr[index++],
                            done:true,
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}