import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Alert } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { 
	signIn, 
	showLoading, 
	showAuthMessage, 
	hideAuthMessage
} from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

export const LoginForm = props => {
	let history = useHistory();

	const { 
		hideAuthMessage,
		showLoading,
		signIn, 
		token, 
		loading,
		redirect,
		showMessage,
		message,
		allowRedirect
	} = props
	
	const onLogin = values => {
		showLoading()
		signIn(values);
	};


	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});
	

	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form 
				layout="vertical" 
				name="login-form" 
				onFinish={onLogin}
			>
				<Form.Item 
					name="email" 
					label="Email" 
					rules={[
						{ 
							required: true,
							message: 'Please input your email',
						},
						{ 
							type: 'email',
							message: 'Please enter a validate email!'
						}
					]}>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password"
					rules={[
						{ 
							required: true,
							message: 'Please input your password',
						}
					]}
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign In
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true
};

const mapStateToProps = ({auth}) => {
	const {loading, message, showMessage, token, redirect} = auth;
  return {loading, message, showMessage, token, redirect}
}

const mapDispatchToProps = {
	signIn,
	showAuthMessage,
	showLoading,
	hideAuthMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
