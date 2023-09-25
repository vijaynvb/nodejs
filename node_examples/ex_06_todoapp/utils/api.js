const createError=(error,detail) =>{
    if(detail) 
        return {error,detail};
    else 
        return { error}
}

const createResponse = (message,detail) =>{
    if(detail) 
        return {message,detail};
    else 
        return { message }
}

module.exports = {createError, createResponse}