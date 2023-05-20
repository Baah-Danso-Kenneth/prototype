import React from "react";
import { useUploadUser } from "hooks/dragAndDrop";
import { useControlPopUp } from "context/popUp";
import * as Styles from "../styles/createUserViaUpload.styled";
import Vector from "assets/images/Vector(22).png";
export function UploadLecturers() {

    const {
        handleDragOver,
        handleDrop,
        handleClick,
        handleFileSelect,
        hiddenFileInput,
        loading,
    } = useUploadUser()

    const {
        cancelPopUp
    } = useControlPopUp();
    return (
        <Styles.Upload_component_container>
            <div className="cancelButton">
                <button onClick={cancelPopUp}>x</button>
            </div>
            <Styles.Container>
                <Styles.upload_container>
                    <Styles.welcome_message>
                        <h2>{loading ? "uploading file..." : "upload a file"}</h2>
                        <p>Please upload a file to get started</p>
                    </Styles.welcome_message>
                    <main onDragOver={handleDragOver} onDrop={handleDrop}>
                        <img src={Vector} alt="" />
                        <div className="upload_or_browse">
                            <label htmlFor="file-upload">
                                <button>
                                    <input type="file" id="file-upload" accept=".csv" name="file" ref={hiddenFileInput} onChange={handleFileSelect} />
                                    <p onClick={handleClick}>{loading ? "uploading file..." : "upload a file"}</p>
                                </button>
                                <p>or drop a file</p>
                            </label>
                            <div className="acceptance_creteria">
                                <span>
                                    NB:  only csv file accepted
                                </span>
                                <span>
                                    It must have a required columns of emails, firstname and lastname.
                                </span>
                            </div>
                        </div>

                    </main>
                </Styles.upload_container>

            </Styles.Container>
        </Styles.Upload_component_container>
    )
}
