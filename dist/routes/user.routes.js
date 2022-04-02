"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var user_controller_1 = require("../controllers/user.controller");
router.get('/users', user_controller_1.getUsers);
router.post('/users', user_controller_1.createUsers); //  Crear
router.get('/users/:id', user_controller_1.getUser);
router.put('/users/:id', user_controller_1.updateUser); //   Actualizar
router.delete('/users/:id', user_controller_1.deleteUser);
exports.default = router;
