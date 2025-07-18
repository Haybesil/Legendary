import React, { useState } from 'react';
import { ButtonOutline, ButtonSolid } from '../common/base/buttons/Button';
import { ArrowLeft } from 'lucide-react';

const Sidebar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="md:flex bg-[#F7F8F9] dark:bg-gray-800 w-[35%] p-6 rounded-l-lg">
      <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
        <li
          className={`hover:bg-blue-50 hover:border-b-2 hover:border-blue-600 px-2 py-3 ${
            activeTab === 'personal'
              ? 'bg-blue-50 border-b-2 border-blue-600'
              : ''
          }`}
        >
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="tab"
              checked={activeTab === 'personal'}
              onChange={() => setActiveTab('personal')}
              className="h-5 w-5 rounded-full"
            />
            <div>
              <button
                onClick={() => setActiveTab('personal')}
                className="inline-flex items-center text-p-primary dark:text-white border-transparent w-full transition duration-200 ease-in-out text-left whitespace-nowrap"
              >
                Personal Information
              </button>
              <span className="block text-[14px] text-p-secondary-black font-normal">
                Please provide your personal details to proceed
              </span>
            </div>
          </div>
        </li>
        <li
          className={`hover:bg-blue-50 hover:border-b-2 hover:border-blue-600 px-2 py-3 ${
            activeTab === 'company'
              ? 'bg-blue-50 border-b-2 border-blue-600'
              : ''
          }`}
        >
            <div className='flex gap-3'>
            <input
            type="checkbox"
            name="tab"
            checked={activeTab === 'company'}
            onChange={() => setActiveTab('company')}
            className="h-5 w-5 rounded-full"
          />
          <div>
          <button
            onClick={() => setActiveTab('company')}
            className="inline-flex items-center text-p-primary dark:text-white border-transparent w-full transition duration-200 ease-in-out text-left whitespace-nowrap"
          >
            Company Information
          </button>
          <span className="block text-[14px] text-p-secondary-black font-normal">
            Enter your company details to complete the registration
          </span>
          </div>
            </div>
          
          
        </li>
      </ul>
    </div>
  );
};

const PersonalInformation = () => {
  return (
    <div className="pt-2 text-medium text-gray-500 ">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <div className="flex space-x-2">
            <select className="w-[5%] border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>+1</option>
              <option>+44</option>
              <option>+91</option>
            </select>
            <input
              type="number"
              className="w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <ButtonSolid text="Save and Continue" className=""></ButtonSolid>
      </div>
    </div>
  );
};

const CompanyInformation = () => {
  return (
    <>
      <ButtonOutline text="Back" title="Back" icon={<ArrowLeft/>}></ButtonOutline>
      <div className="pt-2 dark:bg-gray-800 text-medium text-gray-500">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Company Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Registration Number
            </label>
            <input
              type="text"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Reg. Number"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company Address
          </label>
          <input
            type="text"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Company Address"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Street Number
            </label>
            <input
              type="text"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Street Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City
            </label>
            <select className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <select className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select Country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <ButtonSolid text="Save and Continue" className=""></ButtonSolid>
        </div>
      </div>
    </>
  );
};

const AddInformation = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="md:flex bg-white shadow-2xl rounded-lg w-full max-w-[50rem]">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-6 text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
          {activeTab === 'personal' ? (
            <PersonalInformation />
          ) : (
            <CompanyInformation />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddInformation;
