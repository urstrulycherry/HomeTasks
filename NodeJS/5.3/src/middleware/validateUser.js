import { userSchema } from '../schema/userSchema';
import { users } from '../../db/data';

export const validateUser = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }
    user.isDeleted = false;
    user.age = parseInt(user.age, 10);
    if (users.find(u => u.id === user.id)) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    next();
};
