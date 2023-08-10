const dbPool = require("../config/db");

exports.getAllData = () => {
  const query = "SELECT * FROM usersapi.users;";

  return dbPool.execute(query);
};

exports.getUserById = (id) => {
  const query = `select * from usersapi.users where id =${id};`;
  return dbPool.execute(query);
};

exports.createUser = (body) => {
  const query = `insert into users(name,email,address) VALUES ("${body.name}","${body.email}","${body.address}");`;

  return dbPool.execute(query);
};

exports.updateUser = (body, id) => {
  const query = `UPDATE users 
    SET name="${body.name}", email="${body.email}", address="${body.address}"
    WHERE id=${id}`;
  return dbPool.execute(query);
};

exports.deleteUser = (id) => {
  const query = `DELETE FROM users WHERE id = ${id}`;
  return dbPool.execute(query);
};
