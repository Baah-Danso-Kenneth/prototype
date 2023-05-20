import { useNavigate } from 'react-router-dom';
import { apiRequest } from 'utils/api';
import { Loader } from 'components/shared/loader';
import * as Styles from "../styles/loader.styled"; 

function ClaimAccount(): JSX.Element {
  const navigate = useNavigate();

  const getToken = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');
    const id = searchParams.get('id');

    try {
      const url = process.env.REACT_APP_BASE_URL;
     const response = await apiRequest(`${url}/user/claim`, { token, id })

     setTimeout(()=>{
       if (response.data) navigate('/reset-password', { state: { ...response.data } });
     }, 1000)
    } catch (error) {
      navigate(-1)
    }
  };

  getToken();

  return (
    <>
      <Loader incomingDataType='Reset Password Page, please wait!' />
      <Styles.claim>
       <h2>Welcome To Assignment Submission Sysmtem</h2>
      </Styles.claim>
    </>
  );
}

export default ClaimAccount;