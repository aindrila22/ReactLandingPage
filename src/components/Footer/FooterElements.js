import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinksItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  width: 160px;
  color: #fff;
  box-sizing: border-box;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;
export const SocialMediaWrap = styled.section`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
export const WebsiteRights = styled.small`
  margin-bottom: 16px;
  color: #fff;
`;
export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
