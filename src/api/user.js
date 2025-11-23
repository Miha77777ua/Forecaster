const register = async (login, email, password) => {
  const response = await fetch("https://forecaster-back-96pv.onrender.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: login,
      password: password,
      email: email,
    }),
  });

  const data = await response.text();

  return data;
}

const login = async (user, password) => {
  const response = await fetch(`https://forecaster-back-96pv.onrender.com/api/${user}/${password}`);
  const data = await response.json();

  return data;
}

export default { register, login };
