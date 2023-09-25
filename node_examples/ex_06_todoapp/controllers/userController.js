
// db activites 

const getUsers = async (req,res) => {
    res.send("get all users");
}

const getById = async (req,res) => {
    res.send("get a single user");
}

const addUser = async (req,res) => {
    res.send("get a single user");
}
module.exports = {getUsers, getById, addUser}