export default function tips(envState, concept) {
    let tips = "";
    switch(concept) {
        case "Infrastructure as Code":
            if ("cloud-provider" in envState && envState["cloud-provider"] == "AWS Elastic Kubernetes Engine") {
                tips += "If you're fully dedicated to AWS and don't care about vendor lock-in, Cloudformation is a good option for you."
            }
            break;
        case "Authentication":
            if ("self-host-k8s" in envState && envState["self-host-k8s"] == "yes") {
                tips += "Dex or Keycloak are ideal choices for you. See the pros and cons to see what fits you best."
            }
            break;
        case "Environment Isolation":
            break;
        case "Container Registry":
            break;
        case "Application Packaging":
            break;
        case "Version Control":
            break;
        case "Repository Structure":
            break;
        case "Continuous Integration":
            break;
        case "Continuous Deployment":
            break;
        case "Traffic":
            break;
        case "Networking":
            break;
        case "Service Mesh":
            break;
        case "Storage":
            break;
        case "Observability":
            break;
        case "Credentials":
            break;
        case "Development Environment":
            break;
        case "Backup Clusters":
            break;
        case "Security":
            break;
        default:
            return tips;
    }
    return tips;
}