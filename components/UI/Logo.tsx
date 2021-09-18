import React from "react";
import styled from "styled-components";

const LogoText = styled.h1`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.md};
  font-weight: 700;
  margin: 0px 60px 0px 0px;
`;

export const Logo: React.FC = () => {
  return <LogoText data-cy="principal-title">Paisaflix</LogoText>;
};
