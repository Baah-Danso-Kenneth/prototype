import styled from "styled-components";
import Styled from "styled-components";

export const parentContainer = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 8px;
position: fixed;
height: 109vh;
background-color: rgba(217, 217, 217, 0.3);

.container{
    width: 30%;
    height: 25vh;
    background: white;
    box-shadow: 7px 15px 10px #8a7fb1;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
.message {
  font-size: 20px;
  font-weight: bold;
  color: #31394E;
  margin-bottom: 20px;
  text-align: center
}

.loader_container {
  position: relative;
  width: 80px;
  height: 80px;
}

.parent-circle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top-color: #5D34EC;
  animation: spin 0.8s ease-in-out infinite;
}

.spiner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  background-color: #5D34EC;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

}
`

export const claim = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  color: #776ea1;


`