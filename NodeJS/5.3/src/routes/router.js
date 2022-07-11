import { Router } from 'express';
import { getUser } from '../controller/getUser';
import { createUser } from '../controller/createUser';
import { removeUser } from '../controller/removeUser';
import { updateUser } from '../controller/updateUser';
import { autoSuggest } from '../controller/autoSuggest';
import { validateUser } from '../middleware/validateUser';
import { validateExistingUser } from '../middleware/validateExistingUser';


export const router = Router();

router.get('/getUser/:id', getUser);
router.post('/createUser', validateUser, createUser);
router.delete('/removeUser/:id', removeUser);
router.put('/updateUser/:id', validateExistingUser, updateUser);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', autoSuggest);
