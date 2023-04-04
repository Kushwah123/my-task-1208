import express from 'express';
import { getUsers, addUser, gettaskById, edittask, 
    deletetask,getTask,addtask,Userlogin } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.post('/login', Userlogin);
router.get('/task', getTask);
router.post('/task', addtask);
router.get('/task/:id', gettaskById);
router.put('/task/:id', edittask);
router.delete('/task/:id', deletetask);

export default router;