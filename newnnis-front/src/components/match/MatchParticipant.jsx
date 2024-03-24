import React, { useState, useEffect } from "react";

const MatchParticipant = ({ newnnisM, selectedGroup, setSelectedMember }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    console.log(event);
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [selectedGroup]: {
        ...prevItems[selectedGroup],
        [name]: checked,
      },
    }));
  };

  const selectAll = (e) => {
    const allChecked = newnnisM[selectedGroup].reduce((acc, member) => {
      acc[member.name] = e.target.checked;
      return acc;
    }, {});

    setCheckedItems((prevItems) => ({
      ...prevItems,
      [selectedGroup]: allChecked,
    }));
  };

  useEffect(() => {
    setSelectedMember(checkedItems[selectedGroup] || {});
  }, [checkedItems, selectedGroup, setSelectedMember]);

  return (
    <div className="memberBox">
      <ul className="thead">
        <li>참가자</li>
      </ul>
      <ul className="memberList">
        {/* <li className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={selectAll}
          />
          <label htmlFor="cbxall">ALL</label>
        </li> */}
        {newnnisM[selectedGroup] &&
          newnnisM[selectedGroup].map((item) => (
            <li className={selectedGroup} key={item.name}>
              <input
                type="checkbox"
                name={item.name}
                checked={
                  checkedItems[selectedGroup]
                    ? checkedItems[selectedGroup][item.name] || false
                    : false
                }
                onChange={handleCheckboxChange}
              />
              <label>{item.name}</label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MatchParticipant;
