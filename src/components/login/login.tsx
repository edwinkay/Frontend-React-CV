import React from "react";

function Login() {
    return (
      <section className="login">
        <section className="login-container">
          <h2>Log in</h2>
          <form className="login-form-container">
            <input className="input" type="text" placeholder="email" />
            <input className="password" type="password" placeholder="password" />
            <button type='submit'>login</button>
          </form>
        </section>
      </section>
    );
}
export default Login