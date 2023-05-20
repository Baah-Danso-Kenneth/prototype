/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import * as Interface from "./types/adminPage";
import { ResetPassword } from "./model";
export const apiRequest = async (url: string, loginDetails: unknown) => {

	try {
		const response = await axios.post(url, loginDetails, {
			withCredentials: true
		});
		return response.data;
	} catch (error) {
		throw error
	}

};

const https = axios.create({
	baseURL:process.env.REACT_APP_BASE_URL ,
});
https.interceptors.request.use((config) => {
	config.withCredentials = true;
	return config;
}, err => Promise.reject(err))


export const apiLogout = async () => {
	try {
		const response = await https.get("user/logout");
		return response.data
	} catch (error) {
		throw new Error("Could not log out")
	}

}
export const api = {
  createLecturer: async (data: Interface.CreateUserFormData) => {
    const response = await https.post('/admin/create-lecturer', data);
    return response.data;
  },
  createStudent: async (data: Interface.CreateUserFormData) => {
    const response = await https.post('/admin/create-student', data);
    return response.data;
  },
  uploadLecturer: async (data: unknown) => {
    const response = await https.post('/admin/upload-lecturer', data);
    return response.data;
  },
  createAssignment: async (data: any) => {
    const response = await https.post('lecturer/assignments', data);
    return response.data;
  },
  uploadStudent: async (data: unknown) => {
    const response = await https.post('admin/upload-student', data);

    return response.data;
  },
  getSystemData: async () => {
    const response = await https.get('admin/dashboard');
    return response.data;
  },
  getUsers: async (endpoint: string) => {
    const response = await https.get(`admin/${endpoint}`);
    return response.data;
  },
  getInvitedStudents: async () => {
    const response = await https.get(`student/all-assignments`);
    return response.data;
  },
  getAssignments: async () => {
    const response = await https.get(`lecturer/assignments`);
    return response.data;
  },
  getAssignmentByUniqueCode: async (assignmentId: string) => {
    const response = await https.get(`lecturer/assignments/${assignmentId}`);
    return response.data;
  },
  inviteUsers: async (endpoint: string, data: { emails: string[] }) => {
    const response = await https.post(`admin/invite-${endpoint}`, data);
    return response.data;
  },
  resetPassword: async (resetPassword: ResetPassword) => {
    const response = await https.post('/user/reset', resetPassword);
    return response.data;
  },

  studentGetAssignments: async () => {
    const response = await https.get('student/assignments/');
    return response.data;
  },
  getLecturerSubmissions: async () => {
    const response = await https.get('/lecturer/assignment-submission-total');
    return response.data;
  },
  getStudentsSubmissionsToAssignment: async (id: string) => {
    const response = await https.get(`/student/assigments-submitted/${id}`);
    return response.data;
  },
  getStudentSnapShots: async (itemType: string, assignmentId: string, studentId: string) => {
    const response = await https.get(`student/submissions/${itemType}/${assignmentId}/${studentId}`);
    return response.data;
  },
  getSingleSnapShots: async (itemType: string, assignmentId: string, studentId: string, snapName ? : string) => {
    const response = await https.get(`student/submissions/${itemType}/${assignmentId}/${studentId}/?${snapName}`);
    return response.data;
  },
};
	