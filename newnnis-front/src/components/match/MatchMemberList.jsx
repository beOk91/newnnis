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
    <ul className="memberList">
      <li className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onClick={selectAll}
        />
        <label for="cbxall">ALL</label>
      </li>
      {members.map((item, index) => (
        <li className={selectedGroup}>
          <input
            type="checkbox"
            name={item.name}
            checked={checkedItems[item.name] || false}
            onChange={handleCheckboxChange}
          />
          <label key={item.index}>
          {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default MatchMemberList;
