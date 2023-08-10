const usersModel = require("../models/usersModel");

// create
exports.createUser = async (req, res) => {
  try {
    await usersModel.createUser(req.body);
    res.status(201).json({
      message: "create new user succes",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "error creating user",
      error: error.message,
    });
  }
};

// read
exports.getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllData();
    res.json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get all data",
      error: error.message,
    });
  }
};

//
exports.getUserById = async (req, res) => {
  try {
    const [user] = await usersModel.getUserById(req.params.id);
    res.status(200).json({
      message: "succes get user by id",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get user by id data",
      error: error.message,
    });
  }
};

// update
exports.updateUser = async (req, res) => {
  try {
    await usersModel.updateUser(req.body, req.params.id);
    res.json({
      message: "succes update user",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "error get all data",
      error: error.message,
    });
  }
};

// delete
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await usersModel.deleteUser(id);
    res.json({
      message: "berhasil delete user",
      userId: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "error delete user",
      error: error.message,
    });
  }
};
