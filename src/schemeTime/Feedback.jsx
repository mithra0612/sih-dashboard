import React, { useState } from "react";

const schemes = [
  "Post Office Savings Account",
  "Recurring Deposit (RD)",
  "Time Deposit (TD)",
  "Public Provident Fund (PPF)",
  "National Savings Certificate (NSC)",
  "Kisan Vikas Patra (KVP)",
  "Sukanya Samriddhi Yojana (SSY)",
  "Senior Citizen Savings Scheme (SCSS)",
  "Atal Pension Yojana (APY)",
  "Postal Life Insurance (PLI)",
  "Rural Postal Life Insurance (RPLI)",
  "India Post Payments Bank (IPPB)",
  "Money Transfer Service Scheme (MTSS)",
  "Direct Benefit Transfer (DBT)",
  "Mahila Samman Savings Certificate",
  "Kisan Credit Card (KCC)",
];

const Feedback = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    scheme: "",
    location: "",
    learnAboutScheme: [],
    expectations: "",
    challenges: "",
    challengesDetails: "",
    communication: "",
    suggestions: "",
    impact: [],
    recommend: "",
    testimonial: "",
    futureContact: "",
    preferredContact: "",
    additionalFeedback: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="h-screen w-full bg-violet-50 overflow-auto">
      <div className="h-full w-screen flex flex-col items-center justify-center p-4">
        {/* Centered Heading */}
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-[650px] flex flex-col justify-center"
          onSubmit={handleSubmit}
          style={{ marginTop: "400px" }} // Adjust this value to set the top gap
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Financial Scheme Feedback
          </h2>

          {/* Single-column layout */}
          <div className="flex flex-col gap-6">
            {/* Question 1 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Please provide your full name.
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-100"
                placeholder="Full Name"
              />
            </div>

            {/* Question 2 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Which financial scheme or product did you avail?
              </label>
              <select
                name="scheme"
                value={formData.scheme}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-100 text-gray-700 "
              >
                <option
                  value=""
                  className="hover:bg-violet-50 hover:text-gray-900"
                >
                  Select a scheme
                </option>
                {schemes.map((scheme, index) => (
                  <option key={index} value={scheme}>
                    {scheme}
                  </option>
                ))}
              </select>
            </div>

            {/* Question 3 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Kindly specify your location.
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-100"
                placeholder="Location"
              />
            </div>

            {/* Question 4 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                How did you first learn about this scheme?
              </label>
              <div className="flex flex-col gap-2 text-gray-700">
                {[
                  "Social Media",
                  "Word of Mouth",
                  "Post Office Staff",
                  "Advertisement",
                  "Other",
                ].map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      name="learnAboutScheme"
                      value={option}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Question 5 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Did the scheme meet your expectations?
              </label>
              <div className="flex flex-col gap-2 text-gray-700">
                {[
                  "Exceeded Expectations",
                  "Met Expectations",
                  "Did Not Meet Expectations",
                ].map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="expectations"
                      value={option}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Question 6 */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Did you encounter any challenges during the application process?
              </label>
              <div className="flex flex-col gap-2 text-gray-700">
                {["Yes", "No", "Not Applicable"].map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="challenges"
                      value={option}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {formData.challenges === "Yes" && (
                <textarea
                  name="challengesDetails"
                  value={formData.challengesDetails}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-100"
                  placeholder="Please describe the challenges"
                />
              )}
            </div>

            {/* Testimonials Section */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Share your testimonial (Optional):
              </label>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-100"
                placeholder="Your testimonial here"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
