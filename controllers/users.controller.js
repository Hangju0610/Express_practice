const model = require('../models/users.model');

const getUsers = function (req, res) {
    res.json(model);
};

const getUser = function (req, res) {
    const userId = Number(req.params.userid);
    const user = model[userId];
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const postUser = function (req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            // return을 꼭 넣어줘야 한다. 안그러면 밑에 있는 코드도 실행되기 때문
            error: 'Missing user name',
        });
    }

    const newUser = {
        name: req.body.name,
        id: model.length,
    };
    model.push(newUser);
    res.json(newUser);
};

module.exports = {
    getUsers,
    getUser,
    postUser,
};
