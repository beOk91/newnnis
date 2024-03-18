import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../components/common/Header";
import MatchHeader from "../../components/match/MatchHeader";
import Matches from "../../components/match/Matches";
import MatchParticipant from "../../components/match/MatchParticipant";
import Footer from "@/components/common/Footer";
import { useUsers } from "@/context/UserContext";

// const newnnisM = {
//   a: [
//     { name: "이태규" },
//     { name: "정진호" },
//     { name: "김정래" },
//     { name: "한용진" },
//     { name: "김승원" },
//     { name: "김세호" },
//     { name: "김성구" },
//     { name: "황주현" },
//     { name: "전룡재" },
//     { name: "송영주" },
//   ],
//   b: [
//     { name: "조민재" },
//     { name: "양인석" },
//     { name: "장현수" },
//     { name: "장승현" },
//     { name: "신수현" },
//     { name: "정영호" },
//     { name: "김준수" },
//     { name: "황태훈" },
//     { name: "김용희" },
//     { name: "고범석" },
//   ],
//   c: [
//     { name: "박지해" },
//     { name: "배민지" },
//     { name: "남아름" },
//     { name: "김예슬" },
//     { name: "고경년" },
//     { name: "심정은" },
//     { name: "김예진" },
//     { name: "송희정" },
//     { name: "정진솔" },
//     { name: "김나형" },
//   ],
//   d: [{ name: "꼬부기" }],
//   e: [{ name: "마음이아프네" }],
// };

const MatchPage = () => {
  const [selectedGroup, setSelectedGroup] = useState("Master");
  const [selectedMember, setSelectedMember] = useState([]);
  const [matches, setMatches] = useState([]);
  const [matchCount, setMatchCount] = useState([]);
  const { users, loading } = useUsers(); // loading 상태 추가
  const [newnnisM, setNewnnisM] = useState(users);
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  const organize = () => {
    setMatches([]);
    setMatchCount([]);
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
    setMatchCount(matchCounter);
  };
  const shuffleTeam = () => {
    //수정필요
    alert("셔플");
  };
  const addMember = () => {};

  useEffect(() => {
    setMatches([]);
  }, [selectedGroup]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const storedData = localStorage.getItem("newnnisM");
    if (storedData) {
      // 로컬 스토리지에 저장된 데이터가 있으면 JSON 형태로 파싱하여 상태 설정
      setNewnnisM(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="header">
            <MatchHeader addMember={addMember} saveData={matches} />

            <Header
              changeGroup={changeGroup}
              organize={organize}
              shuffleTeam={shuffleTeam}
              screenName="게임대진"
            >
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="Master">마스터</option>
                  <option value="Tour">투어</option>
                  <option value="Challenger">챌린저</option>
                  <option value="Final">파이널</option>
                  <option value="Elite">엘리트</option>
                </select>
              </div>
              <button
                className="btn btn-primary fm_GongGothic"
                onClick={organize}
              >
                {" "}
                대진편성
              </button>
            </Header>
          </div>
          <section className="sec_box dp_f">
            <Matches matches={matches} matchCount={matchCount} />
            <MatchParticipant
              newnnisM={newnnisM}
              selectedGroup={selectedGroup}
              setSelectedMember={setSelectedMember}
            />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default MatchPage;
