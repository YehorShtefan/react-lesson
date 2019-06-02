import React from 'react';

import './Content.css';

const Content = props => {
	const updatedUsers = props.users.map(user => {
		return <li key={user.name}> {user.name}, {user.age} </li>;	
	});
	
	
	return (
		<div className="content">
			<ol>	
				{updatedUsers}
			</ol>
		</div>
	);
};

export default Content; 