"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import loginAction from "../../../store/action/user";
import { toast } from "react-toastify";

// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (values, { setSubmitting }) => {
    // const res = await loginAction(values);
    // router.push("/basics");
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
      if (response.data.success) {
        localStorage.setItem("auth_token", response?.data?.data?.token);
        router.push("/basics");
      }
      // Handle successful login (e.g., redirect)
    } catch (error) {
      toast.error("Invalid  Email/Password");
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
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
              id="email"
              name="email"
              placeholder="Name"
              className="inputBox"
            />
            <ErrorMessage name="email" component="p" className="error" />
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
              <span>Forget password?</span>
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
