import React, { Component } from 'react';

import RoutableTabs from '../RoutableTabs';

class Tabs extends Component {
	render() {
		return (
			<RoutableTabs relative>
				<RoutableTabs.Tab
					title="1"
					path="/1"
					selectedClassName="selected"
				>
					<div>1</div>
				</RoutableTabs.Tab>
				<RoutableTabs.Tab
					title="2"
					path="/2"
					defaultTab
					selectedClassName="selected"
				>
					<div>2</div>
				</RoutableTabs.Tab>
			</RoutableTabs>
		)
	}
}

export default Tabs;