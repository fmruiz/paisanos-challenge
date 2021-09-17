import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitleText = styled.h3`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.xl_2};
  font-weight: 700;
  margin-bottom: 32px;
`;

export const MovieDescriptionText = styled.p`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  line-height: 32px;
  margin: 0;
  width: 404px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const MovieDetails = styled.div`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 500;
  :nth-child(2) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;