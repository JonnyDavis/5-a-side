import { connect } from "react-redux";
import AddNames from "../components/AddNames";

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch( { type: 'add' }),
	};
};


export default connect(null, mapDispatchToProps)(Add);