import loading from "@/assets/images/loading.png";
import "@/components/common/Loading.css";
const Loading = () => {
  return (
    <>
      <div className="load">
        <p className="icon">
          <img src={loading} alt={"loading"} />
        </p>
      </div>
    </>
  );
};
export default Loading;
