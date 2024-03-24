import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { searchMatches, updateMatches } from "@/api/newnnis";
const ScorePage = () => {
  const [selectedGroup, setSelectedGroup] = useState("master");
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 오늘의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const difference = (7 - dayOfWeek) % 7; // 다음 일요일까지 남은 일수. 이미 일요일이면 0

    today.setDate(today.getDate() + difference); // 다음 일요일로 날짜 조정
    today.setHours(0, 0, 0, 0); // 시간을 00:00:00.000으로 설정

    return today;
  });
  const [matchScore, setMatchScore] = useState([]);
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
  };
  function formatDate(date) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1), // getMonth()는 0부터 시작하므로 +1
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const onClickSearch = async () => {
    console.log("onClickSearch");
    const params = {
      userGroup: selectedGroup,
      matchDate: formatDate(selectedDate),
    };
    console.log("params", params);
    const response = await searchMatches(params); // await 사용하여 호출
    if (response.status === 200) {
      console.log(response);
      setMatchScore(response.data);
    }
    console.log("onClickSearch");
  };
  const handleInputChange = (index, field, value) => {
    const updatedMatchScore = [...matchScore];
    updatedMatchScore[index][field] = value;
    setMatchScore(updatedMatchScore);
  };
  const onClickSave = async () => {
    console.log("Saved match scores:", matchScore);
    const filteredMatches = matchScore.filter(
      (match) => parseInt(match.score1) !== 0 || parseInt(match.score2) !== 0
    );
    console.log("filteredMatches:", filteredMatches);
    const response = await updateMatches(filteredMatches); // matchList는 Match 객체의 배열
    console.log("저장 성공:", response);
  };

  return (
    <>
      <div className="wrap score date">
        <div className="container">
          <div className="header">
            <div className="addbox">
              <div className="saveBtn">
                <button type="button" onClick={onClickSave}>
                  <img src="../asset/images/icon_save.png" alt="저장" />
                </button>
              </div>
            </div>
            <Header screenName="게임점수">
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="master">마스터</option>
                  <option value="tour">투어</option>
                  <option value="challenger">챌린저</option>
                  <option value="final">파이널</option>
                  <option value="elite">엘리트</option>
                </select>
              </div>
              <div className="sel_box"></div>
              <button
                className="btn btn-primary fm_GongGothic"
                onClick={onClickSearch}
              >
                {" "}
                조회
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
          <section className="sec_box">
            <div className="areaBox">
              <div>
                <div className="table" id="agroupMatch">
                  <ul className="thead">
                    <li>경기</li>
                    <li>대진팀</li>
                  </ul>
                  <ul className="tbody">
                    {matchScore &&
                      matchScore.map((match, index) => (
                        <li key={index}>
                          <p>{index + 1}경기</p>
                          <div>
                            <p>
                              {match.user1Name}, {match.user2Name}
                            </p>
                            <input
                              onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                  e.target.value = e.target.value.slice(
                                    0,
                                    e.target.maxLength
                                  );
                                handleInputChange(
                                  index,
                                  "score1",
                                  e.target.value
                                );
                              }}
                              type="number"
                              maxLength="1"
                              value={match.score1}
                            />
                            <span>:</span>
                            <input
                              onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                  e.target.value = e.target.value.slice(
                                    0,
                                    e.target.maxLength
                                  );
                                handleInputChange(
                                  index,
                                  "score2",
                                  e.target.value
                                );
                              }}
                              type="number"
                              maxLength="1"
                              value={match.score2}
                            />
                            <p>
                              {match.user3Name}, {match.user4Name}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ScorePage;
