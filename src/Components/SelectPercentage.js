import React from "react";

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <div>
        <label> {children} </label>
        <select
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was pretty good (10%)</option>
          <option value="20">It was absolutely amazing (20%)</option>
        </select>
      </div>
    </div>
  );
}

export default SelectPercentage;
