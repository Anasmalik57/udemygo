"use client";

import React, { useState } from "react";
import ScrollLogo from "../Global/ScrollLogo";

const CompareCourseComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    state: "",
    specialization: "",
    subsidyOption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-7 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden transition duration-300">
        {/* Left Partition - Info Section */}
        <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex flex-col justify-between">
          <div>
            <div className="w-full h-fit overflow-hidden">
              <ScrollLogo />
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="text-left pt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Compare & Apply from 21+ online MBA Universities No Cost EMI |
                  ( Early bird Discount )
                </h2>
              </div>
            </div>

            <p className="text-blue-600 text-lg font-medium mb-6">
              India’s leading Online Universities on a Single Platform within
              two minutes.
            </p>

            <ul className="text-gray-700 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> 21+ Universities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Comparison
                Factors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Free Expert
                Consultation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">★</span> Post Admission
                Support
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">
              Your personal information is secure with us
            </p>
          </div>
        </div>

        {/* Right Partition - Form Section */}
        <div className="md:w-1/2 p-8 bg-white">
          <h2 className="text-3xl tracking-wide text-center font-bold stroke-3 pb-8 text-transparent bg-clip-text bg-gradient-to-l from-violet-800 via-violet-500 to-blue-500">
            Choose Your Best One
          </h2>
          <form
            action="https://formsubmit.co/info@udemygo.com"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Course Comparison Form Submission!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://udemygo.com/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="flex items-center">
                <span className="p-3 bg-gray-100 border border-r-0 rounded-l-lg">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number*"
                  className="w-full p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">State*</option>
                <option value="andhra_pradesh">Andhra Pradesh</option>
                <option value="arunachal_pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal_pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya_pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil_nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar_pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west_bengal">West Bengal</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="delhi">Delhi</option>
                <option value="jammu_and_kashmir">Jammu and Kashmir</option>
                <option value="ladakh">Ladakh</option>
                <option value="puducherry">Puducherry</option>
                <option value="others">Others</option>
              </select>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Specialization*</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="human_resource_management">
                  Human Resource Management
                </option>
                <option value="operations_management">
                  Operations Management
                </option>
                <option value="information_technology">
                  Information Technology
                </option>
                <option value="international_business">
                  International Business
                </option>
                <option value="supply_chain_management">
                  Supply Chain Management
                </option>
                <option value="business_analytics">Business Analytics</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="strategic_management">
                  Strategic Management
                </option>
                <option value="retail_management">Retail Management</option>
                <option value="healthcare_management">
                  Healthcare Management
                </option>
                <option value="agribusiness_management">
                  Agribusiness Management
                </option>
                <option value="others">Others</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 text-lg font-semibold"
            >
              Find Best University in 2 Mins
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            I authorise UdemyGO & its representatives to contact me with updates
            and notifications via Email/SMS/WhatsApp/Call. This will override on
            DND/NDNC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompareCourseComponent;
