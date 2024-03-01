import Footer from "@/components/common/Footer";
const MyInfoPage = () => {
  return (
    <>
      <div className="wrap">
        <div className="container">
        <button onClick={logout}>로그아웃</button>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MyInfoPage;
