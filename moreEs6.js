
////// Task-1 : Console log the secondary school location of shopia

let data = {
    shopia : {
        id :33 ,
        study : [
            {
                primary : [
                    {school_name : 'ABC Primary School'},
                    {location : 'peter-burgs'}
                ]
            },

            {
                secondary:[

                    {school_name : 'ABC Secondary School' },
                    {location:'st-lorence'}
                ]            
                
            }

        ]
    }
}

// console.log(data.shopia.study[1].secondary[1])


//// task-2 : show the petersbug and hery ...

let students ={
    2222: {
        name : 'Jack',
        class : 'XII',
        section : 'C',
        address : {
           ' building no ': 12,
            'street' : 'st. jonson',
            'city' :'petersbug',
            'country' : 'Uk'
        }
    },

    3333 :{
        name : 'Hery',
        class : 'XII',
        section : 'C',
        address : {
           ' building no ': 85,
            'street' : 'jumona',
            'city' :'Dhaka',
            'country' : 'Bangladesh'
        }
    }
 }

// console.log(students[2222].address.city)
// console.log(students[3333].name)



//// task-3 : show the 'Hablur-adda', beginners

let data2 = {
    data : [
        {
            bookId : 1 ,
            bookdetails : {
                name : 'hablur -adda',
                catagory : 'XYZ',
                price :'20$'
            },
             bookCatagories : 'beginners'

        }
    ]
}

// console.log(data2.data[0].bookdetails.name)
// console.log(data2.data[0].bookCatagories)

//// practice- problem .........

// **** convert this odd number to the even number by using array.map() function and forloop

const array  = [3,5,7,9,11];

// using for lop ...

for(let arr of array){
    const even = arr + 1;
//    console.log(even)
}

// using map .........

const convertEven = array.map((a) => a + 1);
// console.log(convertEven)


//*** return all this element which is divisible by 10 using array.filter and find  method 

// using filter .....

const filteredArray = [33,50,79,78,90,101,30];
const newArray = filteredArray.filter(n => n % 10 === 0)
// console.log(newArray);

// using find ......

const findNewArray = filteredArray.find(n => n % 10 === 0);
// console.log(findNewArray); [it only gives first character]


///*** Display the instractor name that has the position senior 

const instractor =[ 
    {name : 'Nodi' , age : 28 , position : 'senior'},
    {name : 'Akhi' , age : 28 , position : 'junior'},
    {name : 'Shobuj' , age : 28 , position : 'senior'},
 ]

 const display = instractor.filter((p) => p.position === 'senior');
//  console.log(display);
 

/// 

const people = [
    {name : 'Meena' ,age : 20},
    {name : 'Rina' ,age : 15},
    {name : 'Mona' ,age : 22},
]

const sum = people.reduce((acc , curr) => {
    return acc+curr.age
},0);
console.log(sum);
