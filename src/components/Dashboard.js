import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {

    const unanswered = (question) => (
        !question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id)
    );

    const answered = (question) => (
        question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id)
    );

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex justify-center items-center py-12">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 tracking-tight">
                    Dashboard
                </h1>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    New Questions
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {questions
                        .filter(unanswered)
                        .map((question) => (
                            <li key={question.id} className="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <Card question={question} author={users[question.author]} />
                            </li>
                        ))}
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
                    Answered Questions
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {questions
                        .filter(answered)
                        .map((question) => (
                            <li key={question.id} className="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <Card question={question} author={users[question.author]} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
