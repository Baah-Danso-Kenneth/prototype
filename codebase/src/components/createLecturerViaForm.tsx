import { useState } from "react";
import { api } from "../utils/api";
import { useControlPopUp } from "context/popUp";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import * as Styles from "../styles/createUserViaForm.styled";
import * as Interface from "../utils/types/adminPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateLecturerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .max(15)
    .matches(/^[A-Z][a-z]*$/)
    .required(),

  lastName: yup
    .string()
    .min(3)
    .max(15)
    .matches(/^[A-Z][a-z]*$/)
    .required(),

  email: yup.string().email().required(),
});

export function CreateLecturerViaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Interface.CreateUserFormData>({
    resolver: yupResolver(CreateLecturerSchema),
  });

  const {
    cancelPopUp
  } = useControlPopUp()

  const onSubmit = async (data: Interface.CreateUserFormData) => {
    setIsLoading(true);
    try {
      const response = await api.createLecturer(data);
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
      toast.success(response.data);
      cancelPopUp();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast.error(error?.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <Styles.CreateUserContainer>
      <div className="cancelButton">
        <button onClick={cancelPopUp}>x</button>
      </div>
      <Styles.form_container>
        <Styles.welcome_message>
          <h2>Tell us a little about the <br /> lecturer you are adding</h2>
          <p>Please fill the following details to get started</p>
        </Styles.welcome_message>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Styles.FieldSet>
            <Styles.Inputs
              type="email"
              placeholder="Email address"
              {...register("email")}
              className={errors.email && "error"}
            />
          
          </Styles.FieldSet>
          <Styles.FieldSet>
            <div className="Input_container">
              <Styles.Inputs
                type="text"
                placeholder="First name"
                {...register("firstName")}
                className={errors.email && "error"}
              />
             
            </div>
            <div className="Input_container">
              <Styles.Inputs
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className={errors.email && "error"}
              />
             
            </div>
          </Styles.FieldSet>
          <Styles.FieldSet>
          </Styles.FieldSet>
          <Styles.buttons_container>
            <Styles.Create_button type="submit" disabled={isLoading}>
             { isLoading ? "submitting data.." :  "Create"}
            </Styles.Create_button>
          </Styles.buttons_container>
        </Styles.Form>
      </Styles.form_container>
    </Styles.CreateUserContainer>
  );
}
