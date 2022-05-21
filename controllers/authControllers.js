const register = async (req, res) => {
  await res.send("register user");
};
const login = async (req, res) => {
  await res.send("login user");
};
const updateUser = async (req, res) => {
  await res.send("updateUser");
};

export { register, login, updateUser };
