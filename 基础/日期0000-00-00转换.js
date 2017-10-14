function FormatDate(dt) {
    this.year = dt.getFullYear();
    this.month = dt.getMonth()+1;
    this.date = dt.getDate();
    this.changeMonth();
    this.changeDate();
}
FormatDate.prototype.changeMonth = function () {
    if(this.month<10){
        this.month = '0'+this.month;
    }
    else this.month.toString();
};
FormatDate.prototype.changeDate = function () {
    if(this.date<10){
        this.date = '0'+this.date;
    }
    else this.date.toString();
};
FormatDate.prototype.spiltDate = function () {
    return this.year+'-'+this.month+'-'+this.date;
};
var dt = new Date();
var formatdate = new FormatDate(dt);
console.log(formatdate.spiltDate());