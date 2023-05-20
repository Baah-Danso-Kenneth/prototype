import React, { useState} from 'react';
import { toast } from 'react-toastify';
import { ComponentContent, DetailsInContent, DistanceController,FormContent, Muse,ButtonLayout} from 'styles/LecturerPageStyled';
import axios from 'axios';

function LecturerCreateTest() {
const [title, setTitle] = useState('');
const [description] = useState('');
const [deadline, setDeadline] = useState('');


const saveTest = (isDraft: boolean) => {
  axios
  .post(`${process.env.REACT_BASE_URL}/lecturer/tests`, {
    title,
    description,
    deadline,
    isDraft,
  })
  .then(() => {
    if (isDraft) {
      toast.success('Test saved as draft successfully!');
    } else {
      toast.success('Test published successfully!');
    }
  })
  .catch(() => {
    if (isDraft) {
      toast.error('Failed to save draft.');
    } else {
      toast.error('Failed to publish test.');
    }
  });
};

const handlePublish = (e: React.MouseEvent<HTMLButtonElement>) => {
e.preventDefault();
saveTest(false);
};

const handleDraft = (e: React.MouseEvent<HTMLButtonElement>) => {
e.preventDefault();
saveTest(true);
};

return (
<div>
<DistanceController top="-2.5">

</DistanceController>

  <ComponentContent>
    <DetailsInContent>

        <form>
          <FormContent>
            <Muse>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <label>Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(event) => setDeadline(event.target.value)}
              />

              <label htmlFor="description">Description:</label>

          <ButtonLayout>
            <button type="submit" onClick={handleDraft}>
              Save as draft
            </button>
            <button type="submit" onClick={handlePublish}>
              Publish
            </button>
          </ButtonLayout>
        </Muse>
      </FormContent>
    </form>
  </DetailsInContent>
</ComponentContent>

  </div>
);
}

export default LecturerCreateTest;
