const MatchHeader = ({ rankAlert, addMember }) => {
  return (
    <>
      <div className="addbox">
        <button className="btn btn-light" onClick={rankAlert}>
          <img src={`src/assets/images/icon_1.png`} alt="" />
        </button>

        <div className="addinput">
          <img src="src/assets/images/icon_2.png" alt="" />
          <input type="text" placeholder="게스트명" />
          <label>
            <button className="btn btn-primary btn-sm" onClick={addMember}>
              + 추가
            </button>
          </label>
        </div>
      </div>
    </>
  );
};
export default MatchHeader;
