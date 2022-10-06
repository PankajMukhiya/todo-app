import * as Yup from "yup";

// validation schena
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address...!")
    .required("Email is Required !"),
  password: Yup.string().required("Password is Required !"),
  // .min(8, "Password atleast 8 Characters"), // no required for this min ()
});

// LOGIN INPUT FIELDS
export const loginInpField = {
  inpField: [
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
      // value: `${v}`
    },
  ],
};
