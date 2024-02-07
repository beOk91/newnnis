import { useEffect, useState } from "react";
import MatchMemberList from "../../components/match/MatchMemberList";
import "./Match.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "@mui/material";

const newnnisM = {
  a: [
    { name: "이태규" },
    { name: "정진호" },
    { name: "김정래" },
    { name: "한용진" },
    { name: "김승원" },
    { name: "김세호" },
    { name: "김성구" },
    { name: "황주현" },
    { name: "전룡재" },
    { name: "송영주" },
  ],
  b: [
    { name: "조민재" },
    { name: "양인석" },
    { name: "장현수" },
    { name: "장승현" },
    { name: "신수현" },
    { name: "정영호" },
    { name: "김준수" },
    { name: "황태훈" },
    { name: "김용희" },
    { name: "고범석" },
  ],
  c: [
    { name: "박지해" },
    { name: "배민지" },
    { name: "남아름" },
    { name: "김예슬" },
    { name: "고경년" },
    { name: "심정은" },
    { name: "김예진" },
    { name: "송희정" },
    { name: "정진솔" },
    { name: "김나형" },
  ],
};

const Match = () => {
  const [selectedGroup, setSelectedGroup] = useState("a");
  const [selectedMember, setSelectedMember] = useState([]);
  const [matches, setMatches] = useState([]);
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  const organize = () => {
    // const selectedGroup = document.getElementById("selectBox").value;
    let checkdElement = Object.keys(selectedMember);
    console.log("checkedElement", checkdElement);
    //4명이상인 경우 매칭 가능
    if (checkdElement.length < 4) {
      alert("4명 이상 선택하십시오.");
      return;
    }

    let participant = [];
    for (let i = 0; i < checkdElement.length; i++) {
      participant.push(checkdElement[i]);
    }
    const playerMatches = new Map(participant.map((player) => [player, 0]));
    console.log("participatin", participant);
    let matchCounter = [];
    for (let p of participant) {
      matchCounter.push({ name: p, count: 0 });
    }

    function allPlayersPlayedEnough(array) {
      return array.every((item) => item.count >= 3);
    }

    const duoCheck = new Set();
    const matches = [];
    while (!allPlayersPlayedEnough(matchCounter)) {
      matchCounter.sort((a, b) => a.count - b.count);
      const minPlayer = matchCounter.filter(
        (arr) => arr.count === matchCounter[0].count
      );
      const notMinPlayer = matchCounter.filter(
        (arr) => arr.count !== matchCounter[0].count
      );
      for (let i = 0; i < 5; i++) {
        minPlayer.sort(() => Math.random() - 0.5);
      }
      matchCounter = minPlayer.concat(notMinPlayer);
      console.log(matchCounter);
      let match = [];
      while (match.length !== 4) {
        loop: for (let i = 0; i < matchCounter.length; i++) {
          for (let j = i + 1; j < matchCounter.length; j++) {
            const duo = [matchCounter[i].name, matchCounter[j].name].sort();
            if (
              !duoCheck.has(JSON.stringify(duo)) &&
              !match.includes(matchCounter[i].name) &&
              !match.includes(matchCounter[j].name)
            ) {
              duoCheck.add(JSON.stringify(duo));
              match.push(matchCounter[i].name);
              matchCounter[i].count += 1;
              match.push(matchCounter[j].name);
              matchCounter[j].count += 1;
              if (match.length === 4) break loop;
            }
          }
        }
      }

      matches.push(match);
    }
    for (let i = 0; i < 5; i++) {
      matches.sort(() => Math.random() - 0.5);
    }
    console.log("Generated Matches:", matches);
    setMatches(matches);
  };
  const shuffleTeam = () => {
    //수정필요
  };
  const rankAlert = () => {};
  const addMember = () => {};
  useEffect(() => {
    setMatches([]);
  }, [selectedGroup]);
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="header">
            <div className="addbox">
              <button className="btn btn-light" onClick={rankAlert}>
                <img src={`src/assets/images/icon_1.png`} alt="" />
              </button>

              <div className="addinput">
                <img src="src/assets/images/icon_2.png" alt="" />
                <input type="text" placeholder="게스트명" />
                <label>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={addMember}
                  >
                    + 추가
                  </button>
                </label>
              </div>
            </div>
            <div className="kv">
              <div className="dim"></div>
              <div className="txt_box">
                <h1 className="logo"></h1>
                <h2>NEWNNIS_TENNIS</h2>
                <h3 className="gr_cl fm_GongGothic">게임 대진</h3>
              </div>
              <div className="sel_cont dp_f">
                <div className="sel_box">
                  <select className="selectBox" onChange={changeGroup}>
                    <option value="a">N</option>
                    <option value="b">E</option>
                    <option value="c">W</option>
                    <option value="cgroup">W</option>
                    <option value="cgroup">W</option>
                  </select>
                </div>
                <button
                  className="btn btn-primary fm_GongGothic"
                  onClick={organize}
                >
                  {" "}
                  대진편성
                </button>
                <div
                  className="shuffle_btn"
                  aria-hidden="true"
                  onClick={shuffleTeam}
                >
                  <img src="../asset/images/icon_3.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="shuffle_btn"
            aria-hidden="true"
            onClick={shuffleTeam}
          ></div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ marginLeft: "5px", marginRight: "5px", width: "70%" }}>
            {matches &&
              matches.map((match) => (
                <>
                  {match}
                  <br />
                </>
              ))}
          </div>
          <div style={{ marginLeft: "5px", marginRight: "5px", width: "30%" }}>
            <MatchMemberList
              members={newnnisM[selectedGroup]}
              selectedGroup={selectedGroup}
              setSelectedMember={setSelectedMember}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Match;
