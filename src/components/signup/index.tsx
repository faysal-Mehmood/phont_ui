"use client";
import React, { createContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import img from "../../assets/images/xd.jpg";
import Link from "next/link";
import axios from "axios";

const MyContext = createContext(null);

// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  const [password, setpassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://20.218.120.21:8000/api/auth/signup",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className="space-y-4">
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
              type="email"
              id="email"
              name="email"
              placeholder="Mail"
              className="inputBox"
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>
          <div className="inputWrapper">
            <Field
              type={password ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="inputBox"
            />
            {values.password && (
              <span
                className="show-password"
                onClick={() => setpassword(!password)}
              >
                <Image
                  src={
                    password
                      ? "/images/eye-icon.png"
                      : "/images/hide-password.png"
                  }
                  width={20}
                  height={20}
                  alt="eye-icon"
                />
              </span>
            )}
            <ErrorMessage name="password" component="p" className="error" />
          </div>
          <div className="inputWrapper">
            <Field
              type={confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="inputBox"
            />
            {values.confirmPassword && (
              <span
                className="show-password"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                <Image
                  src={
                    confirmPassword
                      ? "/images/eye-icon.png"
                      : "/images/hide-password.png"
                  }
                  width={20}
                  height={20}
                  alt="eye-icon"
                />
              </span>
            )}
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="error"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
