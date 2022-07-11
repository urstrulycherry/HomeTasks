import { userSchema } from '../schema/userSchema';
import { users } from '../../db/data';

export const validateExistingUser = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex === -1 || users[userIndex].isDeleted) {
        res.status(400).json({ message: 'User does not exist' });
        return;
    }
    user.isDeleted = false;
    user.age = parseInt(user.age, 10);
    next();
};
