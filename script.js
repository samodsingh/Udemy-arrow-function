 let calcAge2 = function(birthYeah){
     return 2037- birthYeah;
 }
 //console.log(calcAge2(10).>> test function

 // Arrow function
 const calcAge3 = birthYeah => 2037 - birthYeah;
 const age3 = calcAge3(1991);
 console.log(age3);

 const calcAge4 = (birthYeah, firstName) =>{
     const age  = 2037 - birthYeah;
     const retirement= 65-age;
    //  return retirement;
    return `${firstName} retires in ${retirement}years`;
 }
 console.log(calcAge4 (1991,'samod'));
 console.log(calcAge4 (1960,'Umesh'));

 