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
import { useEffect, useState } from "react";
import { AlertProps } from "./type";

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  let color: any;
  let srcImage: any;
  const [isShow, setIsShow] = useState<boolean>(true);
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
    if (props.timeToShow) setTimeout(setTimeNotice, props.timeToShow);
  }, []);
  const setTimeNotice = () => {
    setIsShow(false);
  };
  return (
    <>
      {isShow && (
        <Notice color={color} size={props.size}>
          <NoticeClose>
            {/* <NoticeCloseImage onClick={onCloseNotification}>
            <img src={srcIFmage} alt="Notice" />
          </NoticeCloseImage> */}
          </NoticeClose>
          <NoticeText>
            <NoticeTextHeader>
              <TextHeader size={props.size} color={color}>
                {props.variant} !
              </TextHeader>
            </NoticeTextHeader>
            <NoticeTextContent size={props.size}>
              <Text size={props.size} color={color}>
                {props.message}
              </Text>
            </NoticeTextContent>
          </NoticeText>
        </Notice>
      )}
    </>
  );
};

export default Alert;
