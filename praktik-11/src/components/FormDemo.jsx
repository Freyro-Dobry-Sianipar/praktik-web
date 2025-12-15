import React from 'react';
import useForm from '../hooks/useForm';

function FormDemo() {
  const loginForm = useForm({
    username: '',
    password: '',
    rememberMe: false
  });

  const profileForm = useForm({
    name: '',
    email: '',
    age: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginForm.values);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data:', profileForm.values);
  };

  return (
    <div className="form-demo">
      <div className="form-group">
        <h3>Login Form</h3>
        <form onSubmit={handleLoginSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
          />
          <label>
            <input
              name="rememberMe"
              type="checkbox"
              checked={loginForm.values.rememberMe}
              onChange={(e) => loginForm.setValue('rememberMe', e.target.checked)}
            />
            Remember me
          </label>
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="form-group">
        <h3>Profile Form</h3>
        <form onSubmit={handleProfileSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={profileForm.values.name}
            onChange={profileForm.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={profileForm.values.email}
            onChange={profileForm.handleChange}
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={profileForm.values.age}
            onChange={profileForm.handleChange}
          />
          <button type="submit">Save Profile</button>
        </form>
      </div>

      <p className="demo-note">
        ✅ Reusable form logic across multiple forms
      </p>
    </div>
  );
}

export default FormDemo;