const Header = ({ changeGroup, organize, screenName, children }) => {
  return (
    <>
      <div className="kv">
        <div className="dim"></div>

        <div className="txt_box">
          <h1 className="logo"></h1>
          <h2>NEWNNIS_TENNIS</h2>
          <h3 className="gr_cl fm_GongGothic">{screenName}</h3>
        </div>

        <div className="sel_cont dp_f">{children}</div>
      </div>
    </>
  );
};
export default Header;
