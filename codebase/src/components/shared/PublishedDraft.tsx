import { useState } from 'react';
import { PublishedDraftContainer } from 'styles/LecturerPageStyled';

function PublishedDraftComponent() {
  const [activeTab, setActiveTab] = useState('published');
  return (
    <PublishedDraftContainer withBorder={false}>
      <h3
        className={activeTab === 'published' ? 'active' : ''}
        onClick={() => setActiveTab('published')}
      >
        Published
      </h3>
      <div>
        <h3
          className={activeTab === 'draft' ? 'active' : ''}
          onClick={() => setActiveTab('draft')}
        >
          Draft
        </h3>
        <p>2</p>
      </div>
    </PublishedDraftContainer>
  );
}

export default PublishedDraftComponent;