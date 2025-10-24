
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

console.log(data2.data[0].bookdetails.name)
console.log(data2.data[0].bookCatagories)

//// practice- problem .........

// **** convert this odd number to the even number by using array.map() function and forloop

