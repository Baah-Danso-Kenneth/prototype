export const FormError = {
  firstName: 'Please first name must be  letters',
  lastName: 'Please last name must be letters only',
  Email: 'Please email must be in the format example@gmail.com',
};

export const activeUrl = {
  lecturers: '/admin/lecturers',
  students: '/admin/students',
  dashboard: '/admin/dashboard',
  studentPage: '/student-page',
  studentSubmission: '/student-page/submissions'
};

export const lecturerUrl={
  dashboard:'/lecturer/dashboard',
  students:'/lecturer/list/student',
  submission:'/lecturer/submission',
  draft:'/lecturer/draft'
}

export const cardData = [
  {
    src: require("../assets/images/totalLecturers.png"),
    Text: "Lecturers",
    Total: 0,
  },
  {
    src: require("../assets/images/totalStudents.png"),
    Text: "Students",
    Total: 0,
  },
  {
    src: require("../assets/images/totalAssignments (2).png"),
    Text: "Assignment created",
    Total: 0,
  },
  {
    src: require("../assets/images/totalSubmissions.png"),
    Text: "Submissions made",
    Total: 0,
  }
];

export const RequestError = ` Could not proccess request due to network error, please check your
 connection and try again`;

export const success = `Request proccessed successfully`;

export const FileTypeError = 'Please files to be uploaded must be of type csv';

export const studentCardData = [
  {
    src: require('../assets/images/Vector(24).png'),
    Text: 'Completed assignment',
    Total: 0,
  },
  {
    src: require('../assets/images/Vector(25).png'),
    Text: 'New assignment',
    Total: 0,
  },
  {
    src: require('../assets/images/Vector(26).png'),
    Text: 'Assignments in progress',
    Total: 0,
  },
];

export const studentSearch = [
  {
    placeholder: 'All titles',
    id: 'title',
    label: 'Title',
  },
  {
    placeholder: 'Date',
    id: 'date',
    label: 'Date',
  },
  {
    placeholder: 'Deadline',
    id: 'deadline',
    label: 'Deadline',
  },
];

export const Assignments = [
  {
    title: 'Javascript',
    deadline: '25/12/2020',
    description: 'sdfgh sdfghj sdfghddfghj dfgnh',
    assignmentId: '11953431',
  },
  {
    title: 'Mongo Db',
    deadline: '23/03/2023',
    description: 'sdfgh sdfghj sdfghddfghj dfgnh',
    assignmentId: '4334002',
  },
  {
    title: 'Microsoft Azure',
    deadline: '6/03/1957',
    description: 'sdfgh sdfghj sdfghddfghj dfgnh',
    assignmentId: '2745667',
  },
  {
    title: 'React typescript',
    deadline: '10/08/2003',
    description: 'sdfgh sdfghj sdfghddfghj dfgnh',
    assignmentId: '124664545',
  },
];
