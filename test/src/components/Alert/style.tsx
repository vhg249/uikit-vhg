import styled from "styled-components";
const getPadding = (size: string) => {
  switch (size) {
    case "lg":
      return "10px 70px 10px 10px";
    case "md":
      return "10px 50px 10px 10px";
    case "sm":
      return "5px 40px 5px 10px";
    default:
      return "10px 70px 10px 10px";
  }
};
const getFontSizeContent = (size: string) => {
  switch (size) {
    case "lg":
      return "16px";
    case "md":
      return "14px";
    case "sm":
      return "12px";
    default:
      return "16px";
  }
};
const getMinWidth = (size: string) => {
  switch (size) {
    case "lg":
      return "250px";
    case "md":
      return "230px";
    case "sm":
      return "120px";
    default:
      return "250px";
  }
};
const getFontSizeHeader = (size: string) => {
  switch (size) {
    case "lg":
      return "20px";
    case "md":
      return "16px";
    case "sm":
      return "14px";
    default:
      return "20px";
  }
};
const getWidthContent = (size: string) => {
  switch (size) {
    case "lg":
      return "200px";
    case "md":
      return "180px";
    case "sm":
      return "100px";
    default:
      return "200px";
  }
};
export const Notice = styled.div<{ color: string; size?: string }>`
  /* position: fixed; */
  /* width: 356px; */
  border-radius: 14px;
  color: white;
  display: flex;
  background: linear-gradient(
    177.53deg,
    rgba(21, 16, 86, 1) -10.16%,
    rgba(40, 14, 141, 1) 99.48%
  );
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  padding: ${(props) => getPadding(props.size)};
  gap: 10px;
  z-index: 10000;
  border: 1px solid ${(props) => props.color};
  width:fit-content;
  min-width:${(props) => getMinWidth(props.size)};
`;
export const NoticeText = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`;
export const NoticeTextHeader = styled.div`
`;
export const NoticeTextContent = styled.div<{size?:string }>`
  max-width:${(props) => getWidthContent(props.size)};

`;
export const NoticeClose = styled.div`
  display: flex;
  cursor: pointer;
`;
export const NoticeCloseImage = styled.div`
  height: 22px;
  width: 22px;
  margin: auto;
  cursor: pointer;
`;
export const Text = styled.p<{ color: string,size?:string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => getFontSizeContent(props.size)};
  margin: 0px;
`;
export const TextHeader = styled.p<{ color: string,size?:string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => getFontSizeHeader(props.size)};
  font-weight: 600;
  margin: 0px;
`;
