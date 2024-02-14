import MatchIcon from "@/assets/images/match.svg";
import MatchIconClick from "@/assets/images/match_click.svg";
import ScoreIcon from "@/assets/images/score.svg";
import ScoreIconClick from "@/assets/images/score_click.svg";
import RankIcon from "@/assets/images/rank.svg";
import RankIconClick from "@/assets/images/rank_click.svg";
import MemberIcon from "@/assets/images/member.svg";
import MemberIconClick from "@/assets/images/member_click.svg";
import MyInfoIcon from "@/assets/images/myinfo.svg";
import MyInfoIconClick from "@/assets/images/myinfo_click.svg";
import { NavLink, useLocation } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const location = useLocation();

  const getIcon = (path, icon, activeIcon) => {
    return location.pathname === path ? activeIcon : icon;
  };
  return (
    <>
      <footer className="footerMenu">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <img src={getIcon("/", MatchIcon, MatchIconClick)} alt="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/score" activeClassName="active">
                <img
                  src={getIcon("/score", ScoreIcon, ScoreIconClick)}
                  alt="Score"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/rank" activeClassName="active">
                <img
                  src={getIcon("/rank", RankIcon, RankIconClick)}
                  alt="Rank"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/member" activeClassName="active">
                <img
                  src={getIcon("/member", MemberIcon, MemberIconClick)}
                  alt="Member"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/myinfo" activeClassName="active">
                <img
                  src={getIcon("/myinfo", MyInfoIcon, MyInfoIconClick)}
                  alt="MyINfo"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
