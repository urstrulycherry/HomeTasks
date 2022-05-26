import { users } from '../../db/data';

export const removeUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex].isDeleted = true;
        res.json({ message: 'Successfully deleted user' });
        return;
    }
    res.status(400).json({ message: 'Failed to delete user' });
};
