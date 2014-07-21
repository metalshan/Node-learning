var Model = require ('../Modules');

var p1_Obj ={
	firstName : 'Paul',
	lastName : 'Shan'
}
var p1 = Model(p1_Obj);

console.log(p1.getName())

var p2_Obj ={
	firstName : 'Prasenjit',
	lastName : 'Paul'
}
var p2 = Model(p2_Obj);

console.log(p2.getName())

console.log(p1.getName())
