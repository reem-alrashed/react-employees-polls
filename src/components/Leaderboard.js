import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Leaderboard
        </h1>
        <table className="table-auto w-full text-sm mt-6 text-gray-800">
          <thead>
            <tr>
              <th className="p-4 text-left font-semibold text-lg text-gray-700 bg-gray-100 rounded-tl-3xl">
                User
              </th>
              <th className="p-4 text-left font-semibold text-lg text-gray-700 bg-gray-100">
                Answered
              </th>
              <th className="p-4 text-left font-semibold text-lg text-gray-700 bg-gray-100 rounded-tr-3xl">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-all duration-200 ease-in-out"
              >
                <td className="p-4 border-b text-gray-800">
                  <div className="flex items-center space-x-3">
                    <img
                      className="h-12 w-12 rounded-full border-2 border-indigo-300"
                      src={user.avatarURL}
                      alt={user.name}
                    />
                    <div>
                      <span className="font-semibold text-xl">{user.name}</span>
                      <br />
                      <span className="text-sm text-gray-500">{user.id}</span>
                    </div>
                  </div>
                </td>
                <td className="border-b text-center">{Object.keys(user.answers).length}</td>
                <td className="p-4 border-b text-center">{user.questions.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
