/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import {
  LoginContainer,
  CheckBoxContainer,
  CheckBox,
  LoginLeftSection,
  LoginRightSection,
  LoginFormContent,
  LoginButton
} from "../styles/LoginPage.styled";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { FormValues } from "utils/model";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router-dom";
import loginImage from '../assets/images/lady_image.jpg'
import AppLogo from "components/shared/AppLogo";
import Cookies from "js-cookie";

type InitialValues = {
  email_or_id: string;
  password: string;
};

function LoginPage() {
  const { login, error } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [formInitialValues, setFormInitialValues] = useState<InitialValues>({
    email_or_id: "",
    password: "",
  });


  const initialValues: InitialValues = {
    email_or_id: "",
    password: "",
  }

  useEffect(() => {
    const rememberMeValue = Cookies.get("rememberMe");
    if (rememberMeValue === "true") {
      setRememberMe(true);
      const emailOrId = Cookies.get("email_or_id");
      const password = Cookies.get("password");
      initialValues.email_or_id = emailOrId as string;
      initialValues.password = password as string;
    }
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const user = await login({
        email_or_id: values.email_or_id,
        password: values.password,
      });

      if (rememberMe) {
        Cookies.set("rememberMe", "true", { expires: 0.00069444444 });
        Cookies.set("email_or_id", values.email_or_id, { expires: 0.00069444444 });
        Cookies.set("password", values.password, { expires: 0.00069444444 });
      } else {
        Cookies.remove("rememberMe");
        Cookies.remove("email_or_id");
        Cookies.remove("password");
      }

      if (user.role === "admin" && user.activated) {
        navigate("admin");
      } else if (user.role === "lecturer" && user.activated) {
        navigate("lecturer/dashboard");
      } else if (user.role === "student" && user.activated) {
        navigate("student-page");
      } else if (
        (user.role === "lecturer" || user.role === "student") &&
        !user.activated
      ) {
        navigate("reset");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  return (
    <LoginContainer>
      <LoginLeftSection>
        <div>
          <h3>A Git- Inspired Assignment submission system</h3>
          <img src={loginImage} alt="reset_password_image" />
        </div>
      </LoginLeftSection>

      <LoginRightSection>
        <AppLogo />
        <div>
          <LoginFormContent>
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Yup.object({
              email_or_id: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            >
              {(formik) => (
                <Form>
                  {error && <div className="error">{errorMsg}</div>}
                  <label htmlFor="email">Email/Staff ID</label>
                  <TextInput
                    placeholder="johndoe@gmail.com"
                    label="Email or ID"
                    name="email_or_id"
                    type="text"
                    icon={<FiMail />}
                  />

                  <label htmlFor="password">Password</label>
                  <TextInput
                    placeholder="****************"
                    label="Password"
                    name="password"
                    type="password"
                    icon={<FiLock />}
                  />
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      name="rememberMe"
                      onChange={(e) => setRememberMe(e.target.checked)}
                      checked={rememberMe}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                  </CheckBoxContainer>
                  <LoginButton type="submit" disabled={!formik.isValid}>
                    {formik.isSubmitting ? "loading" : "Login"}
                  </LoginButton>
                </Form>
              )}
            </Formik>
          </LoginFormContent>
        </div>
      </LoginRightSection>
    </LoginContainer>
  );
}

export default LoginPage;
