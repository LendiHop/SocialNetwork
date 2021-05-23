import {Sidebar} from "./Sidebar";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        friends: state.sidebar.friends,
    }
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar);