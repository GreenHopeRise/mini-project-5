import React, { useRef, useState } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  // handleChange: টাইপ করলে state update আর ফোকাস পরের ঘরে
  const handleChange = (e, index) => {
    const value = e.target.value;

    // allow only 0-9 or empty
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ফোকাস পরের ঘরে
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // handleKeyDown: backspace দিলে আগের ঘরে ফোকাস
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // OTP রেজাল্ট দেখতে
  const getOTP = () => {
    alert("OTP: " + otp.join(""));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter OTP</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "20px",
              border: "1px solid gray",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>

      <button
        onClick={getOTP}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Otp;
