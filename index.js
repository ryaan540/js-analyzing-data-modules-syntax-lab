




const Datejs = require('datejs');


function combineUsers(...args) {
    
    const combinedObject = {
        users: []
    };

    
    args.forEach(userArray => {
        combinedObject.users.push(...userArray);
    });

    
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

   
    return combinedObject;
}


const array1 = ["Alice", "Bob"];
const array2 = ["Charlie", "Dave"];
const array3 = ["Eve"];

console.log(combineUsers(array1, array2, array3));


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};