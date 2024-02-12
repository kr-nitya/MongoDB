import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js";
import connect from "./connection.js";
//Insert Method 1
// const article = new Blog({
//   title: 'Awesome Post!',
//   slug: 'awesome-post',
//   published: true,
//   content: 'This is the best post ever',
//   tags: ['featured', 'announcement'],
// });
// await article.save();
//Insert Method 2
// const articleData = {
//   title: "New Adventure in Tech World",
//   slug: "new-adventure-in-tech-world",
//   published: true,
//   content: "Exploring the latest trends and innovations in the tech industry.",
//   tags: ["technology", "innovation", "trends"],
// };
// const article = await Blog.create(articleData);
// console.log(article);
//Select Method
//First Element
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);
// //Fetch by ID
// const data = await Blog.findById("65c9dcf954b807ad0b11ab76").exec();
// console.log("Data By ID:",data);
// //Fetch Given Fields
// const title = await Blog.findById("65c9dcf954b807ad0b11ab76","title").exec();
// console.log("Title : ",title);
// //Fetch all
// const all = await Blog.find();
// console.log("All data : ",all);
// //Delete data

// const deleteblog = await Blog.deleteOne({ title:"Awesome Post!" })
// console.log("Delete Blog : ",deleteblog)

// // const deleteblog1 = await Blog.deleteMany({ author: "Jesse Hall" })
// // console.log(deleteblog1)

// //exists
// const result = await Blog.exists({ author: "Jesse Hall" })
// console.log("Result = ",result)

// //Select using where
// const blog = await Blog.where("title").equals("New Adventure in Tech World").select("author")
// console.log("Where = ",blog);

//Use of populate
// Create a new user
// const newUser = new User({
//     username: 'john_doe',
//     email: 'john.doe@example.com',
//     password: 'password123',
//     createdAt: new Date()
//   });
//   await newUser.save();
  
//   // Create a new blog post
//   const newBlog = new Blog({
//     title: 'Example Blog Post',
//     slug: 'example-blog-post',
//     published: true,
//     author: newUser._id, // Assign the user's ObjectId as the author
//     content: 'This is an example blog post content.',
//     tags: ['example', 'blog', 'post'],
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     comments: [
//       { user: 'Alice', content: 'Great post!', votes: 5 },
//       { user: 'Bob', content: 'Interesting insights.', votes: 3 }
//     ]
//   });
//   await newBlog.save();
  
//   // Query the blog post and populate the author field
//   const populatedBlog = await Blog.findOne({ title: 'Example Blog Post' }).populate('author');
//   console.log("Use of Populate = ",populatedBlog);

  //Aggregation
  const totalComments = await Blog.aggregate([
    {
      $project: {
        totalComments: { $size: "$comments" } // Calculate the size of the comments array
      }
    },
    {
      $group: {
        _id: null,
        totalComments: { $sum: "$totalComments" } // Sum up the total comments across all documents
      }
    }
  ]);
  
  console.log("Total comments across all blog posts:", totalComments[0].totalComments);
  