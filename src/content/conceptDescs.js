const contentDescs = [
    {
        title: "Infrastructure as Code",
        shortDescription: "Infrastructure as Code helps you omit manuel configurations and makes setup repeatable.",
        iconBackground: require("./icons/iac.png"),
        description:
        "Is multi cloud support a factor to you? Do you need to migrate stuff often? Does the tool you are considered have the necessary coverage you need for your requirements?",
        technologies: [
            "Terraform",
            "Cloud Development Kit",
            "Cloudformation",
            "Pulumi",
            "Crossplane",
            "Arm templates",
        ],
    },
    {
        title: "Authentication",
        shortDescription: "How do you want to handle authentication?",
        iconBackground: require("./icons/auth.png"),
        description:
            "Kubernetes does not provide an OpenID Connect Identity Provider. Choosing the approach to handle this comes down to whether you already have an existing identity provider and whether you want to manage it yourself.",
        technologies: [
            "Keycloak",
            "Dex",
            "Existing Public Identity Provider (Google etc.)",
            "Cloudfoundry UAA",
            "Tremolo Security's OpenUnison",
        ],
    },
    {
        title: "Environment Isolation",
        shortDescription: "What level of environment isolation do you need (e.g. between teams or dev/staging/prod)?",
        iconBackground: require("./icons/env-iso.png"),
        description:
        "Whatever you choose here will have an effect on your automation of infrastructure as code. You might be able to use namespaces for separation, you might want to provision separate clusters, or maybe even locating those separate clusters in isolated cloud accounts!",
        technologies: [
            "Namespaces",
            "Clusters",
            "Cloud accounts",
            "Cloud projects",
        ],
    },
    {
        title: "Container Registry",
        shortDescription:
        "Which container registry is best suited for your situtaion?",
        iconBackground: require("./icons/container-registry.png"),
        description:
        "If you're using cloud, you should heavily consider using their offered registry because of the existing integration.",
        technologies: [
            "The registry offered by your cloud provider",
            "Jfrog",
            "Dockerhub",
            "Harbor",
        ],
    },
	{
		title: "Application Packaging",
		shortDescription: "How should you package your applications?",
		iconBackground: require("./icons/app-packaging.png"),
		description:
			"As you deploy to different environments you need a way to manage configurations for your applications, since configurations tend to differ in environments if you follow best practices.",
		technologies: [
			"Helm",
			"RAW Kubernetes YAML",
			"CRDs and operators",
			"Kustomize",
			"Pulumi",
			"Naml",
			"Shipa",
		],
	},
    {
        title: "Version Control",
        shortDescription: "Which version control system should you use?",
        iconBackground: require("./icons/vcs.png"),
		description:
        "Gitlab provides as lot of nice features, however, Github is the go-to choice here. Whatever you choose, you should choose the one you devide to use for CI/CD (or the other way around).",
		technologies: [
            "Github",
			"Gitlab",
			"Bitbucket",
			"Circle CI",
			"Cloud specific",
		],
	},
    {
        title: "Repository Structure",
        shortDescription: "What kind of repository structure should you choose?",
        iconBackground: require("./icons/repo-structure.png"),
        description:
        "Mono-repo favors consistency, whereas multi-repo focuses on decoupling. While in a mono-repo, the entire team can see changes done by one person, multi-repo creates a separate repo for each team, who have access to only the required services.",
        technologies: ["Monorepo", "Multi-repo"],
    },
    {
        title: "Continuous Integration",
        shortDescription:
        "CI is fundamental for developers' worflow, so which one suits you the most?",
        iconBackground: require("./icons/ci.png"),
        description:
        "A lot of options. Each have a lot and different features. Look for local development/execution story, public ecosystem/shareability, integrations with your VCS.",
        technologies: [
            "Github Actions",
            "Jenkins",
            "CircleCI",
            "Gitlab CI",
            "Bitbucket",
            "Dagger",
            "Spacelift (infrastructure as code)",
        ],
    },
    {
        title: "Continuous Deployment",
        shortDescription:
        "Which Continuous Deployment tool works best for your setup and CI?",
        iconBackground: require("./icons/cd.png"),
        description:
        "Pull based is what GitOps is about and here you avoid having cluster credentials in CI. Push based is easier to get started with.",
        technologies: [
            "Pull based (Argo CD or Flux)",
            "Push based (From your CI pipelines)",
        ],
    },
    {
        title: "Traffic",
        shortDescription: "How do you want to track and debug your traffic?",
        iconBackground: require("./icons/traffic.png"),
        description:
        "If your requirements are low-key, a loadbalancer from your cloud provider might be exactly what you need. However, if not, you might need to look for something with more capabilities and which is more customizable.",
        technologies: [
            "Nginx",
            "Kong",
            "HAProxy",
            "Traefik",
            "Loadbalancer services from your cloud provider",
        ],
    },
    {
        title: "Networking",
        shortDescription:
        "How do you want to manage and deal with networking? How customized do you need it to be?",
        iconBackground: require("./icons/networking.png"),
        description:
        "If you're using the cloud, taking advantage of the default networking is probably the easiest and best idea. Some of the more advanced options do have some interesting features though, for example using eBFF rather than regular iptabls.",
        technologies: [
            "Cloud provider implementation",
            "Calico",
            "Cilium",
            "Flannel",
            "Weave",
        ],
    },
    {
        title: "Service Mesh",
        shortDescription: "Service Mesh helps you omit manuel configurations and makes setup repeatable.",
        iconBackground: require("./icons/service-mesh.png"),
        description:
        "Service meshes improves service discovery, security and observability of networking within the cluster. Depending on your situation and your needs, a service mesh might be way to complicated and unnecessary or it may be exactly what you need should you have a overload of services etc. ",
        technologies: ["Linkerd", "Istio", "Consul"],
    },
    {
        title: "Storage",
        shortDescription: "Do you need storage for your applications?",
        iconBackground: require("./icons/storage.png"),
        description:
        "For auto-provisioning block storage, your cloud-providers CSI driver will get you started. For more cutomizable storage features, Rook can help you out.",
        technologies: ["Storage provided by cloud provider", "Rook"],
    },
    {
        title: "Observability",
        shortDescription:
        "Do you need monitoring for your applications, and if so, to what degree?",
        iconBackground: require("./icons/observability.png"),
        description:
        "Monitoring, logging, alerting and distributed tracing are critical components. Each tool is vital and must be considered wisely.",
        technologies: [
            "Cloud provider services",
            "Datadog",
            "Honeycomb",
            "Self-hosted ELK, Prometheus, Grafana, Kibana, Elastic search",
            "Relic",
        ],
    },
    {
        title: "Credentials",
        shortDescription: "How do you want to handle credentials?",
        iconBackground: require("./icons/credentials.png"),
        description:
        "If you use K8S secrets you need to decide if you inject them as env vars or volume mounts. You still need to consider a source of truth outside of the cluster.",
        technologies: ["K8S secrets", "Vault", "Cloud provider secret stores"],
    },
    {
        title: "Development Environment",
        shortDescription: "What is the right local developer environment?",
        iconBackground: require("./icons/dev-env.png"),
        description:
        "Giving developers a local environment where they can test everything in a representative and matching way is important for a team's performance and ability to debug. Depending on your budget, it may be local clusters or remote clusters (or namespaces in a remote cluster).",
        technologies: [
            "Docker compose",
            "Tilt",
            "Skaffold",
            "Local cluster (kind, k3d, docker desktop, etc.)",
        ],
    },
    {
        title: "Backup Clusters",
        shortDescription: "How should you backup clusters?",
        iconBackground: require("./icons/backup.png"),
        description:
        "Should a disaster occur, you need the ability to restore your cluster. Velero is a great and free option, but if you are using GitOps, redeploying that and pointing it at your configuration repo(s) may be sufficient.",
        technologies: ["Velero", "Kasten", "Gitops Redeploy"],
    },
    {
        title: "Security",
        shortDescription: "How should you handle security in your cluster?",
        iconBackground: require("./icons/security.png"),
        description:
        "Not only should you setup decent RBAC, network policies, but also add security measures like container image - and dependency scanning, and checking potential misconfigurations.",
        technologies: [
            "Falco",
            "Aqua",
            "Snyk",
            "Kubescape",
            "Various Admission Controllers",
        ],
    },
];

export default contentDescs;
