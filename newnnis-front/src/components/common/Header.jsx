const Header = ({ changeGroup, organize, shuffleTeam }) => {
  return (
    <>
      <div className="kv">
        <div className="dim"></div>

        <div className="txt_box">
          <h1 className="logo"></h1>
          <h2>NEWNNIS_TENNIS</h2>
          <h3 className="gr_cl fm_GongGothic">게임 대진</h3>
        </div>

        <div className="sel_cont dp_f">
          <div className="sel_box">
            <select className="selectBox" onChange={changeGroup}>
              <option value="a">N</option>
              <option value="b">E</option>
              <option value="c">W</option>
              <option value="cgroup">W</option>
              <option value="cgroup">W</option>
            </select>
          </div>
          <button className="btn btn-primary fm_GongGothic" onClick={organize}>
            {" "}
            대진편성
          </button>

          <div className="shuffle_btn" aria-hidden="true" onClick={shuffleTeam}>
            <img src="../asset/images/icon_3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
