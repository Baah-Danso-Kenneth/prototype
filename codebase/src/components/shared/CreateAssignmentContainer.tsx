/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useRef, useState } from 'react'
import { ModalComponentProps, RichTextEditorState } from 'utils/model'
import InviteStudentForAssignment from './inviteStudentAssignment';
import { api } from 'utils/api';
import { useChecked } from 'context/handleCheckedContext';
import { Calender, InputWithIcon, ModalBody, ModalContainer, ModalContent, ModalHeader, ModalLeftSide, ModalRightSide, TextAreaContainer } from 'styles/Modal.styled';
import calenderImage from 'assets/images/calender_input.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ButtonLayout, Controller } from 'styles/LecturerPageStyled';
import drag_input from 'assets/images/drag_input.jpg';
import closeImage from 'assets/images/close_img.png'
import alignLeftImage from 'assets/images/vertix.png'
import alignRightImage from 'assets/images/align_right.png'
import alignVerticalImage from 'assets/images/align_vertical.png'
import alignJustifyImage from 'assets/images/align_justify.png'
import linkImage from 'assets/images/link_image.png'


function CreateAssignmentContainer({ handleCloseModal }: ModalComponentProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState<Date | null>(null);
  const { checkedStudent } = useChecked();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setState] = useState<RichTextEditorState>({ content: '' });

  const editorRef = useRef<HTMLDivElement>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleDateChange = (date: Date | null) => {
    setDeadline(date);
  };

  const handleSubmit = async () => {
    try {
      const assignment = {
        title,
        description,
        deadline,
        emails: checkedStudent
      }
      await api.createAssignment(assignment);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setTitle('')
      setDescription('')
    } catch (error: any) {
    }
  };

  const handleFontFamily = (e: ChangeEvent<HTMLSelectElement>) => {
    if (editorRef.current) {
      document.execCommand('fontName', false, e.target.value);
    }
  };

  const handleFontSize = (e: ChangeEvent<HTMLSelectElement>) => {
    if (editorRef.current) {
      document.execCommand('fontSize', false, e.target.value);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <img src={closeImage} onClick={handleCloseModal} alt="close_img" className="close_img" />
        </ModalHeader>

        <ModalBody>
          <ModalLeftSide>
            <h2>Create Assignments</h2>
            <form >
              <fieldset>
                <label>Title</label>
                <InputWithIcon type="text" placeholder="Enter text" icon={drag_input} value={title} onChange={handleTitleChange} />


                <label>Dead line</label>
                <Calender>
                  <DatePicker
                    selected={deadline}
                    onChange={handleDateChange}
                    locale="en-GB"
                    placeholderText="dd/MM/yyyy"
                    dateFormat="do MMMM yyyy"
                    minDate={new Date()}
                  />
                  <img src={calenderImage} alt="calender_image" className='calender_image' />
                </Calender>

                <label>Assignment Description</label>
                <Controller>
                  <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFontFamily(e)}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Helvetica">Helvetica</option>
                  </select>

                  <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFontSize(e)}>
                    <option value="1">Small</option>
                    <option value="3">Medium</option>
                    <option value="5">Large</option>
                  </select>

                  <img src={alignJustifyImage} alt="icon" />
                  <img src={alignLeftImage} alt="icon" />
                  <img src={alignRightImage} alt="icon" />
                  <img src={alignVerticalImage} alt="icon" />
                  <img src={linkImage} alt="icon" />
                </Controller>
                <TextAreaContainer value={description} onChange={(event) => setDescription(event.target.value)} />

              </fieldset>
              <ButtonLayout>
                <button type="button" onClick={handleSubmit}>Save and Publish</button>
                <button>Save as Draft</button>
              </ButtonLayout>
            </form>
          </ModalLeftSide>

          <ModalRightSide>
            <h2>Invite Student</h2>
            <InviteStudentForAssignment />
          </ModalRightSide>

        </ModalBody>

      </ModalContent>
    </ModalContainer>
  )
}

export default CreateAssignmentContainer

