import React from "react";
import"../Login/Login.css"

const Login = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };
  return (
    <form onSubmit={handleSubmit} className="admin-login-form">
      <input
        placeholder="email"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
