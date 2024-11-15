import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex justify-center items-center py-12">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Create a New Poll
        </h1>
        <form onSubmit={handleSubmit}>
          {/* First Option Input */}
          <div className="mb-6">
            <label
              htmlFor="firstOption"
              className="block text-lg font-semibold text-slate-700 mb-2"
            >
              First Option
            </label>
            <input
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              className="w-full p-4 border-2 border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition duration-300"
              placeholder="Enter first option"
            />
          </div>

          {/* Second Option Input */}
          <div className="mb-6">
            <label
              htmlFor="secondOption"
              className="block text-lg font-semibold text-slate-700 mb-2"
            >
              Second Option
            </label>
            <input
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              className="w-full p-4 border-2 border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition duration-300"
              placeholder="Enter second option"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Submit Poll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect()(NewPoll);
