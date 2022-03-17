import styled from "styled-components";
export interface ThemedIconLabel {
  variant:string;
  theme: string;
  hasDescription: boolean;
}
export const Notice = styled.div<{color:string}>`
  /* position: fixed; */
  /* width: 356px; */
  border-radius: 14px;
  right: 75px;
  top: 92px;
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
  padding: 10px 70px 10px 10px;
  gap: 10px;
  z-index: 10000;
  border: 1px solid ${(props) => props.color} ;
`;
export const NoticeText = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const NoticeTextHeader = styled.div``;
export const NoticeTextContent = styled.div``;
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
export const Text = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 1.6rem;
  margin: 0px;
`;
export const TextHeader = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 2rem;
  font-weight: 600;
  margin: 0px;
`;
