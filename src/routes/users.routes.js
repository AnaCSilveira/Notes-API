const { Router } = require("express");

const usersController = require("../controllers/usersController")

const usersRoutes = Router();

const UserController = new usersController()

usersRoutes.post("/", UserController.creat);

module.exports = usersRoutes;
