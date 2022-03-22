import * as React from "react";
import pitch_deck from "../../assets/docs/pitchdeck_new.pdf";
import tokenomics from "../../assets/docs/Tokenomics.pdf";

import { SelectTop, SelectTopItem, Wrap,SelectWhitePaper } from "./style";
import { NavRightProps } from "./type";
const NavRight = (props: NavRightProps) => {
  const [isShowNavRight, setIsShowNavRight] = React.useState<boolean>(true);
  return (
    <>
      <Wrap size={props.size}>
        <div className="flex">
          <a
            className="nav-item airdrop"
            href="https://t.me/nagakingdombot"
            target="_blank"
          >
            <div></div>
            <p className="title">Airdrop</p>
          </a>

          <div className="nav-item whitepaper ">
            <div className="background"></div>
            <SelectWhitePaper size={props.size} className="popup">
              <SelectTopItem size={props.size} href="/whitepaper">Whitepaper</SelectTopItem>
              <SelectTopItem  size={props.size}  href="/policy">Privacy Policy</SelectTopItem>
              <SelectTopItem size={props.size} href="/term">Terms of Use</SelectTopItem>
            </SelectWhitePaper>
          </div>

          <div className="nav-item pitch-deck">
            <div className="background"></div>
            <SelectTop size={props.size} className="popup">
              <SelectTopItem size={props.size} href={pitch_deck} target="_blank">
                Pitch Deck
              </SelectTopItem>
              <SelectTopItem size={props.size} href={tokenomics} target="_blank">
                Tokenomics
              </SelectTopItem>
            </SelectTop>
          </div>
          {/* <Link className="nav-item partner mobile" to="partner">
              <div></div>
              <p className="title">Partner</p>
            </Link> */}
        </div>
      </Wrap>
    </>
  );
};
export default NavRight;
