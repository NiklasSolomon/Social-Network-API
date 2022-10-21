# Social-Network-API
## Goal:
The goal of the project is to create an API for a social network using Mongoose, MongoDB and Express.js that can deal with large amounts of data. The API should be able to create, read, update, and delete users and their thoughts, create and delete associations between users as friends, and create and delete reactions to user thoughts.  
## How:
The API is created using models and controllers for the users and thoughts. The models indicate information for the users including username and email. Models for the thoughts associate each one with a specific user, and are able to be interacted with using schema. Routes will be built to CRUD standards.  
## Result:
The routes for each model allow us to GET all users and thoughts, GET a user or thought by their ID, CREATE a new user or thought, UPDATE a user or thought, and DELETE a user or thought. We are able to ADD a friend or reaction and DELETE a friend or reaction.  

![Gif of functioning application](./Assets/Social%20Network%20API%20Demonstration.gif)  

[Link to screencastify tutorial](https://drive.google.com/file/d/1nNQGMk5KK5_eZPh6C0B_whbp_1WybvmK/view)  

[Link to Github Repository](https://github.com/NiklasSolomon/Social-Network-API)