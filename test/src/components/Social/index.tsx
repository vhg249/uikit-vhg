import { Wrap } from "./style";
// import social from "../../assets/images/img-social.png";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import telegram from "../../assets/images/telegram.png";
import * as React from "react";
import { SocialProps } from "./type";

export const Social = (props:SocialProps) => {
  return (
    <>
      <Wrap size={props.size}>
        <div>
          <a target="_blank" href="https://twitter.com/NagaKingdom">
            <img src={twitter} alt="img social" />
          </a>
          <a target="_blank" href="https://discord.com/invite/nagakingdom">
            <img src={discord} alt="img social" />
          </a>
          <a target="_blank" href="https://t.me/joinchat/V6pYEia1uDljNTU9">
            <img src={telegram} alt="img social" />
          </a>
        </div>
      </Wrap>
    </>
  );
};
