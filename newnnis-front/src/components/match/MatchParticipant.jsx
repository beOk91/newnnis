import MatchMemberList from "./MatchMemberList";

const MatchParticipant = ({ newnnisM, selectedGroup, setSelectedMember }) => {
  return (
    <>
      <div className="memberBox">
        <ul className="thead">
          <li>참가자</li>
        </ul>
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
