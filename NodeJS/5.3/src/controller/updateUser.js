import { users } from '../../db/data';

export const updateUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1 || users[userIndex].isDeleted) {
        res.status(400).json({ message: 'User not found' });
        return;
    }
    users[userIndex] = req.body;
    res.json({ message: 'Successfully updated user' });
};
