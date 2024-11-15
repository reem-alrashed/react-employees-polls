import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author }) => {
    return (
        <Link to={'/questions/' + question.id}>
            <div className="m-1 p-4 rounded-2xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-12 w-12 rounded-full" src={author?.avatarURL} alt="Author" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{question.author}</div>
                    <p className="text-xs italic">Created at {new Date(question.timestamp).toDateString()}</p>
                </div>
            </div>
        </Link>
    );
}

export default connect()(Card);
