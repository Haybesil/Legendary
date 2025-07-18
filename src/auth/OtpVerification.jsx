import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ButtonSolid } from '../components/common/base/buttons/Button';
import Profile from '../pages/Profile';

export default function OtpVerification({ email }) {
  const [otp, setOtp] = useState(new Array(6).fill('')); // Six empty boxes
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
//   const navigate = useNavigate();

  const hardcodedOtp = '123456';

  const message = ` We sent a 6-digit code to ${email}, please
          enter the code below.`;

  const handleInputChange = (value, index) => {
    // Update the OTP array
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1); // Ensure only one character is entered
    setOtp(updatedOtp);

    // Automatically focus the next input if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move focus to the previous input if backspace is pressed on an empty box
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join(''); // Combine the entered digits
    if (otpCode === hardcodedOtp) {
      setShowSuccess(true); // Show success message
      setTimeout(() => {
        setShowSuccess(false); // Hide success message after 2 seconds
        setShowModal(true); // Open modal
        // navigate('/profile'); 
      }, 2000);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-[24px] font-semibold pb-4 text-left">
          Verify Email Address
        </h3>
        <p className="text-[14px] font-normal max-w-[350px] pb-3 text-p-primary-text">
          {message}
        </p>
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 text-center text-lg rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              maxLength={1} // Limit each box to a single character
            />
          ))}
        </div>
        <p className="pt-4 text-center text-[14px] font-normal text-p-secondary-black pb-4">
          Didn't receive any code?{' '}
          <span className="font-semibold text-p-primary">Resend OTP</span>
        </p>
        <ButtonSolid
          text="Verify"
          onClick={handleSubmit}
          className="!w-full"
        ></ButtonSolid>
      </div>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          OTP Verification Successful!
        </div>
      )}
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          OTP Verification Failed!
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Profile/>
        </div>
      )}
    </div>
  );
}
