const users = [
    {
      id: 1,
      nom: "chapdelaine",
      email: "paulchapdelaine10@gmail.com",
      password: "1234",
    },
  ];
  
  export const addUser = (data) => {
    let id = new Date().getUTCMilliseconds();
    data.id = id;
    users.push(data);
  };
  
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
  };
  
  export const verifyUser = (user) => {
    const foundUser = (users = users.filter(
      (u) => u.email === user.email && u.password === user.password
    ));
    if (foundUser) {
      return true;
    } else {
      return false;
    }
  };