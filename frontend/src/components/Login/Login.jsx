import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginInpField, loginSchema } from "./constantLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [inpData, setInpData] = useState({
    email: "",
    password: "",
  });
  const submitForm = async (formValues) => {
    try {
      console.log(formValues);
      setInpData(formValues);
      const { email, password } = formValues;
      // using axios
      const userLogData = await axios.post("/login", {
        email,
        password,
      });
      if (userLogData.status === 400 || !userLogData) {
        alert("Invalid Credentials !");
        console.log("Invalid Credentials !");
      } else {
        alert("Login Successfully ");
        console.log("Login Successfully ");
        navigate("/");
      }
      // const fetchLogin = fetch("/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // });
      // // const fetchLoginData = await fetchLogin.json();
      // if (fetchLogin.status === 404 || !fetchLogin) {
      //   console.log("Invalid Credientials...");
      //   alert("Invalid Credientials...");
      // } else {
      //   console.log("Login Successfully...");
      //   alert("Login Successfully...");
      //   //when login naviage to home page
      //   navigate("/");
      // }

      // const resLoginData = await fetchLogin.json();
      // if (resLoginData.status === 400 || !resLoginData) {
      //   alert("Invalid Credentials !");
      //   console.log("Invalid Credentials !");
      // } else {
      //   alert("Login Successfully ");
      //   console.log("Login Successfully ");
      //   navigate("/");
      // }
    } catch (error) {
      console.log(`ERROR(in login); ${error}`);
    }
  };

  return (
    <>
      <div className="container  ">
        <div className="row SIGNUP_ROW d-flex flex-column justify-content-center align-items-center">
          <div className="col-12 SIGNUP_COL p-5">
            <h2 className="text-center text-primary mb-5">Log In</h2>
            <Formik
              initialValues={inpData}
              validationSchema={loginSchema}
              onSubmit={submitForm}
            >
              {(formik) => {
                const { handleChange, dirty, isValid, isSubmitting } = formik;
                return (
                  <Form method="POST">
                    {loginInpField.inpField.map((inputs, index) => {
                      const { name, type, palceHolder, label_Icon } = inputs;
                      return (
                        <div key={index}>
                          {/* for input fields */}
                          <div className="col-10 m-auto col-md-6 mt-2 d-flex  justify-conttent-center align-items-center ">
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
                    {/* button */}
                    <div className="col-10 m-auto col-md-6 text-center mt-4 ">
                      <button
                        type="submit"
                        className={`btn btn-success btn-outline-primary text-dark w-50 `}
                        disabled={!(dirty && isValid)}
                      >
                        {isSubmitting ? "Please Wait..." : "LogIn"}
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

export default Login;
