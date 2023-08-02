/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	             Output
"Jabroni"	        "Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	    "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	    "Your tax dollars"
"Rapper"	        "Cristal"
anything else	    "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */



/* My Answers */
function getDrinkByProfession(param){
    let person = param.toLowerCase()
// Switch Case(seemed more readable than ternary or if/else)
    switch(person) {
        case "jabroni":
            return "Patron Tequila"
        case "school counselor":
            return "Anything with Alcohol"
        case "programmer":
            return "Hipster Craft Beer"
        case "bike gang member":
            return "Moonshine"
        case "politician":
            return "Your tax dollars"
        case "rapper":
            return "Cristal"
        default:
            return "Beer"
    }
}

// Ternary Operator
    // return person === "jabroni" ? "Patron Tequila" : person === "school counselor" ? "Anything with Alcohol" : person === "programmer" ? "Hipster Craft Beer" : person === "bike gang member" ? "Moonshine" : person === "politician" ? "Your tax dollars" : person === "rapper" ? "Cristal" : "Beer"

// Else/If
    // if(person === jabroni){
    //     return "Patron Tequila"
    // }else if(person === "school counselor"){
    //     return "Anything with Alcohol"
    // }else if(person === "programmer"){
    //     return "Hipster Craft Beer"
    // }else if(person === "bike gang member"){
    //     return "Moonshine"
    // }else if(person === "politician"){
    //     return "Your tax dollars"
    // }else if(person === rapper){
    //     return "Cristal"
    // }else{
    //     return "Beer"
    // }