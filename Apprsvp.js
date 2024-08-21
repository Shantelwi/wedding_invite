import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RsvpList from "./src/components/RsvpList";
import ProtectedRoute from "./server/routes/rsvp";
import Login from "./src/components/Login"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path='/rsvp-list' component={RsvpList} />
            </Switch>
        </Router>
    );
}

export default App;