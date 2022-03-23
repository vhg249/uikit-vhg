import * as React from "react";
import { NavLink } from "react-router-dom";
import { Fix, Flex, FlexLeft, FlexRight } from "./style";

interface Props {}
const Footer = (props: Props) => {
  return (
    <>
      <Fix>
        <Flex>
          <FlexLeft>
            <NavLink
              className={({ isActive }) =>
                isActive ? "home mobile active-home" : "home mobile"
              }
              to="/"
            >
              <div></div>
              <p>Home</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "collection mobile active-collection"
                  : "collection mobile"
              }
              to="/collections"
            >
              <div></div>
              <p>Collections</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "marketplace mobile active-marketplace"
                  : "marketplace mobile"
              }
              to="/marketplace"
            >
              <div></div>
              <p>Marketplace</p>
            </NavLink>

            {/* <NavLink
                className={({ isActive }) => (isActive ? "mission mobile active-mission" : "mission mobile")}
                to="/mission"
              >
                <div></div>
                <p>Missions</p>
              </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "friend mobile active-friend" : "friend mobile"
              }
              to="/friends"
            >
              <div></div>
              <p>Friends</p>
            </NavLink>
          </FlexLeft>
          <FlexLeft>
            <NavLink
              className={({ isActive }) =>
                isActive ? "rank mobile active-rank" : "rank mobile"
              }
              to="/leaderboard"
            >
              <div></div>
              <p>Rank</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "dashboard active-dashboard" : "dashboard mobile"
              }
              to="/dashboard"
            >
              <div></div>
              <p>DashBoard</p>
            </NavLink>
          </FlexLeft>
        </Flex>
      </Fix>
    </>
  );
};
export default Footer;
