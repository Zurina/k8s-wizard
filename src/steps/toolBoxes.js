import React from "react";
import Security from "../box-components/security";
import IAC from "../box-components/iac";
import EnvIsolation from "../box-components/envIsolation";
import ContainerRegistry from "../box-components/containerRegistry";
import ApplicationPackaging from "../box-components/applicationPackaging";
import VersionControl from "../box-components/versionControl";
import RepositoryStructure from "../box-components/repositoryStructure";
import CI from "../box-components/CI";
import CD from "../box-components/CD";
import Traffic from "../box-components/traffic";
import Networking from "../box-components/networking";
import ServiceMesh from "../box-components/serviceMesh";
import Storage from "../box-components/storage";
import Observability from "../box-components/observability";
import Credentials from "../box-components/credentials";
import DevEnv from "../box-components/devEnv";
import BackupClusters from "../box-components/backupClusters";
import Authentication from "../box-components/authentication";
import Configuration from "../components/configuration";
import Context from "../context/context";

const ToolBoxes = (props) => {
	const [toolState, setToolState] = React.useState({});

	let concepts = [
		"Infrastructure as Code",
		"Authentication",
		"Environment Isolation",
		"Container Registry",
		"Application Packaging",
		"Version Control",
		"Repository Structure",
		"Continuous Integration",
		"Continuous Deployment",
		"Traffic",
		"Networking",
		"Service Mesh",
		"Storage",
		"Observability",
		"Credentials",
		"Development Environment",
		"Backup Clusters",
		"Security",
	];

	return (
		<Context.Provider value={[toolState, setToolState, concepts]}>
			<div className="toolbox-container">
				<Configuration envState={props.envState} />
				<div className="toolboxes">
					<h1>Which tools are you looking for?</h1>
					<div className="boxes-container">
						<IAC />
						<Authentication />
						<EnvIsolation />
						<ContainerRegistry />
						<ApplicationPackaging />
						<VersionControl />
						<RepositoryStructure />
						<CI />
						<CD />
						<Traffic />
						<Networking />
						<ServiceMesh />
						<Storage />
						<Observability />
						<Credentials />
						<DevEnv />
						<BackupClusters />
						<Security />
					</div>
				</div>
			</div>
		</Context.Provider>
	);
};

export default ToolBoxes;
