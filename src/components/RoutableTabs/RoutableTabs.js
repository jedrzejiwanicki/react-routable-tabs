import React, { Component } from 'react';
import { Redirect, Route, Link, Switch, withRouter } from 'react-router-dom';
import cx from 'classnames';

import { pathConfig } from './utils';
import Tab from './Tab';

class RoutableTabs extends Component {
	static Tab = Tab;

	get children() {
		return React.Children.toArray(this.props.children);
	}

	get routes() {
		return this.children.map(this.applyRouteConfig)
	}

	get default() {
		return this.routes.find(({ props: { defaultTab } }) => defaultTab)
	}

	get hasSelectedTab() {
		const { location: { pathname } } = this.props;

		return !!this.routes.find(({ path }) => path === pathname);
	}

	applyRouteConfig = (child) => {
		const { relative, match: { url } } = this.props;

		return {
			...child,
			...pathConfig(child, url, relative)
		}
	}

	isSelected = (path) => {
		const { location: { pathname } } = this.props;

		return pathname === path;
	}

	render() {
		return (
			<div>
				{this.default && !this.hasSelectedTab && (
					<Redirect to={this.default.path} />
				)}
				<nav>
					{this.routes.map(({ props: { title, className, selectedClassName }, path }) => (
						<Link to={path} className={cx(className, { [selectedClassName]: this.isSelected(path)})}>
							{title}
						</Link>
					))}
				</nav>
				<Switch>
					{this.routes.map((child) => (
						<Route path={child.path} render={() => child} />
					))}
				</Switch>
			</div>
		);
	}
}

export default withRouter(RoutableTabs);