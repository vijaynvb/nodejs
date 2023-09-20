// promise

/* contract -> promise

person 1 [invoker]                             ->              person 2 [Maker]
i will give a task to complet do that for me         ok i will do it, after doing what sould i do?
i will have success and failuer handlers            success -> resolve 
whom you can call                                   failuer -> reject 

*/
// weather station -> station which give some data, end user who takes the data 

function getWheather(){
    return new Promise((resolve, reject) =>{
        // complete a task and give the response
        if(true)
            resolve("cloudy");
        else
            reject("No weather in formation");
    })
}

// clothing 
function getAttireInfo(weather){
    return new Promise((resolve,reject) => {
        if(weather === 'cloudy')
            resolve("raincoat");
        else
            reject("not configured")
    })
}

// const endUser = getWheather();
// endUser.then(success => console.log(`success ${success}`))
//         .catch(error => console.log(`error ${error}`))

// variations 

// getWheather().then(success => console.log(`success ${success}`), 
//                     error => console.log(`error ${error}`));

function onSuccess(){

}
function onError(){
    
}

//getWheather().then(onSuccess, onError);

// chaning of tasks using multiple then methods 

getWheather().then(getAttireInfo).then(data => console.log("clothing is " + data));