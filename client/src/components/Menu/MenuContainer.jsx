import {connect} from "react-redux";
import Menu from "./Menu";

const mapStateToProps = (state) => {
    return {
        users: state.menu.users,
        activeUsers: state.menu.activeUsers,
        info: state.menu.info
    }
}

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;