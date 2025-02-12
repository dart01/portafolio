import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1F1B24;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #ddd;
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.6;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: rgb(61, 207, 182);
    transform: translateY(-2px);
  }
`;

const ContactLink = styled.a`
  color: rgb(61, 207, 182);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
                <Text>
                    © {new Date().getFullYear()} Diego Riaño. Todos los derechos reservados.
                </Text>
                
                <LinkContainer>
                    <SocialLink href="https://github.com/tuusuario" target="_blank" rel="noopener">
                        GitHub
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener">
                        LinkedIn
                    </SocialLink>
                </LinkContainer>

                <Text>
                    Contacto: {' '}
                    <ContactLink href="mailto:diegoan1624@gmail.com">
                        diegoan1624@gmail.com
                    </ContactLink>
                </Text>
            </Content>
        </FooterContainer>
    );
};

export default Footer;
