import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { searchMatches } from "../../api/newnnis";
const ScorePage = () => {
  const [selectedGroup, setSelectedGroup] = useState("Master");
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 날짜를 기본값으로 설정
  const [matchScore, setMatchScore] = useState([]);
  const changeGroup = (e) => {
    console.log("changeGroup");
    let value = e.target.value;
    setSelectedGroup(value);
    setSelectedMember([]);
  };

  const onClickSearch = async () => {
    console.log("onClickSearch");
    const response = await searchMatches({
      userGroup: selectedGroup,
      matchDate: "20240303",
    }); // await 사용하여 호출
    if (response.status === 200) {
      console.log(response);
      setMatchScore(response.data);
    }
    console.log("onClickSearch");
  };
  return (
    <>
      <div className="wrap score date">
        <div className="container">
          <div className="header">
            <div className="addbox">
              <div className="saveBtn">
                <button type="button">
                  <img src="../asset/images/icon_save.png" alt="저장" />
                </button>
              </div>
            </div>
            <Header screenName="게임점수">
              <div className="sel_box">
                <select className="selectBox" onChange={changeGroup}>
                  <option value="Master">마스터</option>
                  <option value="Tour">투어</option>
                  <option value="Challenger">챌린저</option>
                  <option value="Final">파이널</option>
                  <option value="Elite">엘리트</option>
                </select>
              </div>
              <div className="sel_box">
                
              </div>
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
                              }}
                              type="number"
                              maxLength="1"
                              defaultValue={match.score1}
                            />
                            <span>:</span>
                            <input
                              type="number"
                              maxLength="1"
                              defaultValue={match.score2}
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
