const Kira ={
    name: "Kira",
    type: "dog",
    age: "6",
    food: "meat",
    size: {
        height: "27",
        width: "31"
    },
    voice: function () {
        console.log ("woof")
    }
}

const Kisj ={
    name: "Kisj",
    type: "cat",
    age: "4",
    food: "meat",
    size: {
        height: "36",
        width: "45"
    },
    voice: function () {
        console.log ("meowww")
    }
}

const Rafiks ={
    name: "Rafiks",
    type: "cat",
    age: "4",
    food: "chickenMeat",
    size: {
        height: "33",
        width: "41"
    },
    voice: function () {
        console.log ("meow")
    },
    42: 42
}

Rafiks.age = "7";


const pets2 = [
    {
        name: "Kira",
        type: "dog",
        age: "6",
        food: "meat",
        size: {
            height: "27",
            width: "31"
        },
        voice: function () {
            console.log ("woof")
        }
    },
    {
        name: "Kisj",
        type: "cat",
        age: "4",
        food: "meat",
        size: {
            height: "36",
            width: "45"
        },
        voice: function () {
            console.log ("meowww")
        }
    },
    {
        name: "Rafiks",
        type: "cat",
        age: "4",
        food: "chickenMeat",
        size: {
            height: "33",
            width: "41"
        },
        voice: function () {
            console.log ("meow")
        },
        42: 42
    }
]

//console.log (pets2[1].name)

//console.log (pets2.length)

//console.log ("Jelena".length)

//console.log (pets2[0].name);
//console.log (pets2[1].name);
//console.log (pets2[2].name);

//let i = 0;
//while (i<pets2.length) {
//    console.log (pets2[i].name);
//    i++;
//}

for (let i = 0; i < pets2.length; i++){
    console.log (pets2[i].name);
}

