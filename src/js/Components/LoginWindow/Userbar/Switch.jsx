import React from "react";
import {connect} from "react-redux";
import cxs from "cxs";

import {data} from "../../../../lang";

class Switch extends React.Component {
    constructor(props) {super(props);}
    render() {return (<div className={"switch text button " + cxs({color: this.props.color})} onClick={() => {this.props.switch()}}>{data.get(this.props.lang, "buttons.switch")}</div>);}
}

export default connect((state) => {return {color: state.settings.style.main.textcolor, lang: state.settings.behaviour.language}}, (dispatch) => {return {switch: () => {dispatch({type: "Switch_User"})}}})(Switch);