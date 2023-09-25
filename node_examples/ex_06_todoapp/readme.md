Todo Rest API -
    1. User will login + Signup and CRUD on a user 
    2. Todo - CRUD operation 

1. implement todo rest api with signup and login 
    1. we will talk about packages 
    2. sql nosql mongodb 
        1. projections
        2. aggregates
        3. shardding theory 
    3. integrate mongodb for the application
    4. dokers


client -> request -> express -> [validate object middleware] -> deligate the request to a route [post /todos]
    {
        title:"learn js",
        description: "Learn ecmascript6"
        isCompleted: 'y' 
    }

    dto -> 
        {
            title: string
        }

    boolean 