import { users } from '../../db/data';

function getAutoSuggestUsers(loginSubstring, limit) {
    const res = users.filter(user => !user.isDeleted)
        .filter(user => user.login.includes(loginSubstring))
        .sort((user1, user2) => user1.login.localeCompare(user2.login))
        .slice(0, limit);
    return res;
}

export const autoSuggest = (req, res) => {
    const result = getAutoSuggestUsers(req.params.loginSubstring, req.params.limit);
    res.status(200).json(result);
};

