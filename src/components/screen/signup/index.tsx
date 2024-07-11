"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { SignUpSchema } from "@/helper/validation/authValidation";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpForm = ({ setActiveTab }: any) => {
  const [password, setpassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const onSubmit = async (values: any, { setSubmitting }: any) => {
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
      if (response?.data?.success) {
        setActiveTab("login");
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
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
