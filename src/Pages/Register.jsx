import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [regisFormData, setRegisFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisFormData({ ...regisFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (regisFormData.password !== regisFormData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {

      const res = await fetch("https://todo-list-app-backend-production-622b.up.railway.app/login_users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: regisFormData.name,
          email: regisFormData.email,
          password: regisFormData.password
        })
      });

      const data = await res.json();

      setMessage(data.message);

      if (data.success) {
      localStorage.setItem("isAuth", "true")
      navigate("/dashboard")
    }

    } catch (error) {
      console.log(error);
    }

    setRegisFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow-lg p-4">

            <h3 className="text-center mb-4">Student Registration</h3>

            {message && (
              <div className="alert alert-info">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary w-100">
                Register
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
