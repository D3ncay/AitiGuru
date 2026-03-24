import styled from 'styled-components';

export const FormWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  border-radius: 40px;
  padding: 6px;
  box-shadow: 0 24px 32px 0 rgba(0, 0, 0, 0.04);
  background: #fff;
  min-width: 515px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 34px;
  padding: 58px;
  background: linear-gradient(180deg, rgba(35, 35, 35, 0.03) 0%, rgba(35, 35, 35, 0) 50%);
  gap: 32px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 52px;
  height: 52px;
  box-shadow:
    0 12px 8px 0 rgba(0, 0, 0, 0.03),
    0 0 0 2px #fff;
  background: #fff, linear-gradient(360deg, rgba(35, 35, 35, 0) 50%, rgba(35, 35, 35, 0.06) 100%);
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: -0.01em;
  text-align: center;
  color: #232323;
  //text-shadow: 0 -2px 0 rgba(255, 255, 255, 0.12);
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #e0e0e0;
  //text-shadow: 0 4px 4px rgba(0, 0, 0, 0.17);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ebebeb;
  //text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeparatorLine = styled.div`
  height: 1px;
  width: 100%;
  background: #ededed;
`;

export const NoAccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #6c6c6c;
  gap: 2px;
`;

export const CreateLink = styled.a`
  font-weight: 600;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #242edb;
`;
