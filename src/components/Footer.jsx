import styled from 'styled-components';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import logo from '@/assets/img/logo.png';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  border-top: 4px solid var(--border);
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
  padding: 2rem;
  color: #fff;
  gap: 15px;
`;

const RedesContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 40px;
  & a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo" />
      <RedesContainer>
        <a href="https://github.com/alucardsam/" target='_blank'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sgonzalez87/" target='_blank'>
          <FaLinkedin />
        </a>
      </RedesContainer>
      <p>Desarrollado por: Samuel Adrián González González</p>
    </FooterContainer>
  );
};

export default Footer;