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
			description:
				"The JFrog Container Registry is the most comprehensive and advanced registry in the market today, supporting Docker containers and Helm Chart repositories for your Kubernetes deployments. Use it as your single access point to manage and organize your Docker images, while avoiding Docker Hub throttling or retention issues. JFrog provides reliable, consistent, and efficient access to remote Docker container registries with integration to your build ecosystem.",
			pros: ["b"],
			cons: ["bla"],
		},
		Dockerhub: {
			title: "Dockerhub",
			description:
				"Docker Hub is a hosted repository service provided by Docker for finding and sharing container images with your team.",
			pros: [
				"This deep integration with Docker and Kubernetes is one of Docker Hub’s main advantages. It means that there is essentially no setup required to use Docker Hub as a container image management solution – if you can manage container images using public repositories, at least.",
				"If you want to set up private Docker Hub repositories (meaning repositories that aren’t accessible to the public at large) for use with Docker or Kubernetes, you’ll need to do a little extra work; for example, in Kubernetes, you’d have to configure secrets in order to access the private repository. But the configuration process is still simpler overall than integrating another registry.",
				"The fact that Docker Hub is a fully hosted registry is also an advantage. Users don’t need to set up any infrastructure or deploy any registry software to use Docker Hub.",
				"Finally, Docker Hub’s integrated security scanner is a plus. Docker Hub automatically scans container images for security vulnerabilities, at no cost.",
			],
			cons: [
				"The main disadvantages of Docker Hub boil down to limited features and configuration options.",
				"Lack of truly granular access control. You cannot control access controls on a image by image basis (unless you create a different repository for each image, which would be difficult to manage).",
				"Docker Hub also provides limited features for viewing usage information. You can get basic statistics, such as the total number of times an image has been downloaded. But Docker Hub doesn’t provide the ability to generate highly detailed information about image or repository usage.",
				"A final key limitation of Docker Hub is restrictions that Docker introduced in 2020 regarding how long images can be stored and how often they can be downloaded under Docker Hub’s free plans. If you need a registry that supports high-volume usage, Docker Hub’s free offerings no longer work well because you are, for example, limited to 200 downloads every six hours under the free plan.",
			],
		},
		"Github Container Registry": {
			title: "Github Container Registry",
			description:
				"GitHub, which is mainly a platform for managing source code, wasn’t originally a contender on the container registry scene. That changed with the introduction of GitHub Container Registry in 2020 as an extension of GitHub Packages. Although originally released as a beta product, GitHub’s registry entered general availability in mid-2021.",
			pros: [
				"Probably the biggest advantage of using GitHub Container Registry is that it’s tightly integrated into GitHub. If you already manage source code for your applications using GitHub, you can easily package those applications as container images and host the images in GitHub’s registry without having to set up any special integrations or tooling. Everything you need is already built into GitHub.",
				"GitHub Container Registry also offers the advantage of finer-grained access controls than Docker Hub. You can manage access rights on a per-image basis.",
				"The fact that GitHub Container Registry provides an unlimited number of private repositories is also an advantage. On Docker Hub, you are limited to one private repository under the free plan.",
				"In addition, GitHub Container Registry provides more generous image storage and download terms under its free plan; there are no limits on how often a container image can be downloaded, for instance (although free plans are capped at a total data transfer volume of 1 gigabyte per month).",
			],
			cons: [
				"The biggest advantage of GitHub Container Registry – its integration with GitHub – could also be considered a drawback, in the sense that it means you have to use GitHub in order to use GitHub Container Registry.",
				"Although you could probably set up a complicated pipeline to push code from a third-party platform into GitHub Container Registry if you tried hard enough, the registry is really only designed to be used in conjunction with GitHub source code repositories. Thus, if you host your code somewhere else (like GitLab or on your own Git server), GitHub Container Registry is not a great option.",
				"The fact that GitHub Container Registry isn’t integrated by default into Docker or Kubernetes is also a disadvantage relative to Docker Hub. That said, it’s not particularly difficult to connect a deployment environment to GitHub Container Registry (and it’s no more difficult than integrating any other type of registry apart from Docker Hub).",
				"GitHub Container Registry’s usage statistics information could also be considered a disadvantage. Although you can view basic usage information, you don’t get any more detail than you can from Docker Hub.",
			],
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
			description:
				"Helm helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application.",
			pros: [
				"Helm is a packaging format that works well with simple applications like stateless microservices and REST-based APIs with states stored externally in the cloud.",
				"Helm Charts provide the ability to leverage Kubernetes packages through the click of a button or single CLI command. You can also include Helm charts within other Helm charts and have various dependencies.",
				"Helm charts are built atop Kubernetes. These charts complement the cluster architecture of Kubernetes. While using Helm for deploying applications to Kubernetes, scalability is a default benefit from the very start as all the charts of the container images used by Helm are stored in a registry called Helm Workspace, which the DevOps teams can look up and add to their projects with ease.",
				"Another distinguishing feature Helm offers is the ability to customize application configurations during deployment. The DevOps team can provide configurations for all the Kubernetes resources included in the application as well as configure all the environment-specific requirements for those resources. This enables teams to reuse one Helm chart across multiple environments.",
				"It is obvious that Helm is a must-have for Kubernetes deployments. But the real benefits lay in the role it plays in streamlining your CI/CD pipelines.",
				"Helm automatically maintains a database of all the versions of your releases. So, whenever something goes wrong during deployment, rolling back to the previous version is just one command away.",
				"There are several CI/CD integration hooks available in Helm that enable teams to automate certain actions to take place by default, just like macros in Microsoft office, for example, before installation begins, or after an upgrade has finished. You can even schedule health checks for Helm to verify if a deployment has been completed successfully.",
				"Another reason to choose Helm is the need to decrease the amount of time you spend with YAML files. Helm templates have arguments that make it easier to understand how services work without delving too deep into YAML.",
			],
			cons: [
				"Troubleshooting and Debugging --> The biggest challenge for Helm is complexity. The whole system is based on templating Helm charts which makes it very difficult to create and debug complex applications that may consist of multiple Kubernetes resources. The more Helm charts there are, the more complex the entire system is. Imagine how much time it would take for a team to spot and resolve a bug in a Helm chart template that has been used numerous times across many Kubernetes resources in a complex application. As your ecosystem gets bigger, the operator pattern is a good addition.",
				"Learning curve --> Helm simplifies the management of Kubernetes clusters. But, creating the first Helm chart is definitely not as simple as typing out a few commands. The process is rather complex and involves a steep learning curve that might take some time for the DevOps teams to get used to. Helm tries to simplify this as much as possible through its extensive documentation about how to get things done.",
			],
		},
		"RAW Kubernetes YAML": {
			title: "RAW Kubernetes YAML",
			description:
				"RAW Kubernetes YAML is exactly what it sounds like. It means you define everything yourself using YAML files.",
			pros: ["Simple to do for small tests and applications."],
			cons: [
				"It does not provide handy features to fully manage the application’s lifecycle or to dynamically configure the application, an area where for example Helm, really shines.",
				"It is definitely not recommended for production use and complex application structures.",
				"It can make management a nightmare.",
			],
		},
		"CRDs and operators": {
			title: "CRDs and operators",
			description:
				"A custom resource definition (CRD) object defines a new, unique object type, called a kind, in the cluster and lets the Kubernetes API server handle its entire lifecycle.\nOperators are software extensions to Kubernetes that make use of CRDs to manage applications and their components. Operators follow Kubernetes principles, notably the control loop",
			pros: [
				"Adopting the operater pattern is really useful when you helm ecosystem gets complex and your helmcharts too big to manage.",
				"Operators come in handy when teams want to implement a complex, custom configuration or deploy a special application that involves a lot of operational expertise.",
			],
			cons: [
				"Operators and Helm kind of do the same thing, just in different ways. In general, Helm charts are most useful when first setting up a Kubernetes cluster to deploy simple applications. Helm charts can handle the install-update-delete lifecycle for the applications deployed to the cluster.",
			],
		},
		Kustomize: {
			title: "Kustomize",
			description: "Kustomize introduces a template-free way to customize application configuration that simplifies the use of off-the-shelf applications. Now, built into kubectl as apply -k.",
			pros: [
				"Choose Kustomize if you are planning to write all the configurations on your own, and you possess a good understanding of how YAML works. While Kustomize allows you to perform complicated customizations quickly, it requires you to be able to visualize how the patches and layers fit together.",
				"Kustomize is simple to use.",
				"It is declarative, aligning with the Kubernetes philosophy.",
				"Kustomize supports an inherited-base model, which makes it scale better than Helm.",
				"Using the native version integrated into kubectl eliminates external dependencies.",
				"It makes it easier to use off-the-shelf apps.",
				"It uses only plain YAML files.",
			],
			cons: [
				"On the other hand, if you want your developers to be able to add new apps and services in a safe and easy way, creating Helm charts is a better solution.",
				"Kustomize does not offer many features.",
				"It is not designed to follow the DRY (Don’t Repeat Yourself) principle.",
				"Users must manually declare resources and patches in kustomization.yaml, and the file must be manually updated whenever a new file is added.",
				"The native version embedded in kubectl is much older than the current standalone version.", 
				"Online support for Kustomize is difficult to find.",
			],
		},
		Pulumi: {
			title: "Pulumi",
			description: "Define infrastructure on any cloud using familiar programming languages. Pulumi is different, in that it lets you use your favorite languages. Instead of templating, Pulumi programs use real code. Thanks to simple things like functions and classes, we have seen 1,000s of lines of templated YAML shrink to just 100 lines of code. ",
			pros: ["Pulumi is also multi-cloud. So, you only need to learn one programming model, tool, and workflow to program Kubernetes in addition to your cloud resources."],
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
