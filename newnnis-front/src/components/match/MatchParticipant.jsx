import MatchMemberList from "./MatchMemberList";

const MatchParticipant = ({ newnnisM, selectedGroup, setSelectedMember }) => {
  return (
    <>
      <div className="memberBox">
        <div className="thead">
          <p>참가자</p>
        </div>
        <div className="form-check">
          <MatchMemberList
            members={newnnisM[selectedGroup]}
            selectedGroup={selectedGroup}
            setSelectedMember={setSelectedMember}
          />
        </div>
      </div>
    </>
  );
};
export default MatchParticipant;
