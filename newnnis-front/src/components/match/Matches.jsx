const Matches = ({ matches, matchCount }) => {
  console.log("matches", matches);
  return (
    <>
      <div className="areaBox">
        <div className="table">
          <ul className="thead">
            {matches && matches.length != 0 && <li>경기</li>}
            {matches && matches.length != 0 && <li>대진팀</li>}
          </ul>
          <ul className="tbody">
            {matches &&
              matches.map((match, index) => (
                <>
                  <li key={index}>
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
          <ul className="thead">
            {matchCount && matchCount.length != 0 && <li>경기횟수</li>}
          </ul>
          {matchCount && matchCount.length != 0 && (
            <ul className="countList">
              {matchCount &&
                matchCount.map((member) => (
                  <li key={member.name}>{member.name + ": " + member.count}</li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default Matches;
