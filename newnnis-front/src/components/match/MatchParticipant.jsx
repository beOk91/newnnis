import React, { useState, useEffect } from "react";

const MatchParticipant = ({ newnnisM, selectedGroup, setSelectedMember }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setCheckedItems((prevItems) => {
      if (checked) {
        return { ...prevItems, [name]: checked };
      } else {
        const updatedItems = { ...prevItems };
        delete updatedItems[name];
        return updatedItems;
      }
    });
  };

  const selectAll = (e) => {
    const allMember = {};
    newnnisM[selectedGroup].forEach(
      (m) => (allMember[m.name] = e.target.checked)
    );
    setCheckedItems(allMember);
  };

  useEffect(() => {
    setSelectedMember(checkedItems);
  }, [checkedItems, setSelectedMember]);

  useEffect(() => {
    console.log(newnnisM);
  }, [newnnisM]);

  return (
    <div className="memberBox">
      <ul className="thead">
        <li>참가자</li>
      </ul>
      <ul className="memberList">
        <li className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={selectAll}
          />
          <label htmlFor="cbxall">ALL</label>
        </li>
        {newnnisM[selectedGroup] &&
          newnnisM[selectedGroup].map((item) => (
            <li className={selectedGroup} key={item.name}>
              <input
                type="checkbox"
                name={item.name}
                checked={checkedItems[item.name] || false}
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
