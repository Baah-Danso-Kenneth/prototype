import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ResetLeftSection, ResetPasswordButton, ResetPasswordContainer, ResetPasswordFormContent, ResetRightSection } from '../styles/ResetPassword.styled';
import { CheckBoxContainer, CheckBox } from '../styles/LoginPage.styled';
import { useAuth } from '../context/authContext';
import { ResetPasswordProps } from '../utils/model';
import { TextInput } from '../components/FormLib';
import resetImage from '../assets/images/reset_image.jpg';
import AppLogo from 'components/shared/AppLogo';
import { FiLock } from 'react-icons/fi';

const passwordFormat = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:'\"<>,./?])"
);
const ResetPasswordFormSchema = Yup.object({
  password: Yup.string().matches(passwordFormat, "password must be in the format Exam@123").required('Required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});


const ResetPasswordPage = () => {
  const { reset } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: ResetPasswordProps) => {
    setIsSubmitting(true);

    try {
      const user = await reset({ password: values.password, userId: state.userId });

      if (user.role === 'lecturer') {
        navigate('/lecturer/dashboard');
      } else if (user.role === 'student') {
        navigate('/student-page');
      }
      toast.success('Password reset instructions sent to email');
    } catch (error) {
      toast.error('Failed to reset password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResetPasswordContainer>
      <ResetLeftSection>
        <div>
          <h3>A Git- Inspired Assignment submission system</h3>
          <img src={resetImage} alt="reset_password_image" />
        </div>
      </ResetLeftSection>

      <ResetRightSection>
        <AppLogo />
        <div>
          <ResetPasswordFormContent>
            <h1>Change Password</h1>
            <Formik initialValues={{ password: '', confirmPassword: '' }} validationSchema={ResetPasswordFormSchema} onSubmit={handleSubmit}>
              {() => (
                <Form>
                  <label htmlFor="password">New Password</label>
                  <TextInput name="password" type="password" placeholder="*************" icon={<FiLock />} />

                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <TextInput name="confirmPassword" type="password" placeholder="*************" icon={<FiLock />} />
                  <CheckBoxContainer>
                    <CheckBox />
                    <label>Remember me</label>
                  </CheckBoxContainer>

                  <ResetPasswordButton disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </ResetPasswordButton>
                </Form>
              )}
            </Formik>
          </ResetPasswordFormContent>
        </div>
      </ResetRightSection>
    </ResetPasswordContainer>
  );
};

export default ResetPasswordPage;
