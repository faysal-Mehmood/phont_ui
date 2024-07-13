import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password") as any, null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});


