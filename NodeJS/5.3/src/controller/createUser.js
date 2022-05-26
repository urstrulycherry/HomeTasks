import { users } from '../../db/data.js';

export const createUser = (req, res) => {
    const user = req.body;
    user.isDeleted = false;
    user.age = parseInt(user.age, 10);
    if (users.find(u => u.id === user.id)) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    if (users.length !== users.push(user)) {
        res.json({ message: 'Successfully created user' });
    } else {
        res.status(400).json({ message: 'Failed to create user' });
    }
};
