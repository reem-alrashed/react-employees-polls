import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({children, isLoggedin}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return isLoggedin ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}) => ({
    isLoggedin: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
