import React from 'react'
import { Card } from 'antd';
import PropTypes from "prop-types";

const StatisticWidget = ({ title, value }) => {
	return (
		<Card>
			{title && <h4 className="mb-0 text-center">{title}</h4>}
			<h1 className="mb-0 font-weight-bold text-center" >{value}</h1>
		</Card>
	)
}

StatisticWidget.propTypes = {
  	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	value: PropTypes.string
};

export default StatisticWidget