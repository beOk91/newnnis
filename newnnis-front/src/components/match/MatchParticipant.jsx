import MatchMemberList from "./MatchMemberList";

const MatchParticipant = ({ newnnisM, selectedGroup, setSelectedMember }) => {
  return (
    <>
      <div className="memberBox">
        <div className="thead">
          <p>참가자</p>
        </div>
        <MatchMemberList
          members={newnnisM[selectedGroup]}
          selectedGroup={selectedGroup}
          setSelectedMember={setSelectedMember}
        />
      </div>
    </>
  );
};
export default MatchParticipant;
