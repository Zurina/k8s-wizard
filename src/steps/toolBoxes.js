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
				<div className="toolbox-container">
					<Configuration
						setToolState={setToolState}
						toolState={toolState}
						envState={props.envState}
					/>
					<div className="toolboxes">
						<h1>Which tools are you looking for?</h1>
						<div className="boxes-container">
							<IAC toolState={toolState} setToolState={setToolState} />
							<Authentication toolState={toolState} setToolState={setToolState} />
							<EnvIsolation toolState={toolState} setToolState={setToolState} />
							<ContainerRegistry toolState={toolState} setToolState={setToolState} />
							<ApplicationPackaging toolState={toolState} setToolState={setToolState} />
							<VersionControl toolState={toolState} setToolState={setToolState} />
							<RepositoryStructure toolState={toolState} setToolState={setToolState} />
							<CI toolState={toolState} setToolState={setToolState} />
							<CD toolState={toolState} setToolState={setToolState} />
							<Traffic toolState={toolState} setToolState={setToolState} />
							<Networking toolState={toolState} setToolState={setToolState} />
							<ServiceMesh toolState={toolState} setToolState={setToolState} />
							<Storage toolState={toolState} setToolState={setToolState} />
							<Observability toolState={toolState} setToolState={setToolState} />
							<Credentials toolState={toolState} setToolState={setToolState} />
							<DevEnv toolState={toolState} setToolState={setToolState} />
							<BackupClusters toolState={toolState} setToolState={setToolState} />
							<Security toolState={toolState} setToolState={setToolState} />
						</div>
					</div>
				</div>
	);
};

export default ToolBoxes;
