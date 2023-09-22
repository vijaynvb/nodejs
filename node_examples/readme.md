
 mymodule 
x[major].y[minor].z[patch/bugfix] 
1.1.1-beta+001
2.0.0

alfa - expect bugs in the implementation
beta - fully tested try finding bugs 
rc - full tested 



myproject -> mymodule 
x = breaking chages 
y = new features added 
z = bug fixes 

^1.y.z 
~1.2.z 

1. http request message [structure] will contain?
    1. method 
    2. host - server 
    3. headers 
    4. version of http 1.1
    5. body - optional 

2. http response message?
    1. status code -> 200,201 404 100,200,300,400,500
    2. http version 
    3. headers 
    4. body 


1. http -> 3
2. micrservices -> 6
3. rest principles -> 6 

employee ms -> rest resource -> DDD -> M -> models
    1. employee 
        name 
        id 
        age 
        department 
    2. department 
    3. address 
    ....

resournces should be plural 

url = 
scheme://ip:port/api/v1/path2resource/resource/pathvariable?queryparams = pagination or filter or sorting 
http or https 

-> crud [get, post, put/patch, delete]

get all employees ->  get http://localhost:8080/api/v1/employees = headers Accept = "application/json", "application/xml"
                                                                           content-type =  "application/json"
                      200 
get one employee -> get http://localhost:8080/api/v1/employees/10 
                      204

create a employee -> post http://localhost:8080/api/v1/employees 

update a employee -> put http://localhost:8080/api/v1/employees/10 + full object update {full object will be given}
                     patch http://localhost:8080/api/v1/employees/10 + select field update {name: reddy} 

Delete a emplpyee -> delete http://localhost:8080/api/v1/employees/10 

what all methods used for a given resource -> options http://localhost:8080/api/v1/employees { post, get, delete}
 
get only headers ->  head http://localhost:8080/api/v1/employees -> header of http firewall 

performance monitoring -> trace http://localhost:8080/api/v1/employees -> which server am i getting the respose from and how many hops 

Rest -> data formats for communication ->
    1. json 
    2. xml

content negotiation [client and server] -> headers accept and content-type