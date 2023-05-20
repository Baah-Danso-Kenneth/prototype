 export interface CreateUserFormData{
        firstName: string,
        lastName: string,
        email: string,
 }

 export interface CreateAssignment{
  title:string,
  description:string,
  deadline:Date,
  emails?:string[]
 }

 export interface CreateUserResponse {
    password : string|number
 }

export interface responseType {
   data: string
   error:{
     message: string
   }
 }

 export interface responseData {
  data: {
    totalStudents: number 
    totalLecturers: number 
    totalAssignments: number 
    totalSubmissions: number 
  };
}

export interface CardProps {
  Src: string;
  Total: number;
  description: string;
}

export interface LinkPropType  {
  invitationUrl : string;
  value ? : string,
  onchange ? : (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InviteUsersProps {
  userType: string;
  userStatus : string,
}

export interface User {
  lecturerId?: string;
  studentId?: string;
  firstName: string;
  lastName: string;
  users: {
    email: string,
  },
  invited: boolean;
}

export  interface CheckedUser {
  email: string,
}
