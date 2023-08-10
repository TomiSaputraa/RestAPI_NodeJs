const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

// create
router.post("/", usersController.createUser);

// read
router.get("/", usersController.getAllUsers);

// read by id
router.get("/:id", usersController.getUserById);

// update
router.patch("/:id", usersController.updateUser);

//delete
router.delete("/:id", usersController.deleteUser);

module.exports = router;
