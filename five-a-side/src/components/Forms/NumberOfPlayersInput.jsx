import React from "react";

export default ({ name, label, value, onChange, maxPlayers}) => (
// a dropdown menu with the options listed out using props that have been passed down from the parent (form)
	<div className="form-group">
		<label htmlFor={ name }>{ label }: Currently set to {maxPlayers}</label>
		<select style={ inputStyle } value={value} onChange={onChange} className="form-control">
			<option value=""> Select Number of Players </option>
			<option value="6">6</option>
			<option value="8">8</option>
			<option value="10">10</option>
			<option value="12">12</option>
			<option value="14">14</option>
			<option value="16">16</option>
			<option value="18">18</option>
			<option value="20">20</option>
			<option value="22">22</option>
		</select>
	</div>

);


const inputStyle = {
	backgroundColor: "#001956",
	width: "70%",
	margin: "0 auto",
	color: "#F2F2F2",
	borderColor: "#395396",

}