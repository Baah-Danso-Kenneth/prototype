/* eslint-disable @typescript-eslint/no-explicit-any */
export  interface FormValues {
    email: string;
    password: string;
  }


  export interface TextInputProps {
	type: string;
	name: string;
	icon: React.ReactNode;
	[key: string]: any;
  }

  export interface IconPosition{
	right?:string | boolean
  }

export interface DistanceControllerProps {
	top?:string;
  }
  export interface InputWithIconProps {
    icon: string;
  }