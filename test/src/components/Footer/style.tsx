import styled from "styled-components";
import home from "../../assets/images/home-footer.png";
import collection from "../../assets/images/collection-footer.png";
import marketplace from "../../assets/images/market-footer.png";
import mission from "../../assets/images/mission-footer.png";
import rank from "../../assets/images/rank-footer.png";
import friend from "../../assets/images/friend-footer.png";
import dashboard from "../../assets/images/dashboard-footer.png";

import home_active from "../../assets/images/home-active.png";
import collection_active from "../../assets/images/collection-active.png";
import marketplace_active from "../../assets/images/market-active.png";
import mission_active from "../../assets/images/mission-active.png";
import rank_active from "../../assets/images/rank-active.png";
import friend_active from "../../assets/images/friends-active.png";
import dashboard_active from "../../assets/images/dashboard-active.png";

export const Fix = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 30px 20px;
  
`;
export const FlexLeft = styled.div`
  display: flex;
  gap: 40px;
  .home {
    & > div {
      background-image: url(${home});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }
    :hover {
      & > div {
        background-image: url(${home_active});
        padding-bottom: 10px;
        margin-top: -10px;
      }
    }
  }

  .active-home {
    margin-top: -10px;
    padding-bottom: 10px;
    & > div {
      transition: 0.2s;
      background-image: url(${home_active});
      background-size: 100% 100%;
    }
  }
  .collection {
    & > div {
      background-image: url(${collection});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }

    :hover {
      & > div {
        background-image: url(${collection_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-collection {
    & > div {
      transition: 0.2s;
      background-image: url(${collection_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  .marketplace {
    & > div {
      background-image: url(${marketplace});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }

    :hover {
      & > div {
        background-image: url(${marketplace_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-marketplace {
    & > div {
      transition: 0.2s;
      background-image: url(${marketplace_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  .mission {
    & > div {
      background-image: url(${mission});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }

    :hover {
      & > div {
        background-image: url(${mission_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-mission {
    & > div {
      transition: 0.2s;
      background-image: url(${mission_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  .friend {
    & > div {
      background-image: url(${friend});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }

    :hover {
      & > div {
        background-image: url(${friend_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-friend {
    & > div {
      transition: 0.2s;
      background-image: url(${friend_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  .rank {
    & > div {
      background-image: url(${rank});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }

    :hover {
      & > div {
        background-image: url(${rank_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-rank {
    & > div {
      transition: 0.2s;
      background-image: url(${rank_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  .dashboard {
    & > div {
      background-image: url(${dashboard});
      height: 60px;
      width: 60px;
      background-size: 100% 100%;
    }
    :hover {
      & > div {
        background-image: url(${dashboard_active});
        margin-top: -10px;
        padding-bottom: 10px;
      }
    }
  }
  .active-dashboard {
    & > div {
      transition: 0.2s;
      background-image: url(${dashboard_active});
      background-size: 100% 100%;
      margin-top: -10px;
      padding-bottom: 10px;
    }
  }
  div {
    transition: 0.2s;
  }
  img {
    width: 60px;
    height: 60px;
    transition: 0.2s;
  }
  a {
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;
    p {
      transition: 0.2s;
      opacity: 0;
      display: block;
      position: absolute;
      top: -35px;
      margin: 0px;
      font-family: UTM Kabel KT;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 30px;
      text-align: center;
      color: #ffcd4b;
      text-shadow: 0px 0px 5px rgba(255, 199, 57, 0.5);
      padding: 10px;
    }
    :hover {
      div {
        filter: drop-shadow(0px 0px 6px #ffc739);
      }
      p {
        display: block;
        opacity: 1;
        filter: drop-shadow(0px 0px 6px #ffc739);
      }
    }
  }
  
`;
export const FlexRight = styled(FlexLeft)`
  a:first-child {
    img {
      width: 60px;
      height: 60px;
    }
    :hover {
      p {
        font-size: 2.4rem;
        top: -30px;
      }
    }
  }
`;
