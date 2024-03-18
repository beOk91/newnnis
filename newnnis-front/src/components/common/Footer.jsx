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
              <NavLink to="/" className="active">
                <img src={getIcon("/", MatchIcon, MatchIconClick)} alt="Home" />
                <span>경기</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/score" className="active">
                <img
                  src={getIcon("/score", ScoreIcon, ScoreIconClick)}
                  alt="Score"
                />
                <span>기록</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/rank" className="active">
                <img
                  src={getIcon("/rank", RankIcon, RankIconClick)}
                  alt="Rank"
                />
                <span>순위</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/member" className="active">
                <img
                  src={getIcon("/member", MemberIcon, MemberIconClick)}
                  alt="Member"
                />
                <span>멤버</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/myinfo" className="active">
                <img
                  src={getIcon("/myinfo", MyInfoIcon, MyInfoIconClick)}
                  alt="MyINfo"
                />
                <span>내 정보</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
