import React from 'react';

import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';

let BugTracker = ({ bugs, toggle, removeClosed, sort, addNew }) => (
	<div>
		<BugStats bugs={bugs} />
		<BugSort bugs={bugs} sort={sort} />
		<BugEdit addNew={addNew} />
		<BugList toggle={toggle} removeClosed={removeClosed} bugs={bugs} />
	</div>
);
export default BugTracker;