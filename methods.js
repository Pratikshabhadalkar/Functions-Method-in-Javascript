let userDetails=
{
    name:"pratiksha bhadalkar",
    Age :22,
    Desigination:"MERN stack developer",
}
let userDetails2=
{
    name:"PAYAL bhadalkar",
    Age :21,
    Desigination:"MEAN stack developer",
    
}

    let printDetails=function(city,state)
    {
        console.log(this.name+" "+city+" "+state)
    }
       
//apply
printDetails.apply(userDetails,["sangli",'maharashtra']);

//call
printDetails.call(userDetails2,"sangli",'maharashtra')  

//bind
let newFun=printDetails.bind(userDetails,"sangli",'maharashtra');
newFun()