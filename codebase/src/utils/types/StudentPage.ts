
export interface studentCard{
    Src: string,
    Total: number;
    description: string;
}

export interface inputProps{
    placeholder: string,
    label: string,
    id: string,
    value : string,
    onchange ? : (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export interface studentAssignment {
//   title: string;
//   description: string;
//   deadline: string;
//   assignmentId: string;
// }
export interface studentAssignment {
  title: string;
  description: string;
  deadline: string;
  assignmentId: string;
  assignmentSubmission: [];
  lecturer: {
    firstName: string;
    lastName: string
  }
}