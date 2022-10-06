import * as Yup from "yup";

// validation schena
export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .max(30, "Your Name is Too Long...")
    .required("Name is Required !"),
  email: Yup.string()
    .email("Invalid Email Address...!")
    .required("Email is Required !"),
  password: Yup.string()
    .required("Password is Required !")
    .min(8, "Password is Too Short...")
    .max(26, "Your Password is Too Long..."),
  cPassword: Yup.string()
    .required("Confirm Password is Required !")
    .oneOf([Yup.ref("password")], "Password does not Match..."),
});

// LOGIN INPUT FIELDS
export const SignupInpField = {
  inpField: [
    {
      name: "name",
      type: "text",
      palceHolder: "Your Name",
      label_Icon: "fa-solid fa-user",
    },
    {
      name: "email",
      type: "email",
      palceHolder: "Your Email",
      label_Icon: "fa-solid fa-envelope",
    },
    {
      name: "password",
      type: "password",
      palceHolder: "Your Password",
      label_Icon: "fa-solid fa-lock",
    },
    {
      name: "cPassword",
      type: "password",
      palceHolder: "Your Confirm Password",
      label_Icon: "fa-solid fa-lock",
    },
  ],
};
