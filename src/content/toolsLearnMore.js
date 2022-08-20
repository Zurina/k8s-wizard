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
				"Adopting the operater pattern is really useful when your helm ecosystem gets complex and your helmcharts too big to manage.",
				"Operators come in handy when teams want to implement a complex, custom configuration or deploy a special application that involves a lot of operational expertise.",
			],
			cons: [
				"Operators and Helm kind of do the same thing, just in different ways. In general, Helm charts are most useful when first setting up a Kubernetes cluster to deploy simple applications. Helm charts can handle the install-update-delete lifecycle for the applications deployed to the cluster.",
			],
		},
		Kustomize: {
			title: "Kustomize",
			description:
				"Kustomize introduces a template-free way to customize application configuration that simplifies the use of off-the-shelf applications. Now, built into kubectl as apply -k.",
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
		Naml: {
			title: "Naml",
			description:
				"It is a framework for infrastructure teams who need more than just conditional manifests. It allows teams to start encapsulating, managing, and testing their applications in raw Go. Teams can now buid controllers, operators, and custom toolchains using reliable, testable, and scalable Go.",
			pros: [
				"Express applications in Go instead of YAML",
				"Write real tests using Go to check and validate your deployments",
				"Define custom installation logic. What happens if it fails?",
				"Use the Go compiler to check your syntax",
				"Test your applications in Kubernetes using kind",
			],
			cons: [
				"Small community.",
				"Bigger learning curve as Go also needs to be learned.",
				"Might not be fully up to date regarding new features compared to Helm.",
			],
		},
		Shipa: {
			title: "Shipa",
			description:
				"Shipa is a Developer Platform used to deploy and manage applications, providing a consistent workflow and policy engine on top of that.",
			pros: [
				"Unlike Helm, Shipa provide higher-level features such as logs, shell, policy management, developer dashboard, etc.",
				"Shipa provides a consistent experience all the way from application deployment and management to policy enforcement.",
				"Shipa leverages Helm charts, so they can be used together.",
			],
			cons: [
				"Helm is Kubernetes-specific, while Shipa is cluster-agnostic and focuses at the application level instead, which is really a con.",
				"Shipa is more of a platform and is concerned with much more than just application packaging, so if you're looking for a tool mainly concerned with application packaging, Shipa is not what you're looking for. Shipa is better compared to Openshift for example.",
			],
		},
	},
	"Version Control": {
		Github: {
			title: "Github",
			description:
				"GitHub is an online software development platform used for storing, tracking, and collaborating on software projects.",
			pros: [
				"GitHub probably has some of the best documentation.",
				"Is has Github Actions which makes it very straightforward to implement CI",
				"Is has Github Container Registry which makes it easy to store build artifacts ready to be consumed by your CD flow.",
				"With GitHub pages, you can get started quickly without worrying about setting up hosting or DNS.",
				"GitHub lets you work with the CI/CD tools of your choice, but you'll need to integrate them yourself. GitHub users typically work with a third-party CI program such as Github Actions, Jenkins, CircleCI, or TravisCI.",
				"Allows for more freedom in terms of other tools as its not a full development platform itself.",
			],
			cons: [
				"GitHub does offer private repositories on both free and paid tiers, but even private repositories have their issues. For high-value intellectual property, you’re putting all of this in the hands of GitHub as well as anyone who has a login, which, like many sites, has had security breaches before and is targeted constantly.",
				"Github, unlike Gitlab for example does not offer as many features within its own program, but offers ways to integrate with many outside programs and services. These include software that GitHub has worked on to integrate with the service and hundreds of other programs via GitHub Marketplace.",
				"With Github you often have to configure more integrations with other tools compared to Gitlab for example.",
			],
		},
		Gitlab: {
			title: "Gitlab",
			description:
				"Gitlab is not just a VCS platform. GitLab helps you automate the builds, integration, and verification of your code. With SAST, DAST, code quality analysis, plus pipelines that enable concurrent testing and parallel execution, your teams get quick insights about every commit so they can deliver higher quality code faster.",
			pros: [
				"Offers you a complete software development solution, for example integrated CI/CD flows, meaning everything can be handled from one place.",
				"Offer many internal tools as code quality checking etc.",
				"Although it does market itself as a complete devops platform, Gitlab does offer integrations with some third-party programs and platforms such as Jira, Microsoft Teams, Slack, Gmail, and numerous other apps and platforms.",
				"Seamless integration is possible with Gitlab.",
				"Gitlab offers detailed viewing and documentation of the software projects.",
			],
			cons: [
				"Not as big of a community as Github.",
				"Less speedy when compared to Github while pulling or pushing the software codes.",
				"Gitlab user interface is more heavy and take a lot of time while switching from one page to another.",
			],
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
			description:
				"The monorepo approach uses a single repository to host all the code for the multiple libraries or services composing a company’s projects. At its most extreme, the whole codebase from a company — spanning various projects and coded in different languages — is hosted in a single repository.",
			pros: [
				"When creating an application-wide refactoring of the code, multiple libraries will be affected. If you’re hosting them via multiple repositories, managing all the different pull requests to keep them synchronized with each other can prove to be a challenge. A monorepo makes it easy to perform all modifications to all code for all libraries and submit it under a single pull request.",
				"A single place to store all the project code, and can be accessed by everyone in the team",
				"Easy to reuse and share code, collaborate with the team",
				"Easy to manage dependencies",
				"eam members can get an overall view of the entire project",
				"Easy to understand the impact of your change on the entire project",
			],
			cons: [
				"Slower development cycles",
				"Further, it is difficult to implement Continuous Deployments (CD), because many people can check-in their changes, and your Continuous Integration (CI) system may have to do multiple rebuilds.",
				"Also, if you hire a lot of independent contractors for your project, giving them access to the entire code base may not be so secure. You might have different security levels for different parts of your system or project, and because of this, a monorepo is restricting you from implementing granular access.",
				"When we tag the monorepo, all code within is assigned the new tag. If this action triggers a new release, then all libraries hosted in the repository will be newly released with the version number from the tag, even though many of those libraries may not have had any change.",
				"It can make teams unnecessarily dependant on each other if repos span accross teams, which can create friction.",
			],
		},
		"Multi-repo": {
			title: "Multi-repo",
			description:
				"The multi-repo approach uses several repositories to host the multiple libraries or services of a project developed by a company. At its most extreme, it’ll host every minimum set of reusable code or standalone functionality (such as a microservice) under its repository.",
			pros: [
				"Each service and library have its own versioning",
				"Code check-outs and pulls are small and separate, thus there are no performance issues even if the project size grows",
				"Teams can work independently and need not have access to the entire codebase",
				"Faster development and flexibility",
				"Each service can be released separately and have its own deployment cycle, thus making CI and CD easier to implement",
				"Better access control – all teams need not have full access to all the libraries – but can get read access if they need",
			],
			cons: [
				"The dependencies and libraries used across services and projects have to be regularly synced to get the latest version",
				"Encourages a siloed culture at some point, leading to duplicate code and individual teams trying to resolve the same problem",
				"Each team may follow a different set of best practices for their code causing difficulties in following common best practices",
			],
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
			description:
				"Pull-based deployment uses an agent installed in a cluster to pull changes whenever there is a deviation from the desired configuration. In the pull-based approach, deployment targets are limited to Kubernetes and an agent must be installed in each Kubernetes cluster.",
			pros: [
				"Secure infrastructure - no need to open your firewall or grant admin access externally",
				"changes can be automatically detected and applied without human intervention easier scaling of identical clusters",
			],
			cons: [
				"An agent needs to be installed in every cluster",
				"Limited to Kubernetes only",
			],
		},
		"Push based (From your CI pipelines)": {
			title: "Push based (From your CI pipelines)",
			description:
				"Push-based, or agentless, deployment relies on a CI/CD tool to push changes to the infrastructure environment",
			pros: [
				"Ease of use",
				"well-known as part of CI/CD",
				"more flexible, as deployment targets can be on physical servers or virtual containers, not restricted to Kubernetes clusters",
			],
			cons: [
				"Requires organizations to open their firewall to a cluster and grant admin access to external CI/CD",
				"Requires organizations to adjust their CI/CD pipelines when they introduce new environments",
			],
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
			description:
				"Using the CNI provided by your cloud like AWS VPC CNI or Azure CNI.",
			pros: ["Easier to setup as it's already part of the ecosystem."],
			cons: [
				"Limited IP addresses which may become a problem in larger projects. This may not be a problem anymore.",
				"Vendor lock-in."
			],
		},
		Calico: {
			title: "Calico",
			description:
				"Calico is another popular networking option in the Kubernetes ecosystem. While Flannel is positioned as the simple choice, Calico is best known for its performance, flexibility, and power. Calico takes a more holistic view of networking, concerning itself not only with providing network connectivity between hosts and pods, but also with network security and administration. The Calico CNI plugin wraps Calico functionality within the CNI framework.",
			pros: [
				"Support for Network Policies.",
				"SCTP Support",
				"Can be used with other CNIs.",
				"Calico can be deployed quickly by applying a single manifest file.",
				"Unlike Flannel, Calico does not use an overlay network. Instead, Calico configures a layer 3 network that uses the BGP routing protocol to route packets between hosts. This means that packets do not need to be wrapped in an extra layer of encapsulation when moving between hosts. The BGP routing mechanism can direct packets natively without an extra step of wrapping traffic in an additional layer of traffic.",
				"Calico can also integrate with Istio, a service mesh, to interpret and enforce policy for workloads within the cluster both at the service mesh layer and the network infrastructure layer. This means that you can configure powerful rules describing how pods should be able to send and accept traffic, improving security and control over your networking environment.",
				"Calico is a good choice for environments that support its requirements and when performance and features like network and security policy are important. Additionally, Calico offers commercial support as Calico Enterprise or Calico Cloud if you’re seeking a support contract or want to keep that option open for the future",
				"In general, it’s a good choice for when you want to be able to control your network instead of just configuring it once and forgetting about it.",
			],
			cons: [
				"Besides the performance that this offers, one side effect of this is that it allows for more conventional troubleshooting when network problems arise. While encapsulated solutions using technologies like VXLAN work well, the process manipulates packets in a way that can make tracing difficult.",
				"Not the best tool if you're looking for a network solution (CNI) that you just configure once and forget about it.",
				"No multicast support.",
			],
		},
		Cilium: {
			title: "Cilium",
			description:
				"A relative newcomer to the land of Kubernetes CNI plugins is Cilium. Cilium and its observability tool, Hubble, take advantage of eBPF. eBPF is a newer technology that runs within the Linux kernel and enables the configuration and execution of sandbox programs that can extend the capability of the kernel without requiring to change the kernel source code. Cilium uses eBPF technology to support more advanced networking and observability features for your Kubernetes cluster networking.",
			pros: [
				"One of the advantages that Cilium offers over other CNI plugins is reduced overhead when managing large networks.",
				"While some CNI plugins rely on iptables on each Kubernetes cluster node to manage network addressing, Cilium takes advantage of eBPF to handle this more efficiently and in a more performant manner. Efficient address lookup is critical as your Kubernetes cluster scales to tens of thousands of nodes.",
				"Cilium offers networking policies that operate at layers 3, 4, and 7 of the OSI networking model. This ability to apply policies at multiple layers affords more flexibility in how you manage ingress and egress traffic within your Kubernetes cluster.",
				"While still a relatively new CNI plugin, Cilium may be worth consideration, especially if you require fine-grained security controls or need to reduce lookup latency for very large Kubernetes clusters.",
				"If performance and security through network policies and encryption are paramount, you should consider Cilium, as well as Weave or Calico",
			],
			cons: [
				"Although Cilium proves to be performant on large scale Kubernetes clusters, it does appear to be quite resource intensive.",
			],
		},
		Flannel: {
			title: "Flannel",
			description:
				"CoreOS created Flannel as one of the first CNI implementations for Kubernetes.  As such, it is one of the oldest and most mature CNI plugins available. It is also a great entry-level choice for networking for your first Kubernetes cluster, due to its simplicity and ease of use.",
			pros: [
				"Easy to install and configure.",
				"It is packaged as a single binary called flanneld and can be installed by default by many common Kubernetes cluster deployment tools and in many Kubernetes distributions. Flannel can use the Kubernetes cluster’s existing etcd cluster to store its state information using the API to avoid having to provision a dedicated data store.",
				"Overall, Flannel is a good choice for most users. From an administrative perspective, it offers a simple networking model that sets up an environment that’s suitable for most use cases when you only need the basics. In general, it’s a safe bet to start out with Flannel until you need something that it cannot provide.",
				"Flannel has several different types of backends available for encapsulation and routing. The default and recommended approach is to use VXLAN, as it offers both good performance and is less manual intervention than other options.",
				"Flannel configures a layer 3 IPv4 overlay network. A large internal network is created that spans across every node within the cluster. Within this overlay network, each node is given a subnet to allocate IP addresses internally. As pods are provisioned, the Docker bridge interface on each node allocates an address for each new container. Pods within the same host can communicate using the Docker bridge, while pods on different hosts will have their traffic encapsulated in UDP packets by flanneld for routing to the appropriate destination.",
			],
			cons: [
				"One of the drawbacks of Flannel is its lack of advanced features, such as the ability to configure network policies and firewalls. Thus Flannel is a great entry level choice for Kubernetes cluster networking, however, if you are looking for advance networking features, you may want to consider other CNI options such as Calico.",
				"No support for network policies.",
			],
		},
		Weave: {
			title: "Weave",
			description:
				"Weave Net by Weaveworks is a CNI-capable networking option for Kubernetes that offers a different paradigm than the others we’ve discussed so far. Weave creates a mesh overlay network between each of the nodes in the cluster, allowing for flexible routing between participants. This, coupled with a few other unique features, allows Weave to intelligently route in situations that might otherwise cause problems.",
			pros: [
				"Like Calico, Weave also provides network policy capabilities for your cluster. This is automatically installed and configured when you set up Weave, so no additional configuration is necessary beyond adding your network rules.",
				"One thing that Weave provides that the other options do not is easy encryption for the entire network. While it adds quite a bit of network overhead, Weave can be configured to automatically encrypt all routed traffic by using NaCl encryption for sleeve traffic and, since it needs to encrypt VXLAN traffic in the kernel, IPsec ESP for fast datapath traffic.",
				"Weave is a great option for those looking for feature rich networking without adding a large amount of complexity or management. It is relatively easy to set up, offers many built-in and automatically configured features, and can provide routing in scenarios where other solutions might fail.",
			],
			cons: [
				"The mesh topography does put a limit on the size of the network that can be reasonably accommodated, but for most users, this won’t be a problem.",
			],
		},
	},
	"Service Mesh": {
		Linkerd: {
			title: "Linkerd",
			description:
				"Linkerd can be used as a cloud orchestration tool to secure communication between these services by providing features such as load balancing, service discovery, proxy integration and transparency, adaptive routing, failure recovery, circuit breaking and instrumentation.",
			pros: [
				"It provides Prometheus and Grafana out of the box.",
				"Linkerd has its own dashboard great to observe what’s happening in Real-Time.",
				"Unlike Istio that can be quite difficult to setup in a cluster, Linkerd does not need much configuration.",
				"Light control panel.",
				"Out of the box, Linkerd stats and routes are observable via a CLI. On the GUI side, options include premade Grafana dashboards and a native Linkerd dashboard.",
				"Tracing can be enabled via an add-on with OpenTelemetry (formerly OpenCensus) as the collector, and Jaeger doing the tracing itself.",
				"Linked is perhaps best for those with less experience.",
				"It may even be preferred for deployments where every ounce of performance is critical.",
			],
			cons: ["No tracing.", "No ingress included."],
		},
		Istio: {
			title: "Istio",
			description: "",
			pros: [
				"Jaegar tracing.",
				"Has built in ingress & egress controller using Envoy.",
				"Secures service-to-service and pod-to-pod communication.",
				"Enables canary deployments and A/B testing.",
				"Gives insight into network performance issues.",
				"Implements routing rules and policies that manage communication and data transfer.",
			],
			cons: [
				"Heavy control panel.",
				"Does not have a default dashboard but Kiali can be used as an extension for that.",
				"Also, it is difficult to configure the .yaml files to ensure the right setup and encrypted communication.",
				"Istio is time-consuming to set up and implement.",
			],
		},
		Consul: {
			title: "Consul",
			description:
				"Consul Service Mesh provides service-to-service connection authorization and encryption using mutual Transport Layer Security (TLS).",
			pros: [
				"Offers both CLI and a Dashboard - the latter lets you visualize your services, nodes, key value pairs, and intentions. You can also navigate through access controls. Should you want to dive deeper, the GUI offers a look into topology, instances, intentions, routing, and tags.",
				"Consul is best reserved for veterans as it has a tougher learning curve who also need ultimate configurability.",
				"Consul provides well-rounded control features centered on configuration and segmentation. You can deploy Consul natively or via proxy framework. The latter supports Envoy. Consul leverages a local client which lets teams easily run Consul via pod on each node",
			],
			cons: [
				"Because Consul is mature and feature-rich, it can be more difficult to master. Additionally, some experimentation may be necessary to get Consul up and running effectively. ",
			],
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
			description:
				"Rook is a storage orchestration tool that provides a cloud-native, open source solution for a diverse set of storage providers. Rook uses the power of Kubernetes to turn a storage system into self-managing services that provide a seamless experience for saving Kubernetes application or deployment data.",
			pros: [
				"One of the main benefits of Rook is that it interacts with data storage via native Kubernetes mechanisms. That means that you no longer need to manually configure Ceph using its commands.",
			],
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
			description:
				"A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. Such information might otherwise be put in a Pod specification or in a container image.",
			pros: [
				"Native part of Kubernetes making it easy to use.",
				"Good for API tokens, passwords, etc.",
				"They can be encrypted at rest with some extra work, but not good if you are looking for e2e encryption while injecting to K8s pods and stuff.",
			],
			cons: [
				"By default, secrets in Kubernetes are not encrypted, only base64 encoded.",
				"Cannot be rotated unless using an external tool.",
				"Cannot access secrets across namespaces.",
				"A bigger problem is that k8s RBAC doesn't provide fine-grained control over which principals can access which secrets, while vault does.",
			],
		},
		Vault: {
			title: "Vault",
			description:
				"Secure, store and tightly control access to tokens, passwords, certificates, encryption keys for protecting secrets and other sensitive data using a UI, CLI, or HTTP API.",
			pros: [
				"Supports e2e encryption option.",
				"UI for managing the secrets.",
				"With Vault you can rotate secrets and have secrets with short TTL",
				"Vault can use LDAP, oauth, IAM, etc as identity providers",
				"Vault can provide a PKI for signing certs (enabling for example automation of cert generation for mtls",
				"Vault you can use the secrets outside of K8s and you manage the RBAC of them within Vault.",
				"It's a cloud agnostic secrets management system it allows you to safely store and manage sensitive data in hybrid cloud environments",
			],
			cons: [
				"Vault requires infrastructure to run vault on, in production this will have to be managed, secured, fed, and watered. More security-conscious companies may see this as a benefit though as the vault remains under company control. However, if this is seen as a blocker, the cloud version which is effectively a managed vault offering on the HashiCorp platform, is now in public beta which will eliminate this problem.",
				"Learning curve / Training — Vault is relatively simple to learn the basics, and there is some excellent training on the HashiCorp site, however, if your teams are already familiar with Azure Key Vault of AWS KMS, this is another thing to learn!",
				"May be too overkill to use, if you have a simple setup with one cluster, few containers and few secrets.",
			],
		},
		"Cloud provider secret stores": {
			title: "Cloud provider secret stores",
			description:
				"This can be Azure Key Vault, AWS KMS etc, which are managed services offering native integration with other of the cloud services.",
			pros: [
				"Native integration with the particular cloud's Kubernetes service.",
				"In key vault you no need to worry about security and managing your own identities technical support is also beneficial.",
				"Azure Key vault can compliment HashiCorp Vault — Your master HashiCorp Vault key can be stored in Azure Key Vault using the key vault provider to make it more secure. Check out the HashiCorp Vault on Azure link below for more details.",
			],
			cons: [
				"Azure Key vault and Amazon KMS are managed services — you don’t have full control.",
				"Vendor lock-in.",
				"Not ideal for a hybrid cloud setup",
			],
		},
	},
	"Development Environment": {
		"Docker compose": {
			title: "Docker compose",
			description:
				"Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.",
			pros: [
				"Exellent for running starting and running multiple containers simultaneously with one command.",
			],
			cons: [
				"Docker Compose's intention is to run all containers on the same machine (node), which is in the context of Kubernetes doesn't make that much sense.",
				"Depending on what you're developing, Docker Compose does not provide you a close to indentical development environment compared to a production Kubernetes environment. For this, you need a local Kubernetes solution.",
			],
		},
		Tilt: {
			title: "Tilt",
			description:
				"If Docker Compose is not good enough for you, then you might want to look into Tilt as it's an uses Docker Compose under the hood with additional features. It is not a Kubernetes cluster itself, but it offers a great interface to work with local clusters like Kind, Minikube etc. Tilt is a microservice development environment for teams that deploy to Kubernetes.",
			pros: [
				"See all the pieces of your app, and trigger custom workflows like seeding databases or creating infrastructure.",
				"Our engine starts the whole app and runs automated rebuilds as you edit in your IDE. Get a continuous feedback loop with your logs, broken builds, and runtime errors.",
				"It has a great UI, so you don't necessarily need to use kubectl all the time.",
				"Tilt’s live_update deploys code to running containers, in seconds not minutes. Even for compiled languages or changing dependencies, live_update is fast and reliable.",
				"Snapshots lets you share your dev environment and collaborate on issues as quickly as looking at the monitor next to you.",
				"We’ve codified best practices to give your team a common development path and ensure reproducibility. Anyone can start the app – new hires just: tilt up.",
				"Highens developer collaboration and improves teamwork.",
			],
			cons: [
				"It may not be needed when working individually on a project.",
				"It might be too many features compared to what you need in a simple setup.",
				"For example, Docker Compose might do exactly what you need when testing singular containers or the integration between a few ones.",
			],
		},
		Skaffold: {
			title: "Skaffold",
			description:
				"For simple container-based applications that don’t rely on Kubernetes resource types, Skaffold can “deploy” these applications by running application containers directly in your local Docker daemon. This enables application developers who are not yet ready to make the jump to Kubernetes to take advantage of the streamlined development experience Skaffold provides.",
			pros: [
				"Skaffold is like tilt in the sense of that it's not offering a local cluster for you to use. It's rather a way to structure and deploy your applications smoothly to your local cluster.",
				"Skaffold in combination with a local cluster works really great and improves developer efficiency as you don't have to interact with the local cluster directly, which can be slower.",
				"Skaffold as well as Tilt, acts as an interface in front of your local cluster speeding up development.",
				"Highens developer collaboration and improves teamwork.",
			],
			cons: [
				"It may not be needed when working individually on a project.",
				"It might be too many features compared to what you need in a simple setup.",
				"For example, Docker Compose might do exactly what you need when testing singular containers or the integration between a few ones.",
			],
		},
		"Local cluster (kind, k3d, docker desktop, etc.)": {
			title: "Local cluster (kind, k3d, docker desktop, etc.)",
			description:
				"A local cluster can be used as your development environment to test new features and such.",
			pros: [
				"Production-like environment - when deploying Kubernetes locally, you can choose between using convenient, lightweight environments, such as minikube, K3S, or even Docker Desktop; or taking the time to do a manual installation for a more production-like environment. This flexibility allows you to overcome the inherent limitations of out-of-the-box solutions in terms of networking, nodes, scalability, add-ons, and more.",
				"A local cluster in combination with Skaffold or Tilt to integrate with it can be really efficient and smooth as your development environment.",
				"If you need to test containers in a production alike environment or test your application with the additional features compared a local cluster offers compared to Docker Compose, then you should go for this.",
			],
			cons: [
				"It may not be required for you, if you only need to run simple containers and test the integration between them.",
				"Requires more setup.",
				"If you depend on a local cluster, it is also important that you have a unified setup across your developers so all have the same environment. This will result in less errors.",
			],
		},
	},
	"Backup Clusters": {
		Velero: {
			title: "Velero",
			description:
				"Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes.",
			pros: [
				"Open source.",
				"Production cluster replication for the purpose of testing or development",
				"General backup and restore capabilities for Kubernetes clusters",
				"Cluster migration feature.",
				"Works great for smaller companies and isolated projects.",
			],
			cons: ["Not the ideal enterprise solution."],
		},
		Kasten: {
			title: "Kasten",
			description:
				"Kasten is a backup and restore solution that also takes pride in its mobility and disaster recovery systems. The backup process with Kasten is simplified thanks to its ability to automatically discover applications.",
			pros: [
				"Backup and Restore - Backup and restore your applications to protect your data",
				"Disaster Recovery - Meet regulatory and corporate mandates for your business",
				"Application Mobility - Move between clouds and on-premises for load balancing and upgrades",
				"Great for enterprises.",
			],
			cons: ["Free version limits you to 5 nodes."],
		},
		"Gitops Redeploy": {
			title: "Gitops Redeploy",
			description:
				"As Git acts as a single source of truth for all DevOps operations, the entire system is described declaratively in Git using .yaml files. Changes made to applications, infrastructure, deployment, and environment are all managed via Git. For instance, Kubernetes configuration and environment configuration can be managed with Helm via reusable charts. The application code can be declared in a Dockerfile, and Terraforms can declare the infrastructure.",
			pros: [
				"Your backups are you versioned code in git.",
				"No need for external backups the old way.",
				"Not only can you quickly deploy containers and rollback, but you can also reproduce the entire cluster infrastructure at the time of a disaster.",
			],
			cons: [
				"Takes more work to setup as it requries several tools to work, than just a single tool to be responsible for it.",
			],
		},
	},
	Security: {
		Falco: {
			title: "Falco",
			description:
				"Falco, a CNCF incubating project, can help detect any anomalous activities in cloud native environments with rich, out-of-the-box default rules.",
			pros: [
				"Common policy language to detect threats across containers, hosts, Kubernetes and cloud.",
				"Great for smaller companies or more isolated projects",
				"You can immediately respond to policy violation alerts and integrate Falco within your response workflows.",
				"Falco out-of-the box rules alert on malicious activity and CVE exploits.",
				"Docker, Slack, Kubernetes, Helm, and Fluentd are some of the popular tools that integrate with Falco Security.",
				"Cheapest solution for priced versions.",
			],
			cons: [
				"Is not considered an enterprise security solution.",
				"Does not scan libraries.",
			],
		},
		Aqua: {
			title: "Aqua",
			description:
				"Aqua helps you security your entire environment of your Kubernetes ecosystem.",
			pros: [
				"Security products for several Cloud Providers: Aqua offers solutions to monitor and secure cloud-native workloads on AWS, Google Cloud, Red Hat, and Azure.",
				"Aqua Security has added a Kubernetes Runtime Protection module that provides an option for using Kubernetes Admission Controllers to deploy security controls as a set of sidecar containers directly on to a Kubernetes pod.",
				"Aqua is good if you need cheap and k8's or small environments.",
				"A dashboard on discovered vulnerabilities from across your codebase and analytics insights on the security of your application.",
				"Discover dependency vulnerabilities early, before deploying containers.",
				"Check for vulnerabilities in image components before using those across your container images.",
				"It has a rich CI/CD integration as it allows users to scan the code based during development.",
				"Great for enterprises.",
			],
			cons: [
				"Aqua does not provide a separate CLI that you can access locally through your terminal. As a result, the interface has to be used for all interactions between your infrastructure and Aqua.",
				"Lack of comprehensive documentation.",
				"Does not scan libaries.",
				"Not the ideal choice for smaller companies or isolated projects.",
				"Most expensive security solution compared to Snyk and Falco.",
			],
		},
		Snyk: {
			title: "Snyk",
			description:
				"Snyk provides a set of products that are used to enable the secure development of cloud-native applications. The goal is to detect any vulnerabilities during the development process, and before the application is being deployed. Furthermore, Snyk provides continuous scanning of integrated resources and automatically notifies users should it detect any vulnerabilities.",
			pros: [
				"Has a really good free tier offering.",
				"Integrated IDE checks: Snyk provides two IDE integrations, namely Eclipse and JetBrains.",
				"Native Git Scanning allows you to scan pull requests before they are merged.",
				"Add an automated Snyk test to your CI/CD pipeline to scan your codebase for vulnerabilities with every deployment.",
				"Integrated Snyk into your production environment to monitor your codebase for new vulnerabilities and ensure that no new ones are deployed.",
				"The Reporting Option generates an overview of the discovered vulnerabilities.",
				"Comprehensive alerts and notification settings with reports right to your inbox weekly.",
				"Find and fix insecure configurations in Terraform and Kubernetes code.",
				"Snyk offers a CLI tool that you can install either through npm, brew on Linux and Mac, or scoop on Windows.",
				"Scans libaries.",
				"Great for enterprises.",
				"Less expensive than Aqua.",
				"PR with vulnerability fixes",
			],
			cons: [
				"Not the ideal choice for smaller companies or isolated projects.",
			],
		},
		Kubescape: {
			title: "Kubescape",
			description:
				"A tool that checks whether Kubernetes is deployed in accordance with major compliance frameworks.",
			pros: [
				"Open Source.",
				"Providing a multi-cloud K8s single pane of glass, including risk analysis, security compliance, RBAC visualizer and image vulnerabilities scanning.",
				"Test clusters or scan single YAML files and integrate it to your processes.",
				"Kubescape checks over 20 possible weaknesses based on the NSA-identified list. The NSA’s report provides a description of the covered issues and the rationale for their inclusion. For example, Containers running in privileged mode, containers running with dangerous capabilities, credentials contained in configuration files and more.",
				"Intuitive CLI.",
			],
			cons: [
				"Kubescape doesn’t check for vulnerabilities inside the containers you run in your cluster.",
			],
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
