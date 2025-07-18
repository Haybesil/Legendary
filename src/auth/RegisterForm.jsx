import React, { useState } from 'react';
import AuthNav from './AuthNav';
import { Link } from 'react-router-dom';
import { EyeClosed, Eye, LockKeyhole, Mail, Gift } from 'lucide-react';
import OtpVerification from './OtpVerification';

export default function RegisterForm() {
  const checkRequirementStyle =
    'w-4 h-4 rounded-full border-gray-300 focus:ring-0 cursor-default checked:bg-green-500 checked:border-green-500';
  const inputBoxStyle =
    'pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-[400]';
  const buttonStyle =
    'w-full text-white bg-p-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [requirements, setRequirements] = useState({
    minLength: false,
    uppercase: false,
    specialChar: false,
    number: false,
  });

  const [otpSent, setOtpSent] = useState(false); // OTP sent confirmation
  const [showOtpModal, setShowOtpModal] = useState(false); // OTP modal visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setRequirements({
      minLength: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      number: /\d/.test(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    setOtpSent(true);

    setTimeout(() => {
      setShowOtpModal(true); // Show OTP verification modal after 3 seconds
      setOtpSent(false);
    }, 3000);
  };

  let message = `Otp successfully sent to ${email}`

  return (
    <div>
      <AuthNav text="Already on AssuredBid?" buttonText="Login" />
      <div>
        <div className="flex items-center justify-center mt-5 bg-white">
          <div className="w-full max-w-md p-4 bg-white rounded-lg sm:p-6 md:p-8 shadow-2xl shadow-slate-400">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-[24px] font-semibold text-p-black text-center">
                Create an Account
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[14px] font-medium text-p-secondary"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail color="gray" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    className={inputBoxStyle}
                    placeholder="nelson@npf.org"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-[14px] font-medium text-p-secondary"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <LockKeyhole color="gray" />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="***********"
                    className={inputBoxStyle}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-300"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </button>
                </div>
              </div>
              <div>
                <span className="flex justify-between items-center">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={requirements.minLength}
                      readOnly
                      className={checkRequirementStyle}
                    />
                    <p className="text-p-black text-[12px] font-normal pb-2">
                      Atleast 8 characters
                    </p>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={requirements.uppercase}
                      readOnly
                      className={checkRequirementStyle}
                    />
                    <p className="text-p-black text-[12px] font-normal">
                      At least one uppercase
                    </p>
                  </label>
                </span>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={requirements.specialChar}
                    readOnly
                    className={checkRequirementStyle}
                  />
                  <p className="text-p-black text-[12px] font-normal pb-2">
                    At least one special character
                  </p>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={requirements.number}
                    readOnly
                    className={checkRequirementStyle}
                  />
                  <p className="text-p-black text-[12px] font-normal">
                    At least one number
                  </p>
                </label>
              </div>

              <div className="pt-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-[14px] font-normal text-p-secondary-black whitespace-nowrap"
                  >
                    By clicking, you accept our{' '}
                    <span className="font-semibold">Terms of use</span> and{' '}
                    <span className="font-semibold">Privacy Policy</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={buttonStyle}
                disabled={
                  !(
                    requirements.minLength &&
                    requirements.uppercase &&
                    requirements.specialChar &&
                    requirements.number
                  )
                }
              >
                Create Account
              </button>
              {otpSent && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 text-p-secondary-black bg-[#F7F7F7] text-[14px] font-normal mt-2 flex gap-2 text-center py-3 px-4 rounded">
                 <Gift color='green'/> {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
       {/* OTP Modal */}
       {showOtpModal && (
       <OtpVerification email={email}/>
      )}
    </div>
  );
}
