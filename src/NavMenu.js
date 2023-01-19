import React from 'react';
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavMenu = (props) => {
    const {menu} = props
    return (
        <div>
            <ul className="nav nav-tabs nav-justified">
                {menu.map((el, i) =>
                    (<li key={i} className="nav-item">
                        <a className="nav-link" href="">{el}</a>
                    </li>))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    menu: state.menu,
})
export default connect(mapStateToProps)(NavMenu);
