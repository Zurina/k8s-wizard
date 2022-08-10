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
			description:
				"Add authentication to applications and secure services with minimum effort. No need to deal with storing users or authenticating users. Keycloak provides user federation, strong authentication, user management, fine-grained authorization, and more.",
			pros: [
				"Users authenticate with Keycloak rather than individual applications. This means that your applications don't have to deal with login forms, authenticating users, and storing users. Once logged-in to Keycloak, users don't have to login again to access a different application. This also applied to logout",
				"If you need custom claim from OIDC provider and also looking for replace existing Identity provider. And you expect more programatic automation with Identity provider. Keycloak definitely can fulfill the requirement and with REST API support.",
				"Supports multiple identity providers.",
				"OpenID and SAML support.",
				"Maintained by devs at Redhat.",
				"JSON Web Token.",
				"Useful when you have a lot of clients/applications.",
				"Very useful when you have a lot of integration with third part systems (Google, Fb, Twitter and etc) because Keycloak has them out-of-box.",
			],
			cons: ["If you only have one client, then it's a bit overkill to use."],
		},
		Dex: {
			title: "Dex",
			description:
				"Dex is an identity service that uses OpenID Connect to drive authentication for other apps.",
			pros: [
				"If you already have an existing Identity Provider (AD, SAML, Github..etc) and just need an OIDC interface to bridge applications with a centralized service, then Dex is your choice.",
			],
			cons: [
				"It's not ideal when you don't already have an existing Identity Provider.",
			],
		},
		"Existing Public Identity Provider (Google etc.)": {
			title: "Existing Public Identity Provider (Google etc.)",
			description:
				"Identity Platform is a customer identity and access management (CIAM) platform that helps organizations add identity and access management functionality to their applications, protect user accounts, and scale with confidence on for example Google Cloud.",
			pros: [
				"Useful if you using Kubernetes in the cloud. Primarily only useful for the big providers like Google, AWS and Azure.",
			],
			cons: [
				"Vendor lock in. It makes you restricted to one particular cloud.",
				"Not ideal for hybrid cloud setup.",
			],
		},
		"Tremolo Security's OpenUnison": {
			title: "Tremolo Security's OpenUnison",
			description:
				"Tremolo Security’s Unison is powerful way to provide authentication, course grained authorization and identity management services for your applications.",
			pros: [
				"Good for enterprises.",
				"Provide Single Sign-On to your Active Directory forests.",
				"Provide identity information to cloud based applications without having to forklift existing identity infrastructure into the cloud",
			],
			cons: ["Bad for smaller setups."],
		},
	},
	"Environment Isolation": {
		Namespaces: {
			title: "Namespaces",
			description:
				"In Kubernetes, namespaces provides a mechanism for isolating groups of resources within a single cluster.",
			pros: [
				"They are the easiest way of isolating and separating workloads from each other.",
				"This is the best approach if very strict isolation of workloads is not a priority for you.",
				"It's also easier to manage multiple namespaces. If you want to apply role-based access control (RBAC) policies across several Kubernetes namespaces, for instance, you can simply create a ClusterRole instead of a Role.",
			],
			cons: [
				"The major downside of using multiple namespaces is that it provides less isolation",
				"Using namespaces could translate to security or privacy issues in the event that a workload running in one namespace manages to interact with another namespace in a way it shouldn't.",
				"Configuration mistakes, such as ill-defined ClusterRoles, by which you accidentally allow workloads to interact across namespaces. This is the main risk that arises from multiple namespaces.",
				"Security bugs in Kubernetes that attackers can exploit in order to escalate a breach from one namespace into others. Realistically speaking, this is not likely to be an issue. But it's a possibility.",
			],
		},
		Clusters: {
			title: "Clusters",
			description:
				"Cluster isolation means having separate clusters to isolate workloads.",
			pros: [
				"If you require very strict isolation and namespaces aren't enough for you, this is the better approach.",
				"Although it's possible for security vulnerabilities to enable breaches to spread between clusters, the potential risk here is lower, given that most tooling in Kubernetes is designed to interact with single clusters.",
			],
			cons: [
				"On the other hand, the fact that Kubernetes tooling is designed with single clusters in mind by default also means that multiple clusters are harder to set up and manage via one control plane.",
				"You also likely need to configure networking in such a way that the clusters can all communicate with the control plane — while also, ideally, preventing inter-cluster communication unless you require it.",
			],
		},
		"Cloud accounts": {
			title: "Cloud accounts",
			description:
				"Environment isolation using cloud accounts goes into separating your workloads on different cloud accounts.",
			pros: [
				"This can make it easier to handle billing of your workloads, especially if it's important for you to separate you bills in teams, departments etc.",
			],
			cons: [
				"This will most likely make it harder for your workloads to communicate accross cloud accounts, as they will be running in completely separate environments.",
			],
		},
	},
	"Container Registry": {
		"The registry offered by your cloud provider": {
			title: "The registry offered by your cloud provider",
			description: "This can be ECR from AWS or ACR from Azure, etc.",
			pros: [
				"Requires minimal setup",
				"Native integration with the Kubernetes service from the cloud.",
				"It will most likely make your deployments easier as it's a part of the cloud meaning the integration between your Kubernetes cluster and the registry is a part of the same ecosystem.",
			],
			cons: [
				"Vendor lock in.",
				"Not great for multi-cloud setups.",
				"Makes migration to other clouds harder.",
			],
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
