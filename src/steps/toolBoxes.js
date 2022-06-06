import React from "react";
import { Step } from "react-albus";
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

const ToolBoxes = (props) => {

	const [toolState, setToolState] = React.useState({});

	return (
		<Step
			id="tool-boxes"
			render={({}) => (
				<div className="toolbox-container">
					<Configuration toolState={toolState} envState={props.envState} />
					<div className="toolboxes">
						<h1>Which tools and configurations are you looking for?</h1>
						<div className="boxes-container">
							<IAC setToolState={setToolState}/>
							<Authentication setToolState={setToolState}/>
							<EnvIsolation setToolState={setToolState}/>
							<ContainerRegistry setToolState={setToolState}/>
							<ApplicationPackaging setToolState={setToolState}/>
							<VersionControl setToolState={setToolState}/>
							<RepositoryStructure setToolState={setToolState}/>
							<CI setToolState={setToolState}/>
							<CD setToolState={setToolState}/>
							<Traffic setToolState={setToolState}/>
							<Networking setToolState={setToolState}/>
							<ServiceMesh setToolState={setToolState}/>
							<Storage setToolState={setToolState}/>
							<Observability setToolState={setToolState}/>
							<Credentials setToolState={setToolState}/>
							<DevEnv setToolState={setToolState}/>
							<BackupClusters setToolState={setToolState}/>
							<Security setToolState={setToolState}/>
						</div>
					</div>
				</div>
			)}
		/>
	);
};

export default ToolBoxes;
