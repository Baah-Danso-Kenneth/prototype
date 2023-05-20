import React, { useState } from "react";
import {  useField } from "formik";
import { LoginInput,ErrorMsg,StyleIcon } from "../styles/LoginPage.styled";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { TextInputProps } from "utils/styledTypes";

export const TextInput =({ icon, showIcon = true, ...props }: TextInputProps) => {
	const [field, meta] = useField(props);
	const [show, setShow] = useState(false);

	return (
	  <div style={{ position: "relative",top:'0px' }}>
		{props.type !== "password" && <LoginInput {...field} {...props} />}

		{props.type === "password" && (
		  <LoginInput  {...field} {...props} type={show ? "text" : "password"} />
		)}

		{showIcon && <StyleIcon>{icon}</StyleIcon>}

		{props.type === "password" && showIcon && (
		  <StyleIcon onClick={() => setShow(!show)} right={true}>
			{show && <FiEye />}
			{!show && <FiEyeOff />}
		  </StyleIcon>
		)}

		{meta.touched && meta.error ?(
		  <ErrorMsg>{meta.error}</ErrorMsg>
		):(
		  <ErrorMsg style={{visibility:'hidden'}}>.</ErrorMsg>
		)}
	  </div>
	);
  };