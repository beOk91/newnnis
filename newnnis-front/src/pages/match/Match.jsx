import { useEffect, useState } from "react";
import MatchMemberList from "../../components/match/MatchMemberList";
import "./Match.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  const organize = () => {
    // const selectedGroup = document.getElementById("selectBox").value;
    let checkdElement = Object.keys(selectedMember);
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
  useEffect(() => {
    setMatches([]);
  }, [selectedGroup]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "15px",
        }}
      >
        NEWNNIS_TENNIS <br />
        게임 대진
      </div>
      <div class="cont_box" stlye={{ marginBottom: "20px" }}>
        <select onChange={changeGroup}>
          <option value="a">N</option>
          <option value="b">E</option>
          <option value="c">W</option>
        </select>
        <label>
          <button class="btn btn-primary" onClick={organize}>
            대진 편성
          </button>
        </label>
        <div class="shuffle_btn">
          <i
            className="fa fa-random"
            // aria-hidden="true"
            onclick="shuffleTeam()"
          ></i>
        </div>
      </div>
      <div>
        {matches &&
          matches.map((match) => (
            <>
              {match}
              <br />
            </>
          ))}
      </div>
      <div>
        <MatchMemberList
          members={newnnisM[selectedGroup]}
          setSelectedMember={setSelectedMember}
        />
      </div>
    </>
  );
};
export default Match;
