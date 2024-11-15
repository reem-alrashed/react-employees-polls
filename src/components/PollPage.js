import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import "../util/PollPage.css";

const PollPage = ({ dispatch, authedUser, questions, users }) => {
  const { id } = useParams();  // Get the question id from the URL params
  const navigate = useNavigate();

  // Find the question and the author based on the id from useParams
  const question = Object.values(questions).find((q) => q.id === id);
  const author = question ? users[question.author] : null;

  // Redirect to 404 if any required data is missing
  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  // Check if user has already voted for option 1 or 2
  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  // Handle answer selection and navigation
  const handleOption = (option) => {
    dispatch(handleAddAnswer(question.id, option));
    navigate("/");
  };

  // Calculate percentage of votes for each option
  const calcPercentage = (option) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionVotes = option === "optionOne" ? question.optionOne.votes.length : question.optionTwo.votes.length;
    return (optionVotes / totalVotes) * 100 + " %";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex justify-center items-center py-12">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Poll created by {author.name}
        </h1>

        <div className="flex justify-center mb-6">
          <img src={author.avatarURL} alt="Profile" className="h-24 w-24 rounded-full border-4 border-white shadow-lg" />
        </div>

        {/* Conditional Rendering of Vote Text */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {hasVoted ? "Thank you for voting!" : "Choose an option to vote!"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1 */}
          <button
            onClick={() => handleOption("optionOne")}
            disabled={hasVoted}
            className={`p-4 rounded-xl bg-zinc-100 shadow-md hover:shadow-xl transition-all ease-in-out transform ${hasVotedForOptionOne ? "bg-sky-400" : ""}`}
          >
            <div className={hasVotedForOptionOne ? "bg-blue-100 p-4 rounded-xl" : ""}>
              <p className="font-semibold text-lg">{question.optionOne.text}</p>
              {hasVoted && (
                <p className="text-xs mt-2">
                  Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne")})
                </p>
              )}
            </div>
          </button>

          {/* Option 2 */}
          <button
            onClick={() => handleOption("optionTwo")}
            disabled={hasVoted}
            className={`p-4 rounded-xl bg-zinc-100 shadow-md hover:shadow-xl transition-all ease-in-out transform ${hasVotedForOptionTwo ? "bg-sky-400" : ""}`}
          >
            <div className={hasVotedForOptionTwo ? "bg-blue-100 p-4 rounded-xl" : ""}>
              <p className="font-semibold text-lg">{question.optionTwo.text}</p>
              {hasVoted && (
                <p className="text-xs mt-2">
                  Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo")})
                </p>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  questions,
  users,
});

export default connect(mapStateToProps)(PollPage);
