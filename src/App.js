import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from "react-redux";
import TaskList from "./TaskList";
import NavMenu from "./NavMenu";

function App(props) {
    const {header, version} = props;

    return (
        <div className="App">
            <h1>{header}</h1>
            <h3>version: {version}</h3>
            <div className="nav-menu">
                <NavMenu/>
            </div>
            <div className="task-list">
                <TaskList/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    header: state.appHeader,
    version: state.version,
})
export default connect(mapStateToProps)(App);
