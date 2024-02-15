import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
const ScorePage = () => {
  return (
    <>
      <div className="wrap score">
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <section className="cont_box">
            <div className="areaBox">
              <div>
                <div className="table" id="agroupMatch">
                  <div className="thead">
                    <p>경기</p>
                    <p>대진팀</p>
                  </div>
                  <ul className="tbody">
                    <li>
                      <p>1경기</p>
                      <div>
                        <p>승원, 정래</p>
                        <input 
                          onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                              e.target.value = e.target.value.slice(0, e.target.maxLength);
                          }}
                        type="number" name="" maxLength={1}/>
                        <span>:</span>
                        <input type="number" name="" />
                        <p>세호, 태규</p>
                      </div>
                    </li>
                    <li>
                      <p>2경기</p>
                      <div>
                        <p>정래, 성구</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>주현, 용진</p>
                      </div>
                    </li>
                    <li>
                      <p>3경기</p>
                      <div>
                        <p>세호, 룡재</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>영주, 진호</p>
                      </div>
                    </li>
                    <li>
                      <p>4경기</p>
                      <div>
                        <p>용진, 진호</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>승원, 룡재</p>
                      </div>
                    </li>
                    <li>
                      <p>5경기</p>
                      <div>
                        <p>세호, 용진</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>룡재, 영주</p>
                      </div>
                    </li>
                    <li>
                      <p>6경기</p>
                      <div>
                        <p>승원, 태규</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>영주, 세호</p>
                      </div>
                    </li>
                    <li>
                      <p>7경기</p>
                      <div>
                        <p>정래, 태규</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>주현, 성구</p>
                      </div>
                    </li>
                    <li>
                      <p>8경기</p>
                      <div>
                        <p>주현, 태규</p>
                        <input type="number" name="" />
                        <span>:</span>
                        <input type="number" name="" />
                        <p>진호, 성구</p>
                      </div>
                    </li>
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
