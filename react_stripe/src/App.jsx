import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const { default: Pay } = require("./Pay");
const  { default: Sucess} = require("./Sucess");

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/sucess">
                    <Sucess />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;