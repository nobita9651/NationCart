import React, { useState, useCallback } from "react";
import "./Signin.css";
import "./Loader.css";
import {
  LinkedIn,
  Instagram,
  GitHub,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import CheckboxTest from "./toggle";
import { auth } from "./firebase1";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [termsChecked, setTermsChecked] = useState(false);
  //   const [isTosChecked, setIsTosChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!termsChecked) {
      newErrors.terms = "You must agree to the Terms and Conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Signing in with data:", formData);
  };
  const loginn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigateToHome();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator
      });
  };
  const register = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigateToHome();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator
      });
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  const navigateToForgotPass = () => {
    window.location.href = "/forgot-password";
  };

  //   const navigateToSignup = () => {
  //     window.location.href = "/Signup";
  //   };

  return (
    <div className="SignIn">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <img
        className="login_logo"
        src="/nat_logo.png"
        alt="Nation Cart"
        onClick={navigateToHome}
      />

      <div className="sign-in-form animated-form">
        <h2 className="animate__animated animate__fadeIn">Sign In</h2>
        <hr className="horizontal-line" />
        <form
          onSubmit={handleSignIn}
          className="animate__animated animate__fadeIn"
        >
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              className="password-toggle-button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="forgotpass" onClick={navigateToForgotPass}>
            Forgot Password?
          </div>
          <CheckboxTest
            checked={termsChecked}
            onCheck={(isChecked) => setTermsChecked(isChecked)}
          />
          <button type="submit" onClick={loginn}>
            Sign In
          </button>
        </form>
        <div className="options">
          <span className="dont-have-an">Don’t have an account? </span>
          <span className="register-here" onClick={register}>
            Register here
          </span>
        </div>
      </div>
      <div className="social-icons-left">
        <a
          href="https://www.linkedin.com/in/abhishek-dubey-381378154/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
        <a
          href="https://instagram.com/mr.abhi_27?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram fontSize="large" />
        </a>
        <a
          href="https://github.com/nobita9651"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://x.com/abhishe95328571"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default SignIn;
