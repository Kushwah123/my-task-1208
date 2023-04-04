import User from '../model/user.js';
import Task from '../model/task.js';
import { request, response } from 'express';



export const Userlogin = async (request, response) => {

    try{
        const email = request.body.email;
        const password = request.body.password;
        const user = await User.findOne({email: email, password: password});
         console.log('user', user)
        if(email){
         return response.status(200).json(`${email}`);
        }else{
         return response.status(401).json('invalid login');
        }
   }catch(error){
          response.status(500).json('error', error.message);
   }
}

// Get all users
export const getUsers = async (request, response) => {
    // Step -1 // Test API
    
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
export const getTask = async (request, response) => {
    // Step -1 // Test API
    
    try{
        // finding something inside a model is time taking, so we need to add await
        const task = await Task.find();
        response.status(200).json(task);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addUser = async (request, response) => {
    // retreive the info of user from frontend
    const user = request.body;
    console.log("inside")

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const addtask = async (request, response) => {
    // retreive the info of user from frontend
    const task = request.body;
    console.log("inside")

    const newTask = new Task(task);
    try{
        await newTask.save();
        response.status(201).json(newTask);
        console.log(newTask)
    } catch (error){
        response.status(409).json({ message: error.message}); 
        console.log('task not responding')   
    }
}

// Get a user by id
export const gettaskById = async (request, response) => {
    try{
        const task = await Task.findById(request.params.id);
        response.status(200).json(task);
        console.log(task)
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited task in the database
export const edittask = async (request, response) => {
    let task = await Task.findById(request.params.id);
    task = request.body;
    console.log(task)
    const edittask = new Task(task);
    try{
        await Task.updateOne({_id: request.params.id}, edittask);
        response.status(201).json(edittask);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deletetask = async (request, response) => {
    try{
        await Task.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}