import React from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		maxHeight: "100vh",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		paddingLeft: "30%",
		paddingRight: "30%",
		marginRight: "-50%",
		paddingBottom: "10%",
		paddingTop: "10%",
		transform: "translate(-50%, -50%)",
		width: "50%",
	},
	overlay: {
		position: "fixed",
		zIndex: 1020,
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		background: "rgba(255, 255, 255, 0.75)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
        opacity: "0.95"
	},
};

const HelmModal = (props) => {
	return (
		<Modal
			isOpen={props.modalIsOpen}
			onRequestClose={props.closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
            <h1>Helmcharts</h1>
			<h3>What is Helm?</h3>
			<div>
				If Kubernetes were an operating system, Helm would be the package
				manager. Ubuntu uses apt, CentOS uses yum, and Kubernetes uses helm.
				Helm deploys packaged applications to Kubernetes and structures them
				into charts. The charts contain all pre-configured application resources
				along with all the versions into one easily manageable package. Helm
				streamlines installing, upgrading, fetching dependencies, and
				configuring deployments on Kubernetes with simple CLI commands. Software
				packages are found in repositories or are created.<br></br>
				<br></br>
				<i>
					<u>Helm would is the package manager of Kubernetes.</u>
				</i>
			</div>
			<h3>Why do we need Helm?</h3>
			<div>
				Kubernetes objects are challenging to manage. With helpful tools, the
				Kubernetes learning curve becomes smooth and manageable. Helm automates
				maintenance of YAML manifests for Kubernetes objects by packaging
				information into charts and advertises them to a Kubernetes cluster.
				Helm keeps track of the versioned history of every chart installation
				and change. Rolling back to a previous version or upgrading to a newer
				version is completed with comprehensible commands.<br></br>
				<br></br>
				<i>
					<u>Helm helps with versioning and automation of YAML manifests.</u>
				</i>
			</div>
			<h3>What is a Helm Operator?</h3>
			{/* <button onClick={props.closeModal}>close</button> */}
			<div>
				Whenever we deploy our application on Kubernetes we leverage multiple
				Kubernetes objects like deployment, service, role, ingress, config map,
				etc. As our application gets complex and our requirements become
				non-generic, managing our application only with the help of native
				Kubernetes objects becomes difficult and we often need to introduce
				manual intervention or some other form of automation to make up for it.{" "}
				<br></br>
				<br></br>
				Operators solve this problem by making our application first class
				Kubernetes objects that is we no longer deploy our application as a set
				of native Kubernetes objects but a custom object/resource of its kind,
				having a more domain-specific schema and then we bake the operational
				intelligence or the domain-specific knowledge into the controller
				responsible for maintaining the desired state of this object. For
				example, etcd operator has made etcd-cluster a first class object and
				for deploying the cluster we create an object of Etcd Cluster kind. With
				operators, we are able to extend Kubernetes functionalities for custom
				use cases and manage our applications in a Kubernetes specific way
				allowing us to leverage Kubernetes APIs and Kubectl tooling.<br></br>
				<br></br>
				Operators combine crds and custom controllers and intend to eliminate
				the requirement for manual intervention (human operator) while
				performing tasks like an upgrade, handling failure recovery, scaling in
				case of complex (often stateful) applications and make them more
				resilient and self-sufficient.<br></br>
				<br></br>
				<i>
					<u>
						Operators are best practice to use in regards to adding external
						tools to your Kubernetes.
					</u>
				</i>
			</div>
		</Modal>
	);
};

export default HelmModal;
