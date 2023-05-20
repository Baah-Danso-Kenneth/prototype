import styled from "styled-components";

export const Header_container = styled.header`
position: relative;
height: 11.5vh;
width: 100%;
background-color: white;
display: flex;
justify-content: space-between      ;
align-items: center;
padding: 4% 12% 4% 10%;
`

export const Search = styled.input`
padding: 9px 45px;
border-radius: 5px;
width: 51%;
font-size: 18px;
font-weight: 400;
border: 0.5px solid rgba(0, 0, 0, 0.3);
color: rgba(0, 0, 0, 0.6);
outline: none;

::-webkit-search-cancel-button {
                display: none;
            }

::-moz-search-cancel-button {
                display: none;
            }

&::placeholder{
font-weight: 400;
color: rgba(0, 0, 0, 0.6);
}
`
export const Search_Icon = styled.img`
width: 2.2%;
position: absolute;
top: 4vh;
left: 11%;
`

export const invite_and_profile = styled.div`
width: 53%;
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
gap: 20%;
`

export const invite = styled.img`
width: 80%;
`
export const profile = styled.div`
width: 16.5%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const admin_text  = styled.span`
font-size: 17px;
font-weight: 700;
margin-left: 10px;
line-height: 20px;
color: #1E8DFF;
`
export const profile_image = styled.img`
width: 36%;
`
