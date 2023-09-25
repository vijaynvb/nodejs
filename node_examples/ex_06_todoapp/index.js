const express = require('express')
const userRouter = require("./routers/userRouter")
const app = express()

app.use("/users", userRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server running on "+ PORT)
})
