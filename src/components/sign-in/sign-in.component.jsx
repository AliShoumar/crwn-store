import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}
	handleSumbit = event => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	};
	handleChange = event => {
		const {name, value} = event.target;
		this.setState({[name]: value});
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sigin with your email and password</span>

				<form onSubmit={this.handleSumbit}>
					<FormInput
						type='text'
						name='email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label='email'
					/>
					<FormInput
						type='text'
						name='password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
						label='password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignin={true}>
							Sign In with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
