import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../components/common/Header";
import MatchHeader from "../../components/match/MatchHeader";
import Matches from "../../components/match/Matches";
import MatchParticipant from "../../components/match/MatchParticipant";
import Footer from "@/components/common/Footer";
import DatePicker from "react-datepicker";
import { saveMatches } from "../../api/newnnis";

const MatchPage = () => {
  const [selectedGroup, setSelectedGroup] = useState("master");
  const [selectedMember, setSelectedMember] = useState([]);
  const [matches, setMatches] = useState({});
  const [matchCount, setMatchCount] = useState({});
  const [newnnisM, setNewnnisM] = useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 오늘의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const difference = (7 - dayOfWeek) % 7; // 다음 일요일까지 남은 일수. 이미 일요일이면 0

    today.setDate(today.getDate() + difference); // 다음 일요일로 날짜 조정
    today.setHours(0, 0, 0, 0); // 시간을 00:00:00.000으로 설정

    return today;
  });
  const changeGroup = (e) => {
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  const organize = () => {
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
    const generatedMatch = [];
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

      generatedMatch.push(match);
    }

    for (let i = 0; i < 5; i++) {
      generatedMatch.sort(() => Math.random() - 0.5);
    }

    console.log("Generated Matches:", generatedMatch);
    console.log({ selectedGroup: generatedMatch });

    setMatches((prevMatches) => ({
      ...prevMatches,
      [selectedGroup]: generatedMatch,
    }));
    setMatchCount((prevMatchCnt) => ({
      ...prevMatchCnt,
      [selectedGroup]: matchCounter,
    }));
  };

  const addMember = () => {};
  const save = async () => {
    console.log("matches", matches);
    if (Object.keys(matches).length === 0) {
      alert("경기를 생성하세요");
      return;
    }
    function formatDate(date) {
      const d = new Date(date);
      let month = "" + (d.getMonth() + 1), // getMonth()는 0부터 시작하므로 +1
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
    const convertToMatchList = (matches) => {
      let matchList = {};

      Object.keys(matches).forEach((group) => {
        matchList[group + "Group"] = [];
        matches[group].forEach((match, index) => {
          const matchObj = {
            matchDate: formatDate(selectedDate),
            user1Name: match[0],
            user2Name: match[1],
            user3Name: match[2],
            user4Name: match[3],
            userGroup: group,
          };
          matchList[group + "Group"].push(matchObj);
        });
      });

      return matchList;
    };
    let matchList = convertToMatchList(matches);
    matchList = { ...matchList, matchDate: formatDate(selectedDate) };
    const response = await saveMatches(matchList); // matchList는 Match 객체의 배열
    console.log("저장 성공:", response);
  };

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
      <div className="wrap date">
        <div className="container">
          <div className="header">
            <MatchHeader addMember={addMember} save={save} />
            <Header
              changeGroup={changeGroup}
              organize={organize}
              screenName="게임대진"
            >
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="master">마스터</option>
                  <option value="tour">투어</option>
                  <option value="challenger">챌린저</option>
                  <option value="final">파이널</option>
                  <option value="elite">엘리트</option>
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
            <DatePicker
              selected={selectedDate} // 현재 선택된 날짜
              onChange={(date) => setSelectedDate(date)} // 날짜가 선택되었을 때 실행할 함수
              dateFormat="yyyy-MM-dd" // 날짜 포맷 설정
              showYearDropdown // 연도를 선택할 수 있는 드롭다운 활성화
              showMonthDropdown // 월을 선택할 수 있는 드롭다운 활성화
              dropdownMode="select" // 드롭다운 모드 설정
              className="ch_date"
            />
          </div>
          <section className="sec_box dp_f">
            <Matches
              matches={matches[selectedGroup]}
              matchCount={matchCount[selectedGroup]}
            />
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
