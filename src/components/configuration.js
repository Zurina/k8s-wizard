import React from "react";
import "./configuration.scss";

const Configuration = (props) => {
	return (
		<div className="configuration-container">
			<h2>Environment</h2>
			<div><pre>{JSON.stringify(props.state, null, 2) }</pre></div>
			<h2>Tools</h2>
			<ul>
				<li>
					<input id="input-iac" type="checkbox" class="switch" />
					<label htmlFor="s1">Infrastructure as Code </label>
				</li>
				<li>
					<input id="input-auth" type="checkbox" class="switch" />
					<label htmlFor="s1">Authentication </label>
				</li>
				<li>
					<input id="input-env-iso" type="checkbox" class="switch" />
					<label htmlFor="s1">Environment Isolation </label>
				</li>
				<li>
					<input id="input-container-reg" type="checkbox" class="switch" />
					<label htmlFor="s1">Container Registry </label>
				</li>
				<li>
					<input id="input-app-packaging" type="checkbox" class="switch" />
					<label htmlFor="s1">Application Packaging </label>
				</li>
				<li>
					<input id="input-vcr" type="checkbox" class="switch" />
					<label htmlFor="s1">Version Control </label>
				</li>
				<li>
					<input id="input-rs" type="checkbox" class="switch" />
					<label htmlFor="s1">Repository Structure </label>
				</li>
				<li>
					<input id="input-ci" type="checkbox" class="switch" />
					<label htmlFor="s1">CI</label>
				</li>
				<li>
					<input id="input-cd" type="checkbox" class="switch" />
					<label htmlFor="s1">CD</label>
				</li>
				<li>
					<input id="input-traffic" type="checkbox" class="switch" />
					<label htmlFor="s1">Traffic</label>
				</li>
				<li>
					<input id="input-networking" type="checkbox" class="switch" />
					<label htmlFor="s1">Networking</label>
				</li>
				<li>
					<input id="input-service-mesh" type="checkbox" class="switch" />
					<label htmlFor="s1">Service Mesh</label>
				</li>
				<li>
					<input id="input-storage" type="checkbox" class="switch" />
					<label htmlFor="s1">Storage</label>
				</li>
				<li>
					<input id="input-obs" type="checkbox" class="switch" />
					<label htmlFor="s1">Observability</label>
				</li>
				<li>
					<input id="input-creds" type="checkbox" class="switch" />
					<label htmlFor="s1">Credentials</label>
				</li>
				<li>
					<input id="input-dev-env" type="checkbox" class="switch" />
					<label htmlFor="s1">Development Environment</label>
				</li>
				<li>
					<input id="input-backup" type="checkbox" class="switch" />
					<label htmlFor="s1">Backup Clusters</label>
				</li>
				<li>
					<input id="input-security" type="checkbox" class="switch" />
					<label htmlFor="s1">Security</label>
				</li>
			</ul>
		</div>
	);
};

export default Configuration;
