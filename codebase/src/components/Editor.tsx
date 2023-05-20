import React, { useState, useRef, ChangeEvent } from 'react';
import { RichTextEditorProps } from 'utils/model';
import { Controller, LeftSections, RightSections } from 'styles/LecturerPageStyled';
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai'
import dropIcon from '../assets/images/drop_down.jpg';
import {BsLink} from "react-icons/bs";
import { TextAreaContainer } from 'styles/Modal.styled';


const RichTextEditor = ({onChange }: RichTextEditorProps) => {
  const [content, setContent] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onChange(e.target.value);
  };

  const editorRef = useRef<HTMLDivElement>(null);

  const handleLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = prompt('Enter a URL:', 'http://');
    if (editorRef.current && url) {
      document.execCommand('createLink', false, url);
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

  const handleAlignment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (editorRef.current) {
      document.execCommand('justify' + e.currentTarget.value, false);
    }
  };

  const handleFontStyle = (e: ChangeEvent<HTMLSelectElement>) => {
    if (editorRef.current) {
      switch(e.target.value) {
        case "regular":
          document.execCommand('removeFormat', false);
          break;
        case "italic":
          document.execCommand('italic', false);
          break;
        case "bold":
          document.execCommand('bold', false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Controller>
        <RightSections>
          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFontFamily(e)}>
            <option value="Times new roman">Times New Roman</option>
            <option value="Roboto">Roboto</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
          </select>
  
          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFontStyle(e)}>
            <option value="regular">Regular</option>
            <option value="italic">Italic</option>
            <option value="bold">Bold</option>
          </select>
  
          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFontSize(e)}>
            <option value="1">16</option>
            <option value="3">18</option>
            <option value="5">20</option>
          </select>
  
          <img src={dropIcon} alt="icon" onClick={() => alert('Font size drop down clicked!')} />
          <img src={dropIcon} alt="icon" onClick={() => alert('Font size drop down clicked!')} />
        </RightSections>
  
        <LeftSections>
          <button onClick={handleAlignment} value="Left">
            <AiOutlineAlignLeft className='icon'/>
          </button>
  
          <button onClick={handleAlignment} value="Center">
            <AiOutlineAlignCenter className='icon'/>
          </button>
  
          <button onClick={handleAlignment} value="Right">
            <AiOutlineAlignRight className='icon'/>
          </button>
  
          <button onClick={handleLink}>
            <BsLink/>
          </button>
        </LeftSections>
      </Controller>
  
      {/* <div className='editor_textarea'
        contentEditable
        style={{ fontSize, fontFamily, fontStyle:'normal'}}
        ref={editorRef}
        onInput={handleChange}
        spellCheck={false}
        autoCorrect="off"
 
      /> */}
      <TextAreaContainer>
        <textarea value={content} onChange={handleChange}  />
      </TextAreaContainer>
    </>
  );
  
};

export default RichTextEditor;