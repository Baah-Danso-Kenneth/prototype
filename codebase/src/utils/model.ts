import React,{ReactNode} from "react";
import { ROLE } from "./types/user";
export interface TextInputProps {
	type: string;
	name: string;
	icon?: React.ReactNode;
	showIcon?: boolean;
	[key: string]: unknown;
  }
 export  interface FormValues {
    email_or_id: string;
    password: string;
  }
  export interface LoginCredentials {
    email_or_id: string;
    password: string;
  }
  export interface LoginResponse {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
  export interface Props {
    children: ReactNode;
  }
    export interface ResetPasswordState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
export interface ResetPasswordData {
  email?: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPassword{
	password:string;
	userId:string;
}
export interface ResetPasswordProps{
  email?:string;
  password:string;
  confirmPassword:string;
}
export interface RootState{
  resetPassword:{
    status:string;
    error:string | null
  }
}
export interface UserProps{
	activated: boolean, role: string
}
export interface AuthContextType {
	email: string;
	password: string;
	login: (email: string, password: string) => UserProps;
	logout: () => void;
	isAuthenticated: () => boolean;
	
  }
  export interface AuthProviderProps{
	children:React.ReactNode }

	 export type UserLogin ={
		email_or_id:string,
		password:string
	  }
	  export type User = {
		role: string,
		email:string,
		password:string,
		userId:string,
		lecturer?:{firstName?:string,lastName?:string}
		student?:{firstName?:string,lastName?:string}
	  }
	  export interface AuthInfo {
		user?: User | null;
		login: (userLogin: UserLogin) => Promise<UserProps>;
		logout: () => Promise<void>;
		reset: (resetPassword:ResetPassword) => Promise<UserProps>;
		success: string;
		error: string;
		loading?: boolean;
		isAuthenticated:boolean;
	  }
	  
	  export type AuthChildProvider ={
		children: React.ReactNode
	  }

	  export type RequestOptions = {
		method: 'GET' | 'POST' | 'PUT' | 'DELETE';
		headers?: {
		  'Content-Type': 'application/json';
		},
		body?: BodyInit | null | undefined;
		credentials?: 'include' | 'same-origin' | 'omit';
	  };
	
	  export type LoginDetails={
		email_or_id:string,
		password:string
	  }

	  export type RequestFunc = () => Promise<Response>;
	  export interface AsyncRequestState<T> {
		data: T | null;
		error: Error | null ;
		loading: boolean;
	  }

	  export type LinkPropType = {
		url: string ;
		label: string;
	  };
	  export interface CoursePublishedProps {
		title: string;
		description: string;
		deleteImageUrl: string;
		editImageUrl: string;
		submissionMade: string;
		submissionScore: string;
		deadline: string;
	  }
export interface AlignTest{
  left:string;
  justify:string;
  right:string;
  center:string;
}
export interface AssignmentCreationProps{
	title:string;
	deadline:string;
	description:string;
}
export interface StudentDetailsProps{
	name:string;
	email:string;
	staff_id:string;
}
 export  interface ProtectedRouteProps  {
	role: ROLE;
	children: ReactNode;
  }

  export interface CourseProps{
	id: number;
	name: string;
	email: string;
	staff_id: string;
  }

  export interface CoursesProp{
	title:string;
	description:string;
	unique_code:number;
	due_date:string;
 }
  
 export interface RichTextEditorProps {
	value: string;
	fontSize?: number;
	fontFamily?: string;
	onChange: (value: string) => void;
	setDescription?: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export interface RichTextEditorState {
	content: string;
  }
  
  export type ModalComponentProps = {
	handleCloseModal: () => void;
  };

  export interface Get_invited_UsersProps{
	avatar?:string;
	firstName:string;
	lastName:string;
	email:string;
  }

  export interface AssignmentData  {
	title: string;
	assignmentId: string;
	deadline:string;
	description: string;
  };

  export interface ListStudenProps{
	id:string;
	name:string;
	email:string;
	assignment:string
  }

  export interface AssignStudentProps{
	email:string;
	invited?:string;
  }
 export interface CheckedStudents {
	email: string;
  }

 export interface StudentProps {
	studentId?:string;
	invited?:string;
	email: string;
	firstName: string;
	lastName: string;
  }
  
  export interface CheckContentProps{
	handleCheck: (event: React.ChangeEvent<HTMLInputElement>, user: StudentProps) => void;
  }
 export type CheckedStudent = string[];  
  export interface CheckedProps{
	checkedStudent: string[]
	handleCheck: (event: React.ChangeEvent<HTMLInputElement>, user: StudentProps) => void;
  }