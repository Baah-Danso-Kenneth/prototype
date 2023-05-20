import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'context/authContext';
import { ToastContainer } from 'react-toastify';
import { Routing } from 'router/Router';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import { ControlPopUpProvider } from 'context/popUp';
import 'react-toastify/dist/ReactToastify.css';
import { CheckedProvider } from 'context/handleCheckedContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <ControlPopUpProvider>
           <CheckedProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Routing />
            </ThemeProvider>
            </CheckedProvider> 
          </ControlPopUpProvider>
        </AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

