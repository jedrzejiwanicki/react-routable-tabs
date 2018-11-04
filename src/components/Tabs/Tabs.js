import React, { Component } from 'react';

import RoutableTabs from '../RoutableTabs';
import './Tabs.css';

class Tabs extends Component {
	get items() {
		const common = { className: 'tab', selectedClassName: 'tab--selected' };
		return [
			{
				title: '1',
				path: '/1',
				child: <div>1</div>,
				...common,
			},
			{
				title: '2',
				path: '/2',
				child: <div>2</div>,
				...common,
			}
		]
	}

	render() {
		return (
			<RoutableTabs className="tabs" relative>
				{this.items.map(item => (
					<RoutableTabs.Tab
						{...item}
					>
						{item.child}
					</RoutableTabs.Tab>
				))}
			</RoutableTabs>
		)
	}
}

export default Tabs;