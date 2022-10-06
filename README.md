This is the link of project where you can preview : 
   https://todo-app-ng6c.onrender.com/
Deploy on RENDER APP

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- 
  "proxy": "http://localhost:3333",
   -->


<!-- 
<Form>
                {/* _____________________ name input __________________________________*/}
                <div className="col-10 m-auto col-md-6 d-flex  justify-conttent-center align-items-center fs-5">
                  <label htmlFor="" className="form-label me-2 ">
                    <i className="fa-solid fa-user"></i>
                  </label>
                  <Field
                    className="form-control"
                    placeholder=" Your Name"
                    name="name "
                    type="text"
                    // value={userInput.name}
                    // onChange={handleInput}
                  />
                </div>
                {/* error meassage */}
                <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                  <ErrorMessage name="name" />
                </div>
                {/*__________________________________ name input __________________________________*/}
                {/* _________________________________________________________________________________ */}
                {/* _____________________ EMAIL INPUT __________________________________*/}
                <div className="col-10 m-auto col-md-6 d-flex  justify-conttent-center align-items-center fs-5">
                  <label htmlFor="" className="form-label me-2 ">
                    <i className="fa-solid fa-envelope"></i>
                  </label>
                  <Field
                    className="form-control"
                    placeholder=" Your Email"
                    name="email "
                    type="email"
                    // value={userInput.name}
                    // onChange={handleInput}
                  />
                </div>
                {/* error meassage */}
                <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                  <ErrorMessage name="email" />
                </div>
                {/*__________________________________ name input __________________________________*/}
                {/* _________________________________________________________________________________ */}
                {/* _____________________PASSWORD INPUT __________________________________*/}
                <div className="col-10 m-auto col-md-6 d-flex  justify-conttent-center align-items-center fs-5">
                  <label htmlFor="" className="form-label me-2 ">
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <Field
                    className="form-control"
                    placeholder=" Your Password"
                    name="password "
                    type="password"
                    // value={userInput.name}
                    // onChange={handleInput}
                  />
                </div>
                {/* error meassage */}
                <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                  <ErrorMessage name="password" />
                </div>
                {/*__________________________________PASSWORD INPUT __________________________________*/}
                {/* _________________________________________________________________________________ */}
                {/* _____________________ GENDER INPUT __________________________________*/}
                <div className="col-10 m-auto col-md-6 d-flex  justify-conttent-center align-items-center fs-5 mt-2">
                  <Field name="gender" component="select" class="form-select">
                    <option disabled value="Plesse Select Your Gender">
                      Plesse Select Your Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                </div>
                {/* error meassage */}
                <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                  <ErrorMessage name="gender" />
                </div>
                {/*____________________________________________________________________*/}
                {/* _________________________________________________________________________________ */}
                {/* _____________________ TERM AND CONDITIONS INPUT __________________________________*/}
                <div className="col-10 m-auto col-md-6 d-flex  justify-conttent-center align-items-center fs-5 mt-2">
                  <div class="form-check">
                    <Field
                      name="termAndCondition"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label">
                      I accept Terms and Conditions
                    </label>
                  </div>
                </div>
                {/* error meassage */}
                <div className=" col-8 m-auto col-md-5 text-danger mb-2">
                  <ErrorMessage name="termAndCondition" />
                </div>
                {/*____________________________________________________________________*/}
                {/* _________________________________________________________________________________ */}
                {/* button */}
                <div className="col-10 m-auto col-md-6 text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-success btn-outline-primary text-light  border-0 w-50"
                  >
                    SigUp
                  </button>
                </div>
              </Form>

 -->
