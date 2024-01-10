import React from "react";

function CheckboxTest({ checked, onCheck }) {
  const handleToggle = () => {
    onCheck(!checked);
  };

  return (
    <div className="tos-checkbox">
      <input
        type="checkbox"
        id="tosCheckbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="tosCheckbox" className="tos-label">
        By continuing, you agree to{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </label>
      {/* <button onClick={handleToggle}>Toggle</button> */}
    </div>
  );
}

export default CheckboxTest;
