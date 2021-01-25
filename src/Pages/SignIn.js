import React, { useState } from "react"

import { ErrorMessage } from '../Components/ErrorMessage'

export const SignIn = ({ signIn, signInStatus }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSignIn = (event) => {
		event.preventDefault()
		const user = {
			email: email,
			password: password,
		}
		signIn(user)
	}

	return (
		<section>
			<form onSubmit={(event) => handleSignIn(event)} className="form">
				<h2>Sign in here</h2>
				<input
					type="email"
					id="email"
					required
					placeholder="E-mail address"
					onChange={(event) => setEmail(event.target.value)}
					value={email}
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
				></input>
				<input
					type="password"
					id="password"
					required
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
					value={password}
				></input>
				<button className="button" type="submit">
					Sign in
				</button>
				<output>
					{signInStatus === false && (
						<ErrorMessage message={"Sign in failed."} />
					)}
				</output>
			</form>
		</section>
	)
}