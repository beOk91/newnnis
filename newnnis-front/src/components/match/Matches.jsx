const Matches = ({ matches, matchCount }) => {
  return (
    <>
      <div className="areaBox">
        <div className="table">
          <ul className="thead">
            {matches.length != 0 && <li>경기</li>}
            {matches.length != 0 && <li>대진팀</li>}
          </ul>
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
          <ul className="thead">
            {matchCount.length != 0 && <li>경기횟수</li>}
          </ul>
          {matchCount.length != 0 && 
            <ul className="countList">  
              {matchCount &&
                matchCount.map((member) => (
                  <li>{member.name + ": " + member.count }</li>
                ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
};
export default Matches;
