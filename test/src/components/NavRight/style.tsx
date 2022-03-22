import styled, { keyframes } from "styled-components";
import airdrops from "../../assets/images/airdrop.png";
import whitepaper from "../../assets/images/whitepaper.png";
import pitch_deck from "../../assets/images/pitch-deck.png";
import partner from "../../assets/images/partner.png";

import airdrops_active from "../../assets/images/airdrop-active.png";
import whitepaper_active from "../../assets/images/whitepaper-active.png";
import pitch_deck_active from "../../assets/images/pitchdeck-active.png";
import partner_active from "../../assets/images/partner-active.png";
const getStyleWrap = (size: string) => {
  switch (size) {
    case "lg":
      return ``;
    case "md":
      return `.nav-item {
            a {
              & > div {
                width: 40px;
                height: 40px;
              }
            }
          }`;
    case "sm":
      return `right: 23px;
            .pitch-deck {
              position: relative;
              transition: 0.2s;
              .background {
                height: 30px;
                width: 30px;
              }
              :hover {
                padding-left: 15px;
              }
            }
            .nav-item {
                & > div:nth-child(1) {
                  width: 30px;
                  height: 30px;
                }
            }
            .title {
              display: none;
            }`;
    default:
      return ``;
  }
};
const getStyleSelectItem = (size: string) => {
  switch (size) {
    case "lg":
      return ``;
    case "md":
      return `padding: 6px 37px 8px 10px;`;
    case "sm":
      return `font-size: 10px;
        padding: 2px 30px 2px 10px;
        line-height: 16px;`;
    default:
      return ``;
  }
};
const getStyleSelectTop = (size: string) => {
  switch (size) {
    case "lg":
      return ``;
    case "md":
      return `box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        top: 0px;
        left: -132px;
        a:first-child {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        a:last-child {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }`;
    case "sm":
      return `box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        left: -73px;
        a:first-child {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        a:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }`;
    default:
      return ``;
  }
};
export const SelectTop = styled.div<{ size: string }>`
  background: linear-gradient(
    133.63deg,
    rgba(44, 36, 129, 0.73) -6.02%,
    rgba(67, 24, 101, 0.73) 104.99%
  );
  border: 1px solid #a389e7;
  box-sizing: border-box;
  backdrop-filter: blur(30px);
  border-radius: 12px;
  position: absolute;
  opacity: 0;
  transition: 0.2s;
  top: 0px;
  z-index: 500;
  left: -132px;

  a:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  a:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  ${(props) => getStyleSelectTop(props.size)}
`;
export const SelectWhitePaper = styled(SelectTop)`
  top: -20px;
`;

export const Wrap = styled.div<{ size: string }>`
  position: absolute;
  height: 100%;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  z-index: 99;
  & > * {
    cursor: pointer;
    transition: 0.2s;
  }
  .flex {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    position: relative;
  }
  .title {
    transition: 0.2s;
    font-family: UTM Kabel KT;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #ffcd4b;
    text-shadow: 0px 0px 5px rgba(255, 199, 57, 0.5);
    position: absolute;
    top: -16px;
    right: 58px;
    z-index: 10;
    display: block;
    opacity: 0;
    white-space: nowrap;
    padding: 10px 15px;
  }

  .airdrop {
    & > div {
      background-image: url(${airdrops});
    }
    :hover {
      & > div {
        background-image: url(${airdrops_active});
        margin-right: 5px;
        padding-right: 5px;
      }
    }
  }

  .pitch-deck,
  .whitepaper {
    position: relative;
    transition: 0.2s;
    z-index: 1;
    .background {
      background-image: url(${pitch_deck});
      background-size: 100% 100%;
      height: 60px;
      width: 60px;
    }
    :hover {
      padding-left: 30px;
      z-index: 2;

      .background {
        background-image: url(${pitch_deck_active});
      }
      .popup {
        opacity: 1;
      }
    }
  }
  .whitepaper {
    .background {
      background-image: url(${whitepaper});
    }
    :hover {
      .background {
        background-image: url(${whitepaper_active});
      }
    }
  }
  .partner {
    & > div {
      background-image: url(${partner});
    }
    :hover {
      & > div {
        background-image: url(${partner_active});
        margin-right: 5px;
        padding-right: 5px;
      }
    }
  }
  a {
    display: block;
    position: relative;
    & > div {
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
      transition: 0.2s;
    }
    :hover {
      .title {
        opacity: 1;
      }
    }
  }
  ${(props) => getStyleWrap(props.size)}
`;

export const SelectBottom = styled(SelectTop)``;
export const SelectTopItem = styled.a<{ size: string }>`
  font-family: UTM Kabel KT;
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 21px;
  color: #fbfbfb;
  padding: 8px 46px 8px 16px;
  text-decoration: none;
  :hover {
    color: #ffc739;
    background: #4f3c9e;
    text-shadow: 0px 0px 5px rgba(255, 199, 57, 0.5);
  }
  ${(props) => getStyleSelectItem(props.size)}
`;
