import React,{useState} from 'react'
import {  NavbarContainer, NavBarRightSection, SearchBarContent, SearchInput, FilterInput, AddButtonContainer, NavbarAndModal} from "../styles/SearchBar.styled"
import SearchIcon from '../assets/images/search_icon.jpg'
import plusIcon from '../assets/images/plus.png';
import CreateAssignmentContainer from './shared/CreateAssignmentContainer';



function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <NavbarAndModal>
      <NavbarContainer>
        <SearchBarContent>
          <img src={SearchIcon} alt="search"/>
          <SearchInput placeholder='search'/>
        </SearchBarContent>
        <NavBarRightSection>
          <FilterInput placeholder="filter course"/>
          <AddButtonContainer onClick={handleShowModal}>
            <button type="submit">Assignment</button>
            <img src={plusIcon} alt="plusIcon"/>
          </AddButtonContainer>
        </NavBarRightSection>
      </NavbarContainer>
      {showModal && <CreateAssignmentContainer handleCloseModal={handleCloseModal} />}
    </NavbarAndModal>
  );
}

export default Navbar;