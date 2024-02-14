import React, { useEffect, useState } from "react";

const MatchMemberList = (props) => {
  const { members, setSelectedMember, selectedGroup } = props;
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  const selectAll = (e) => {
    const allMember = {};
    members.map((m) => (allMember[m.name] = e.target.checked));
    setCheckedItems(allMember);
  };

  useEffect(() => {
    setSelectedMember(checkedItems);
  }, [checkedItems]);

  return (
    <div className="memberBox">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onClick={selectAll}
        />
        <label for="cbxall">ALL</label>
      </div>
      {members.map((item, index) => (
        <div className={selectedGroup}>
          <label key={item.index}>
            <input
              type="checkbox"
              name={item.name}
              checked={checkedItems[item.name] || false}
              onChange={handleCheckboxChange}
            />
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MatchMemberList;
