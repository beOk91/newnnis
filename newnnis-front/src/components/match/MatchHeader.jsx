import { getTest } from "../../api/newnnis";

const MatchHeader = ({ addMember, saveData }) => {
  const onClickSave = () => {
    getTest();
    console.log(saveData);
  };
  return (
    <>
      <div className="addbox">
        <div className="saveBtn">
          <button type="button" onClick={onClickSave}>
            <img src="src/assets/images/icon_save.png" alt="저장" />
          </button>
        </div>
        <div className="addinput">
          <img src="src/assets/images/icon_2.png" alt="" />
          <input type="text" className="newMember" placeholder="게스트명" />
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
