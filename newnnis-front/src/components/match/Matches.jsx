const Matches = ({ matches, matchCount }) => {
  return (
    <>
      <div className="areaBox">
        <div className="table">
          <div className="thead">
            {matches.length != 0 && <p>경기</p>}
            {matches.length != 0 && <p>대진팀</p>}
          </div>
          <ul className="tbody">
            {matches &&
              matches.map((match, index) => (
                <>
                  <li>
                    <p>{index + 1}경기</p>
                    <div>
                      <p>{match[0] + "," + match[1]}</p>
                      <span>:</span>
                      <p>{match[2] + "," + match[3]}</p>
                    </div>
                  </li>
                </>
              ))}
          </ul>
        </div>
        <div className="listBox">
          <div className="thead">
            {matchCount.length != 0 && <p>경기횟수</p>}
          </div>
          <ul className="countList">
            {matchCount &&
              matchCount.map((member) => (
                <li>{member.name + ": " + member.count + "경기"}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Matches;
