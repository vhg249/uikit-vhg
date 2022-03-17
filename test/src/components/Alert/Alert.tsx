import * as React from "react";
import {
  Notice,
  NoticeTextHeader,
  NoticeTextContent,
  NoticeClose,
  NoticeCloseImage,
  NoticeText,
  Text,
  TextHeader,
} from "./style";
// import close from "../../assets/images/close-notice.png";
// import success from "../../assets/images/success-notice.png";
// import warning from "../../assets/images/warning-notice.png";
import { useEffect } from "react";
import { AlertProps } from "./type";

const Alert = (props: AlertProps) => {
  let color: any;
  let srcImage: any;
  if (props.variant === "Error") {
    color = "#E7546E";
    // srcImage = close;
  }
  if (props.variant === "Success") {
    color = "#00CCFF";
    // srcImage = success;
  }
  if (props.variant === "Warning") {
    color = "#FFCD4B";
    // srcImage = warning;
  }
  useEffect(() => {
    setTimeout(setTimeNotice, 5000);
  }, []);
  const setTimeNotice = () => {
    // dispatch(hideNotification());
  };
  return (
    <>
      <Notice color={color}>
        <NoticeClose>
          {/* <NoticeCloseImage onClick={onCloseNotification}>
            <img src={srcImage} alt="Notice" />
          </NoticeCloseImage> */}
        </NoticeClose>
        <NoticeText>
          <NoticeTextHeader>
            <TextHeader color={color}>{props.variant} !</TextHeader>
          </NoticeTextHeader>
          <NoticeTextContent>
            <Text color={color}>{props.message}</Text>
          </NoticeTextContent>
        </NoticeText>
      </Notice>
    </>
  );
};

export default Alert;
