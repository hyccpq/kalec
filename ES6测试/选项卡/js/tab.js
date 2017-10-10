class Tab{
    constructor(id){
        this.oBox=document.getElementById(id);
        this.aBtn=this.oBox.getElementsByTagName('input');
        this.aDiv=this.oBox.getElementsByTagName('div');
        this.iNow=0;
        this.init();
    }
    init(){
        for(let i=0;i<this.aBtn.length;i++){
            this.aBtn[i].onclick=function () {
                this.iNow=i;
                this.hide();
                this.show(i);
                console.log(this.iNow);
            }.bind(this);
        }
    }
    hide(){
        for(let i=0;i<this.aBtn.length;i++){
            this.aBtn[i].className='';
            this.aDiv[i].style.display='none';
        }
    }
    show(index){
        this.aBtn[index].className='active';
        this.aDiv[index].style.display='block';
    }
}

class Tab1 extends Tab{
    constructor(id){
        super(id);
        setInterval(this.next.bind(this),1000);
    }
    next(){
        this.iNow++;
        if(this.iNow==this.aBtn.length)this.iNow=0;
        this.hide();
        this.show(this.iNow);
    }
}

window.onload = function () {
    new Tab('box');
    var on=new Tab1('box1');
    // document.onclick=function(){
    //     on.next();
    // }
}