let users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //prevent user from joining same room using same name as an existing user, prevents user from joining room where username is taken already.
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return {
      error: "Username is taken",
    };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

const getUser = () => {};
const getUsersInRoom = () => {};
