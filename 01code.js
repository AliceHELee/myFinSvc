var age = 100; //Number
var firstName = "Alice";
var lastName = "LEE"; //String
//var x = { firstName:"John", lastName:"Doe" }; //Object
console.log('hello world');
console.log(firstName, lastName, age);
//console.log(x);


function sum(p1, p2) {
    return p1 + p2;
};

console.log(sum(1,2));

// var car = {
//         name :"sonata",
//         ph : "500ph",
//         start : function() {
//                 console.log("engine is starting")
//         },
//         stop : function() {
//                 console.log("engine is stopped")
//         }
// }

var car = {
    name : 'fiat', 
    ph :  '500',
    weight : '850kg',
    color : 'white'
}
console.log(car.name);
console.log(car.model);


var car1 = 'Saab';
var car2 = "Volvo";
var car3 = "BMW";
var cars = ["Saab", "Volvo", "BMW", "Ford", "Fiat", 'Audi'];
var cars2 = [car1, car2]  // 메모리할당? 참조?
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars2);
var text = "";
var i;

for (var i = 0; i < 9; i++) {
    console.log(i*3);
}

for (i = 0; i < cars.length  ; i++) {
    console.log(cars[i]);
}

for (i = 0; i < cars.length  ; i++) {
    if(cars[i] == "BMW") {
        console.log('BMW 차량이 있습니다 조심하세요 불납니다')
    }
    else { console.log('없습니다')}
}

//비교 sync vs. async function







