import styled from 'styled-components';

export const TableContainer = styled.div` 
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width:800px;
   margin:0 auto;
  border-collapse: collapse;   
  font-family: 'Montserrat';
  height: 40vh;
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
font-family: "Montserrat";
justify-content: center;
    thead{ 
    width: 100%;
    font-weight: 700;
    line-height: 23px;
    text-align: left;
    color: #797676;
    font-size: 16px;
    line-height: 25px;
    tr{
        th{
            border-bottom:  0.546887px solid #B9BBBE;
             padding-bottom: 10px;
            &:nth-child(1){
                padding-left: 50px;
            }
            &:nth-child(3){
                padding-left: 30px;
            }
            &:nth-child(4){
                padding-left: -50px;
            }
        
         }

    }
 }
    tbody{
        td{
           border-bottom: 0.566887px solid #b8c3d6;
           color: #797676;
           line-height: 20px;
           font-size: 14px;
             :nth-child(1){
                padding: 7px 0px 10px 50px ;
            }
            :nth-child(4){
                width: 200px;
                margin-left: -90px;

                img{
                    width: 12%;
                    padding-left: 20px;
                }
            }
        }

    }

    tfoot{
 
        tr{
            td{
                margin-top:30px;
                display:flex;
                justify-content:space-between;
                p{
                    font-size:15px;
                    color:#31394E;
                    font-weight:600;
                }

                button{
                    position:relative;
                    left:32rem;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
                    padding:5px;
                    border-radius:5px;   
                }
            }
        }
    }
`
export const ButtonsContainer = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       width: 90%;
      height: 50px;
      flex-direction: row;
      align-items: flex-end; 
      color: #31394E ;
      font-weight: 600;
      font-size: 13px;

  .pagination_buttons{
    gap: 10px;
    display : flex;
    width: 150px;
     button{
    cursor: pointer;
    padding: 8px 19px;
    background-color: #fdfbfb;
    color: #31394E ;
    font-weight: 600;
    font-size: 13px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.25);

    &:disabled{
        cursor: default;
        background: #F7F7F7;
       box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.25);
       }
  }
  }

`
