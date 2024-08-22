import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RsvpList from "../src/components/RsvpList";
import ProtectedRoute from "../server/routes/rsvp";
import Login from "../src/components/Login"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <ProtectedRoute path='/rsvp-list' element={<RsvpList />} />
            </Routes>
        </Router>
    );
}

export default App;