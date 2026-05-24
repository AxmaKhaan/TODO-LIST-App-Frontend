import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import '/src/Login.css'

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(""); // ✅ error state

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError(""); // optional: clear error while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://todo-list-app-backend-production-622b.up.railway.app/login_users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("isAuth", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password ❌"); // ✅ show error
      }
    } catch (error) {
      setError(error); // network error
    }
  };
    // try {
    //       const response = await fetch("https://todo-list-app-backend-production-622b.up.railway.app/login_users/login", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       });

    //       const result = await response.json();
    //       console.log(result);

    //     } catch (error) {
    //       console.log("Error:", error);
    //     }


  //   

  return (
    <>
      <main className='login_main'>
        <section className="global_style_sect login_hero_section">
          <div className="container">
            <div className="form">
              <form action="" onSubmit={handleSubmit} autoComplete='on'>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </div>
                {error && <p className="error-text">{error}</p>}
                <div className="form-actions">
                  <button type="submit">Sign In</button>
                </div>
              </form>
              

              <div className="form-footer">
                Don’t you have registered?
                <Link to="/register" className='menu_link'>Register Now</Link>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}
