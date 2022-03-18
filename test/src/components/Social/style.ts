import styled, { keyframes } from "styled-components";
const getStyle = (isMobile: string) => {
  switch (isMobile) {
      case "lg":
          return ``
    case "md":
      return `img {
                width: 40px;
                height: 40px;
              }`;
    case "sm":
      return `left: 30px;
                img {
                    width: 24px;
                    height: 24px;
                }
            `;

    default:
      return ``;
  }
};
export const Wrap = styled.div<{ size: string }>`
  /* position: absolute; */
  height: 100%;
  /* left: 16px; */
  display: flex;
  align-items: center;
  z-index: 99;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & > * {
    cursor: pointer;
  }
  a {
    transition: 0.2s;
    display: block;
    :hover {
      padding-left: 10px;
    }
  }
  ${(props)=>getStyle(props.size)}
`;
