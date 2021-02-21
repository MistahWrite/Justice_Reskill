var obj = {
    fname : 'John',
    lname : 'Smith',
    age : 40,
    printFullName : function () {
        return this.fname + ' ' + this.lname;
    },
    kids : ['Nick', 'Sarah']
}
console.log(obj.kids[1]);
let obj[2];
obj.kids.