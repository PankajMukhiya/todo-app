import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SignupInpField, signupSchema } from "./constSignupData";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  //when form submitted
  const submitForm = async (formValues) => {
    try {
      // console.log(formValues.name);
      setInputValue(formValues);

      const { name, email, password, cPassword } = formValues;
      let postRes = await fetch(
        "/signup",
        // "https://mytodoapp-83589-default-rtdb.firebaseio.com/userdb.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            cPassword,
          }),
        }
      );
      const response = await postRes.json();
      // if (response.status === 422 || !response) {
      if (postRes.status === 422 || !response) {
        alert("Invalid Sign Up, Please SignIn Using Valid Credientials");
        console.log("Invalid Sign Up, Please SignIn Using Valid Credientials");
      } else {
        alert(" Sign Up Successfully");
        console.log(" Sign Up Successfully Done...!");
        console.log(response.user)
        navigate("/login");
      }
    }  catch (error) {
      console.log(`ERROR(in signin); ${error}`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row SIGNUP_ROW d-flex flex-column justify-content-center align-items-center">
          <div className="col-12 SIGNUP_COL p-5">
            <h2 className="text-center text-primary mb-5">Sign Up</h2>
            <Formik
              initialValues={inputValue}
              validationSchema={signupSchema}
              onSubmit={submitForm}
            >
              {(formik) => {
                const { handleChange, isValid, dirty, isSubmitting } = formik;
                return (
                  <Form method="POST">
                    {SignupInpField.inpField.map((inputs, index) => {
                      const { name, palceHolder, type, label_Icon } = inputs;
                      return (
                        <div key={index}>
                          {/* for input fields */}
                          <div className="col-10 col-md-6 mx-auto mt-2 d-flex justify-content-center align-items-center ">
                            <label
                              htmlFor=""
                              className="form-label me-2 "
                              style={{ fontSize: "1.8rem" }}
                            >
                              <i className={label_Icon}></i>
                            </label>
                            <Field
                              className="form-control"
                              placeholder={palceHolder}
                              name={name}
                              type={type}
                              onChange={handleChange}
                            />
                          </div>
                          {/* for error message */}
                          <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                            <ErrorMessage name={name} />
                          </div>
                        </div>
                      );
                    })}
                    {/*AFTER THE INPUT FIELDS END THEN BUTTON ADD */}

                    {/* submit button */}
                    <div className="col-10 m-auto col-md-6 text-center mt-4  ">
                      <button
                        type="submit"
                        className={`btn btn-primary btn-outline-success text-dark w-50 mb-3`}
                        disabled={!(dirty && isValid)}
                      >
                        {isSubmitting ? "Please Wait..." : "SignUp"}
                        {/* LogIn */}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
