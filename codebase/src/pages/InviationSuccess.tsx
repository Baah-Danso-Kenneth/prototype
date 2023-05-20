import React from 'react';
import { InvitationCard } from 'styles/Card.styled';
import VerifiedIcon from '../assets/images/verified.jpg';

function InviationSuccess() {
  return (
    <InvitationCard>
      <div>
      <img src={VerifiedIcon} alt="verified_logo"/>
      <h3>Invitation sent Successfully</h3>    
      </div>
    </InvitationCard>
  )
}

export default InviationSuccess
