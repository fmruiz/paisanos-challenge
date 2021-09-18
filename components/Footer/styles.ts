import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const NewsLettersText = styled.span`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 700;
`;

export const FooterInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(p) => p.theme.color.gray_strong};
  border-radius: 8px;
  height: 64px;
  margin-top: 30px;
  width: 282px;
  padding: 7px 8px;
`;

export const FooterInputBtn = styled.button`
  width: 48px;
  height: 48px;
  background-color: ${p => p.theme.color.yellow};
  color: black;
  border-radius: 8px;
  border: none;
`;

export const FooterInput = styled.input`
  background-color: ${p => p.theme.color.black_strong};
  color: ${p => p.theme.color.gray_semi_strong};
  font-size: ${p => p.theme.font_size.sm};
  border: none;
  :focus-visible {
    outline: none;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  width: 85%;
`;

export const FooterMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.span`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FooterLinks = styled.span`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  margin-top: 21px;
  margin-bottom: 21px;
`;