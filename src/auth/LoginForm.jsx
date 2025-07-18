import React, { useState } from 'react';
import AuthNav from './AuthNav';
import { Link } from 'react-router-dom';
import { EyeClosed, Eye, LockKeyhole, Mail } from 'lucide-react';

export default function LoginForm() {
  const checkRequirementStyle =
    'w-4 h-4 rounded-full border-gray-300 focus:ring-0 cursor-default checked:bg-green-500 checked:border-green-500';
  const inputBoxStyle =
    'pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-[400]';
  const buttonStyle =
    'w-full text-white bg-p-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <AuthNav text="New to AssuredBid?" buttonText="Register" />
      <div>
        <div className="flex items-center justify-center mt-5 bg-white">
          <div className="w-full max-w-md p-4 bg-white rounded-lg sm:p-6 md:p-8 shadow-2xl shadow-slate-400">
            <form className="space-y-6" action="#">
              <h5 className="text-[24px] font-semibold text-p-black text-center">
                Welcome Back
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[14px] font-medium text-p-secondary"
                >
                  Username
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail color="gray" />
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className={inputBoxStyle}
                    placeholder="Username"
                    required
                  />
                </div>
              </div>
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
                    id="email"
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

              <button type="submit" className={buttonStyle}>
                Login
              </button>
            </form>
            <p className="pt-4 text-center text-[14px] font-normal text-p-secondary-black">
              Forget password?{' '}
              <span className="font-semibold text-p-primary">Reset it</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
