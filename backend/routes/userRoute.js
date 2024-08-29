const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUser, deleteUser, updateUser} = require('./../handellers/userHandler');

router.post('/users', async (req, res) => {
    //user add operation
    let user = await addUser(req.body);
    console.log("Received user data:", req.body);
    res.send(user);
})

router.get('/users', async (req, res) => {
    let users = await getUsers();
    res.status(201).send(users);
})

router.get('/users/:id', async (req, res) => {
    console.log("id", req.params['id']);
    let users = await getUser(req.params['id']);
    res.status(201).send(users);
})

router.put('/users/:id', async(req, res) => {
    console.log("id", req.params['id']);
    try {
        await updateUser(req.params['id'], req.body);
        res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
})

router.delete('/users/:id', async (req, res) => {
    console.log("id", req.params['id']);
    await deleteUser(req.params['id']);
    res.send({});
})

module.exports = router;