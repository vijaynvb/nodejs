
use('todoapp') // db object which i can work with 

// db.createCollection('todos')

// db.todo.drop()

// db.todos.insertOne({
//   task: "Buy groceries",
//   completed: false
// })

// Create multiple documents
// db.todos.insertMany([
//   {
//     task: "Finish project",
//     completed: false
//   },
//   {
//     task: "Exercise",
//     completed: true
//   }
// ])

// get all documents
// db.todos.find()

// filter documents 
// db.todos.find({ completed: true })

// update documents
// db.todos.updateOne(
//   { task: "Buy groceries" },
//   { $set: { completed: true } }
// )

// update multiple documents
// db.todos.updateMany(
//   { completed: true },
//   { $set: { completed: false } }
// )

//db.todos.deleteOne({ task: "Exercise" })

//db.todos.deleteMany({ completed: false })

//db.todos.find({ tags: { $eq: ["work"] } })

//db.products.find({ price: { $gt: 10 } })

//db.todos.find({ task: { $nin: ["Exercise", "Read a book" ]} })

// db.todos.find({completed: {$not:{$eq: true }}})

//db.todos.find({ dueDate: { $type: 'number' } })

// db.todos.updateOne(
//   { _id: ObjectId("6511523a732875872d2585a7") },
//   { $push: { tasks: "New task" } }
// )

// selection -> records -> documents
// projection -> columns -> fields 

//db.users.find({}, {  "address.city": 0 })

//db.users.find({}, { name: 1, email: 1 }).skip(3).limit(5)
