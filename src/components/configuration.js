import React from "react";
import "../styles/configuration.scss";

const Configuration = (props) => {
	function onInputChange(e) {
		if (
			props.toolState.hasOwnProperty(e.target.id) &&
			props.toolState[e.target.id] != undefined
		) {
			props.setToolState((prev) => ({
				...prev,
				[e.target.id]: undefined,
			}));
		}
	}

	return (
		<div className="configuration-container">
			<h2>Environment</h2>
			<div>
				<pre>{JSON.stringify(props.envState, null, 2)}</pre>
			</div>
			<h2>Tools</h2>
			<ul>
				<li>
					<input
						id="Infrastructure as Code"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Infrastructure as Code") &&
							props.toolState["Infrastructure as Code"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Infrastructure as Code</label>
				</li>
				<li>
					<input
						id="Authentication"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Authentication") &&
							props.toolState["Authentication"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Authentication</label>
				</li>
				<li>
					<input
						id="Environment Isolation"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Environment Isolation") &&
							props.toolState["Environment Isolation"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Environment Isolation</label>
				</li>
				<li>
					<input
						id="Container Registry"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Container Registry") &&
							props.toolState["Container Registry"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Container Registry</label>
				</li>
				<li>
					<input
						id="Application Packaging"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Application Packaging") &&
							props.toolState["Application Packaging"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Application Packaging</label>
				</li>
				<li>
					<input
						id="Version Control"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Version Control") &&
							props.toolState["Version Control"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Version Control</label>
				</li>
				<li>
					<input
						id="Repository Structure"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Repository Structure") &&
							props.toolState["Repository Structure"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Repository Structure</label>
				</li>
				<li>
					<input
						id="Continuous Integration"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Continuous Integration") &&
							props.toolState["Continuous Integration"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">CI</label>
				</li>
				<li>
					<input
						id="Continuous Deployment"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Continuous Deployment") &&
							props.toolState["Continuous Deployment"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">CD</label>
				</li>
				<li>
					<input
						id="Traffic"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Traffic") &&
							props.toolState["Traffic"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Traffic</label>
				</li>
				<li>
					<input
						id="Networking"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Networking") &&
							props.toolState["Networking"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Networking</label>
				</li>
				<li>
					<input
						id="Service Mesh"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Service Mesh") &&
							props.toolState["Service Mesh"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Service Mesh</label>
				</li>
				<li>
					<input
						id="Storage"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Storage") &&
							props.toolState["Storage"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Storage</label>
				</li>
				<li>
					<input
						id="Observability"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Observability") &&
							props.toolState["Observability"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Observability</label>
				</li>
				<li>
					<input
						id="Credentials"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Credentials") &&
							props.toolState["Credentials"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Credentials</label>
				</li>
				<li>
					<input
						id="Development Environment"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Development Environment") &&
							props.toolState["Development Environment"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Development Environment</label>
				</li>
				<li>
					<input
						id="Backup Clusters"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Backup Clusters") &&
							props.toolState["Backup Clusters"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Backup Clusters</label>
				</li>
				<li>
					<input
						id="Security"
						type="checkbox"
						class="switch"
						checked={
							props.toolState.hasOwnProperty("Security") &&
							props.toolState["Security"] != undefined
								? true
								: false
						}
						onChange={onInputChange}
					/>
					<label htmlFor="s1">Security</label>
				</li>
			</ul>
		</div>
	);
};

export default Configuration;
