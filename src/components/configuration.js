import React from "react";
import "./configuration.scss";

const Configuration = (props) => {
	return (
		<div className="configuration-container">
			<h2>Current configuration</h2>
			<ul>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Infrastructure as Code </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Environment Isolation </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Container Registry </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Application Packaging </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Version Control </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Repository Structure </label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">CI</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">CD</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Traffic</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Networking</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Service Mesh</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Storage</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Observability</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Credentials</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Development Environment</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Backup Clusters</label>
				</li>
				<li>
					<input id="s1" type="checkbox" class="switch" />
					<label for="s1">Security</label>
				</li>
			</ul>
		</div>
	);
};

export default Configuration;
