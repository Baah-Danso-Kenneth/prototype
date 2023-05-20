/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as constants from "../constants/constant";
import * as Interface from "../utils/types/adminPage";
import { api } from "../utils/api";
import {toast} from 'react-toastify';
import { useControlPopUp } from 'context/popUp';
import "react-toastify/dist/ReactToastify.css";

export const useUploadUser = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setloading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const Location = useLocation();

    const { cancelPopUp } = useControlPopUp();

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    useEffect(()=>{
      "hello world"
    },[])

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file.type === 'text/csv') {
        setSelectedFile(file);
        sendFileToBackend(file);
      } else {
        toast.info('Please select a CSV file');
      }
    };

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (hiddenFileInput.current) {
        hiddenFileInput.current.click();
      }
    };

    const sendFileToBackend = async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
        setloading(true);
      try {
        let response: Interface.responseType = { data: "", error: { message: "" } }
        if (Location.pathname === constants.activeUrl.lecturers) {
          response = await api.uploadLecturer(formData);
        } else if (Location.pathname === constants.activeUrl.students) {
          response = await api.uploadStudent(formData);
        }
          setTimeout(() => {
             toast.success(response.data);
             }, 1000);
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (error:any) {
         setTimeout(() => {
            toast.error(error.response.data.message);
         }, 1000);
      }
      finally{
        setTimeout(()=>{
        setloading(false);
          cancelPopUp();
        }, 5000)
      }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file && file.type !== 'text/csv') {
        setSelectedFile(file);
        sendFileToBackend(file);
      } else {
        setSelectedFile(file);
        toast.error(constants.FileTypeError);
      }
    };

  return {
    handleDragOver,
    handleDrop,
    handleClick,
    handleFileSelect,
    sendFileToBackend,
    hiddenFileInput,
    selectedFile,
    loading,
    error
  };
};

