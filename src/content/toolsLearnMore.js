const toolsLearnMore = {
	"Infrastructure as Code": {
		Terraform: {
			title: "Terraform",
			description:
				"Terraform is an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share. You can then use a consistent workflow to provision and manage all of your infrastructure throughout its lifecycle.",
			pros: [
				"Cloud agnostic.",
				"It simplifies the management and orchestration of multi-tier infrastructure.",
				"YAML is friendly and easier to use and configure",
				"Very strong community and good documentation.",
				"Allows you to modularize your code, which saves a lot of duplication.",
				"Terraform allows you to plan your execution without actually applying the change to your cloud resources.",
			],
			cons: [
				"No rollback. This has to be done through git by merging previous commit for example.",
				"Security of “state files” is a concern. The users need to ensure that the state files are handled in the remote backend because they have confidential information.",
				"In addition to security, state files are a concern because managing the resources is impossible if the terraform state is ever lost; using a backend to store the state files is a best practice",
			],
		},
		Cloudformation: {
			title: "Cloudformation",
			description:
				"AWS CloudFormation is a service that gives developers and businesses an easy way to create a collection of related AWS and third-party resources, and provision and manage them in an orderly and predictable fashion.",
			pros: [
				"Works best for new AWS services",
				"YAML is friendly and easier to use and configure",
				"Many tools help in Unit Testing for the CloudFormation templates. It makes it easier to find errors, warnings, and other info in the code.",
				"It integrates easily with other Infrastructure-as-a-code solutions",
				"Cloudformation supports conditionals, which enables the user to decide whether to create a resource or not.",
			],
			cons: [
				"Not cloud agnostic, so it does not serve for multi cloud architecture.",
				"Nested stacks are not as good as Terraform. It is a bit more challenging to implement and to manage. CorssStacks references, the DependsOn attribute, or the GetAtt function can help manage the outputs of one template as the input to another template.",
				"There is a size limit of 51MB on the stacks that don’t work in the developers’ favor all the time.",
				"Modularization of code in CloudFormation is not as mature as Terraform. This is a very new feature that has been introduced by AWS in CloudFormation.",
			],
		},
		Pulumi: {
			title: "Pulumi",
			description:
				"Pulumi lets teams build Universal Infrastructure as Code using popular programming languages (Python, JavaScript, TypeScript, Go, .NET/C#, Java, YAML)",
			pros: [
				"Building IaC with Pulumi removes many entry barriers as it works with modern languages like Go and Node.js. You can construct logic loops and conditions to pull in the resources you need with code language you're familiar with.",
				"It enhances the testing process by letting you run unit and integration tests before delivering them. That will increase confidence amongst your team and stakeholders.",
				"Pulumi keeps a version history and has great rollback features.",
			],
			cons: [
				"Allowing different programming languages to work with the tool can lead to duplication. Teams may develop the same fundamental functionality using different languages, which isn't efficient. And they can't easily share multiple codebases.",
				"Small community. Terraform and Cloudformation has a way bigger community and thereby a more abundant documentation.",
				"It's free for individual use, but comes with a price plan for teams and enterprises.",
			],
		},
		Crossplane: {
			title: "Crossplane",
			description:
				"Crossplane is a bit different. You can build control planes without needing to write code. Crossplane has a highly extensible backend that enables you to orchestrate applications and infrastructure no matter where they run, and a highly configurable frontend that lets you define the declarative API it offers.",
			pros: [
				"Crossplane builds on top of Kubernetes making the creation of resources more smooth.",
				"It is highly observable. For example, if you delete a VM manually, Terraform won't notice this, but because of Crossplane's integration with K8S, it will notice it and revert it back to it's desired state.",
				"Automatic reverts of manual changes help mitigate unintentional developer mistakes and thereby help developers follow best practices.",
				"Support all major cloud platforms.",
				"State lock and wait time for other collaborators (Strong consistency)",
			],
			cons: [
				"Small community but growing.",
				"Requires a K8S cluster, but this is not a con if you intend to use K8S clusters of course.",
				"Compared to Terraform plan, there is no high-level preview of what will be created, modified or deleted with Crossplane.",
			],
		},
		"Arm templates": {
			title: "Arm templates",
			description:
				"Arm templates can be useful if you use Azure as cloud. They are a form of infrastructure as code, a concept where you define the infrastructure that needs to be deployed. ARM templates use declarative syntax, meaning you define the resources for Azure to deploy without specifying how the resources are created.",
			pros: [
				"Azure Resource Manager allows you to view and manage resources from a centralized dashboard",
				"Convenient if using Azure",
			],
			cons: [
				"ARM templates' primary downside is that they are restricted to Azure cloud deployments.",
				"Does not include any forecast of resources to be created, like Terraform plan.",
				"Heavy in syntax using JSON but Bicep can help you ease this.",
			],
		},
	},
	Authentication: {
		Keycloak: {
			title: "Keycloak",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Dex: {
			title: "Dex",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Existing Public Identity Provider (Google etc.)": {
			title: "Existing Public Identity Provider (Google etc.)",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Cloudfoundry UAA": {
			title: "Cloudfoundry UAA",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Tremolo Security's OpenUnison": {
			title: "Tremolo Security's OpenUnison",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Environment Isolation": {
		Namespaces: {
			title: "Environment Isolation",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Clusters: {
			title: "Clusters",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Cloud accounts": {
			title: "Cloud accounts",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Cloud projects": {
			title: "Cloud projects",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Container Registry": {
		"The registry offered by your cloud provider": {
			title: "The registry offered by your cloud provider",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Jfrog: {
			title: "Jfrog",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Dockerhub: {
			title: "Dockerhub",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Harbor: {
			title: "Harbor",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Application Packaging": {
		Helm: {
			title: "Helm",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"RAW Kubernetes YAML": {
			title: "RAW Kubernetes YAML",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"CRDs and operators": {
			title: "CRDs and operators",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Kustomize: {
			title: "Kustomize",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Pulumi: {
			title: "Pulumi",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Naml: {
			title: "Naml",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Shipa: {
			title: "Shipa",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Version Control": {
		Github: {
			title: "Github",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Gitlab: {
			title: "Gitlab",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Bitbucket: {
			title: "Bitbucket",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Circle CI": {
			title: "Circle CI",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Cloud specific": {
			title: "Cloud specific",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Repository Structure": {
		Monorepo: {
			title: "Monorepo",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Multi-repo": {
			title: "Multi-repo",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Continuous Integration": {
		"Github Actions": {
			title: "Github Actions",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Jenkins: {
			title: "Jenkins",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		CircleCI: {
			title: "CircleCI",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Gitlab CI": {
			title: "Gitlab CI",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Bitbucket: {
			title: "Bitbucket",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Dagger: {
			title: "Dagger",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Spacelift (infrastructure as code)": {
			title: "Spacelift (infrastructure as code)",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Continuous Deployment": {
		"Pull based (Argo CD or Flux)": {
			title: "Pull based (Argo CD or Flux)",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Push based (From your CI pipelines)": {
			title: "Push based (From your CI pipelines)",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Traffic: {
		Nginx: {
			title: "Nginx",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Kong: {
			title: "Kong",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		HAProxy: {
			title: "HAProxy",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Traefik: {
			title: "Traefik",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Loadbalancer services from your cloud provider": {
			title: "Loadbalancer services from your cloud provider",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Networking: {
		"Cloud provider implementation": {
			title: "Cloud provider implementation",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Calico: {
			title: "Calico",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Cilium: {
			title: "Cilium",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Flannel: {
			title: "Flannel",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Weave: {
			title: "Weave",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Service Mesh": {
		Linkerd: {
			title: "Linkerd",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Istio: {
			title: "Istio",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Consul: {
			title: "Consul",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Storage: {
		"Storage provided by cloud provider": {
			title: "Storage provided by cloud provider",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Rook: {
			title: "Rook",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Observability: {
		"Cloud provider services": {
			title: "Cloud provider services",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Datadog: {
			title: "Datadog",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Honeycomb: {
			title: "Honeycomb",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Self-hosted ELK, Prometheus, Grafana, Kibana, Elastic search": {
			title: "Self-hosted ELK, Prometheus, Grafana, Kibana, Elastic search",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Relic: {
			title: "Relic",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Credentials: {
		"K8S secrets": {
			title: "K8S secrets",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Vault: {
			title: "Vault",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Cloud provider secret stores": {
			title: "Cloud provider secret stores",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Development Environment": {
		"Docker compose": {
			title: "Docker compose",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Tilt: {
			title: "Tilt",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Skaffold: {
			title: "Skaffold",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Local cluster (kind, k3d, docker desktop, etc.)": {
			title: "Local cluster (kind, k3d, docker desktop, etc.)",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	"Backup Clusters": {
		Velero: {
			title: "Velero",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Kasten: {
			title: "Kasten",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Gitops Redeploy": {
			title: "Gitops Redeploy",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
	Security: {
		Falco: {
			title: "Falco",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Aqua: {
			title: "Aqua",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Snyk: {
			title: "Snyk",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		Kubescape: {
			title: "Kubescape",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
		"Various Admission Controllers": {
			title: "Various Admission Controllers",
			description: "",
			pros: ["bla"],
			cons: ["bla"],
		},
	},
};

export default {
	"Infrastructure as Code": toolsLearnMore["Infrastructure as Code"],
	Authentication: toolsLearnMore["Authentication"],
	"Environment Isolation": toolsLearnMore["Environment Isolation"],
	"Container Registry": toolsLearnMore["Container Registry"],
	"Application Packaging": toolsLearnMore["Application Packaging"],
	"Version Control": toolsLearnMore["Version Control"],
	"Repository Structure": toolsLearnMore["Repository Structure"],
	"Continuous Integration": toolsLearnMore["Continuous Integration"],
	"Continuous Deployment": toolsLearnMore["Continuous Deployment"],
	Traffic: toolsLearnMore["Traffic"],
	Networking: toolsLearnMore["Networking"],
	"Service Mesh": toolsLearnMore["Service Mesh"],
	Storage: toolsLearnMore["Storage"],
	Observability: toolsLearnMore["Observability"],
	Credentials: toolsLearnMore["Credentials"],
	"Development Environment": toolsLearnMore["Development Environment"],
	"Backup Clusters": toolsLearnMore["Backup Clusters"],
	Security: toolsLearnMore["Security"],
};
