"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (values: any, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://20.218.120.21:8000/api/auth/login",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form style={{ paddingTop: "100px" }}>
          <div className="inputWrapper">
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              className="inputBox"
            />
            <ErrorMessage name="username" component="p" className="error" />
          </div>

          <div className="inputWrapper">
            <Field
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="inputBox"
            />
            {values.password && (
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  src={
                    showPassword
                      ? "/images/eye-icon.png"
                      : "/images/hide-password.png"
                  }
                  width={20}
                  height={20}
                  alt="eye-icon"
                />
              </span>
            )}
            <div className="forget-paswword">
              <div>
                <ErrorMessage name="password" component="p" className="error" />
              </div>
              <p>Forget password?</p>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
