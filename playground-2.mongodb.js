

use('todoapp')

// db.articles.insertMany([
//     {
//       "author": "Alice",
//       "comments": [
//         {
//           "commenter": "Bob",
//           "text": "Great article! Thanks for sharing."
//         },
//         {
//           "commenter": "Carol",
//           "text": "I found this very informative."
//         },
//         {
//           "commenter": "David",
//           "text": "Looking forward to more articles from you!"
//         }
//       ]
//     },
//     {
//       "author": "Eve",
//       "comments": [
//         {
//           "commenter": "Frank",
//           "text": "Excellent read!"
//         }
//       ]
//     },
//     {
//       "author": "Grace",
//       "comments": []
//     }
//   ])

//db.articles.find({ comments: { $exists: true } })

db.todos.aggregate([
  {
    $group: {
      _id: "$completed",
      totalTasks: {
        $sum: 1
      }
    }
  }
])