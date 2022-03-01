import React, { useState } from "react";
import Switch from "react-switch"


import "../styles/main.scss";

export default function Main({ children }) {
	const [mode, setMode] = useState(true);

	const handleChange = () => {
		setMode(!mode)
	}

	return (
		<div className={mode ? "Main" : "Main Dark"}>
			<div className="header-top ">
				

				
					<Switch
						onChange={() => handleChange()}
						checked={mode}
						onColor="#4c9aff"
						uncheckedIcon={
							<span>
								
								
							</span>
						}
						checkedIcon={
							<span>
								
							</span>
						}
					/>
				<p className="modoNormal">MODE: NORMAL</p>
				<p className="modoDark">MODE: DARK</p>  
				</div>
			{children}
		</div>
	);
}

