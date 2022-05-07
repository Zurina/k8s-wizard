import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Wizard, Steps, Step } from 'react-albus';
import { Line } from 'rc-progress';
import './exampleAnimation.scss';
import ArticleRow from './articleRow';

const SkipAStep = () => (
    <div className="row pad-t">
      <div className="col-xs-6 col-xs-offset-3">
            <Wizard
              render={({ step, steps }) => (
                <div>
                  <Line
                    percent={(steps.indexOf(step) + 1) / steps.length * 100}
                    className="pad-b"
                  />
                  <TransitionGroup>
                    <CSSTransition
                      key={step.id}
                      classNames="fade-enter "
                      timeout={0}
                    >
                      <div className="example-steps fluid">
                        <Steps key={step.id} step={step}>
                          <Step
                            id="introduction"
                            render={({ push }) => (
                              <div>
                                <h1>Should you even use Kubernetes?</h1>
                                <h3>If you can say yes to the following, then yes:</h3>
                                    <li>Do you operate many different applications?</li>
                                    <li>Are they containerized or do you plan to containerize them?</li>
                                    <li>Have you ruled out the Container as a Service options (Cloud run, Apprunner, Fargatte and so on)?</li>
                                <button onClick={() => push('self-host-k8s')}>YES</button>
                                <button onClick={() => push('no-need')}>NO</button>
                              </div>
                            //   <article class="leaderboard__profile">
                            //   <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
                            //   <span class="leaderboard__name">Mark Zuckerberg</span>
                            //   <span class="leaderboard__value">35.7<span></span></span>
                            // </article>
                            )}
                          />
                          <Step
                            id="no-need"
                            render={({ push }) => (
                              <div>
                                <h1>Use something else!</h1>
                                <ArticleRow text="PAAS" />
                                <ArticleRow text="Containers as a Service" />
                                <ArticleRow text="Serverless" />
                                <ArticleRow text="Hashicorp Nomad" />
                                <ArticleRow text="One or few VMs to keep things simple" />
                                <button onClick={() => push('introduction')}>Regret?</button>
                              </div>
                            )}
                          />
                          <Step
                            id="self-host-k8s"
                            render={({ push }) => (
                              <div>
                                <h1>Should you self-host Kubernetes?</h1>
                                <h3>If you can say yes to the following, then yes:</h3>
                                <ul>
                                    <li>Do you need new features as soon as they are released?</li>
                                    <li>Are you required to run on-premise for some reason?</li>
                                    <li>Are you prepared and skilled enought to deal with and debug issues with the control pane should they arise?</li>
                                </ul>
                                <button onClick={() => push('on-premise-hosting')}>YES?</button>
                                <button onClick={() => push('cloud-hosting')}>NO?</button>
                              </div>
                            )}
                          />
                          <Step
                            id="on-premise-hosting"
                            render={({ push }) => (
                              <div>
                                <h1>How can you provision clusters?</h1>
                                <p>These all come with different levels of automation and control integrated.
                                    Some include provisioning the underlying infrastructure while others doesn't.
                                </p>
                                <ArticleRow text="Kubeadm" />
                                <ArticleRow text="Kops" />
                                <ArticleRow text="Kubespray" />
                                <ArticleRow text="Rancher" />
                                <ArticleRow text="Talos" />
                                <ArticleRow text="Portainer" />
                                <button onClick={() => push('infrastructure-as-code')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="cloud-hosting"
                            render={({ push }) => (
                              <div>
                                <h1>Which managed cluster should you use?</h1>
                                <h3>There are a lot of options. It comes down to your needs and maybe the cloud you're already using.</h3>
                                <p>
                                    In addition to the Kubernetes service you also need to consider and think about
                                    other services that the provider can offer and you'd like to use. This could be
                                    regarding storage types, DB as as Service, IAM an so on.
                                </p>
                                <ArticleRow text="Google Kubernetes Engine" />
                                <ArticleRow text="Linode Kubernetes Engine" />
                                <ArticleRow text="Elastic Kubernetes Engine" />
                                <ArticleRow text="Azure Kubernetes Engine" />
                                <ArticleRow text="Vultr Kubernetes Engine" />
                                <ArticleRow text="Digital Ocean Kubernetes" />
                                <ArticleRow text="Civo Kubernetes" />
                                <ArticleRow text="Oracle Kubernetes Engine" />
                                <ArticleRow text="Openshift" />
                                <ArticleRow text="IBM Kubernetes" />
                                <ArticleRow text="OVHcloud Kubernetes" />
                                <ArticleRow text="Alibaba Cloud Kubernetes" />
                                <ArticleRow text="Tencent Kubernetes" />
                                <button onClick={() => push('infrastructure-as-code')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="infrastructure-as-code"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle Infrastructure as Code?</h1>
                                <h3>There are different options to choose from.</h3>
                                <p>Is multi cloud support a factor to you? Do you need to migrate stuff often?
                                Does the tool you are considered have the necessary coverage you need for your requirements?
                                </p> 
                                <ArticleRow text="Terraform" />
                                <ArticleRow text="Cloud Development Kid" />
                                <ArticleRow text="Cloudformation" />
                                <ArticleRow text="Pulumi" />
                                <ArticleRow text="Crossplane" />
                                <ArticleRow text="Arm templates" />
                                <button onClick={() => push('environment-isolation')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="environment-isolation"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle environment isolation?</h1>
                                <p>Whatever you choose here will have an effect on your automation of infrastructure as code.</p>
                                <ArticleRow text="Namespaces" /> 
                                <ArticleRow text="Clusters" /> 
                                <ArticleRow text="Cloud accounts" /> 
                                <ArticleRow text="Cloud projects" /> 
                                <button onClick={() => push('container-registry')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="container-registry"
                            render={({ push }) => (
                              <div>
                                <h1>Which container registry should you use?</h1>
                                <h3>If you're using cloud, you should heavily consider using their offered registry because of the existing integration.</h3>
                                <ArticleRow text="The registry offered by your cloud provider" /> 
                                <ArticleRow text="Jfrog" /> 
                                <ArticleRow text="Dockerhub" /> 
                                <ArticleRow text="Harbor" /> 
                                <button onClick={() => push('application-packaging')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="application-packaging"
                            render={({ push }) => (
                              <div>
                                <h1>How should you package your application?</h1>
                                <p>As you deploy to different environments you need a way to manage configurations for your
                                    applications, since configurations tend to differ in environments if you follow best practices.
                                </p>
                                <ArticleRow text="Helm" />
                                <ArticleRow text="RAW Kubernetes YAML" />
                                <ArticleRow text="CRDs and operators" />
                                <ArticleRow text="Kustomize" />
                                <ArticleRow text="Pulumi" />
                                <ArticleRow text="Naml" />
                                <ArticleRow text="Shipa" />
                                <button onClick={() => push('version-control')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="version-control"
                            render={({ push }) => (
                              <div>
                                <h1>Which version control system should you use?</h1>
                                <p>Gitlab provides as lot of nice features, however, Github is the go-to choice here. 
                                    Whatever you choose, you should choose the one you devide to use for CI/CD (or the other way around).
                                </p>
                                <ArticleRow text="Github" />
                                <ArticleRow text="Gitlab" />
                                <ArticleRow text="Bitbucket" />
                                <ArticleRow text="Circle CI" />
                                <ArticleRow text="Cloud specific" />
                                <button onClick={() => push('repos-structure')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="repos-structure"
                            render={({ push }) => (
                              <div>
                                <h1>How should you structure your repos?</h1>
                                <p>Mono-repo favors consistency, whereas multi-repo focuses on decoupling. While in a mono-repo,
                                    the entire team can see changes done by one person, multi-repo
                                    creates a separate repo for each team, who have access to only the required services.
                                </p>
                                <ArticleRow text="Monorepo" />
                                <ArticleRow text="Multi-repo" />
                                <button onClick={() => push('ci')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="ci"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle continuous integration?</h1>
                                <p>A lot of options. Each have a lot and different features.</p>
                                <p>Look for local development/execution story, public ecosystem/shareability, integrations with your VCS.</p>
                                <ArticleRow text="Github Actions" />
                                <ArticleRow text="Jenkins" />
                                <ArticleRow text="CircleCI" />
                                <ArticleRow text="Gitlab CI" />
                                <ArticleRow text="Bitbucket" />
                                <ArticleRow text="Dagger" />
                                <ArticleRow text="Spacelift (infrastructure as code)" />
                                <ArticleRow text="Jenkins" />
                                <button onClick={() => push('cd')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="cd"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle continuous delivery?</h1>
                                <p>Pull based is what GitOps is about and here you avoid having cluster credentials in CI.</p>
                                <p>Push based is easier to get started with.</p>
                                <ArticleRow text="Pull based (Argo CD or Flux)" />
                                <ArticleRow text="Push based (From your CI pipelines)" />
                                <button onClick={() => push('traffic')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="traffic"
                            render={({ push }) => (
                              <div>
                                <h1>How to get traffic into the cluster?</h1>
                                <p>If your requirements are low-key, a loadbalancer from your cloud provider might be 
                                    exactly what you need. However, if not, you might need to look for something with more capabilities and which is more customizable.
                                </p>
                                <ArticleRow text="Nginx" />
                                <ArticleRow text="Kong" />
                                <ArticleRow text="HAProxy" />
                                <ArticleRow text="Traefik" />
                                <ArticleRow text="Loadbalancer services from your cloud provider" />
                                <button onClick={() => push('networking')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="networking"
                            render={({ push }) => (
                              <div>
                                <h1>How to get traffic into the cluster?</h1>
                                <p>If you're using the cloud, taking advantage of the default networking is probably the easiest and best idea.</p>
                                <p>Some of the more advanced options do have some interesting features though, for example using eBFF rather than regular iptabls.</p>
                                <ArticleRow text="Cloud provider implementation" />
                                <ArticleRow text="Calico" />
                                <ArticleRow text="Cilium" />
                                <ArticleRow text="Flannel" />
                                <ArticleRow text="Weave" />
                                <button onClick={() => push('service-mesh')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="service-mesh"
                            render={({ push }) => (
                              <div>
                                <h1>Do you need a service mesh, and if so, which one?</h1>
                                <p>Service meshes improves service discovery, security and observability of networking within the cluster.</p>
                                <p>Depending on your situation and your needs, a service mesh might be way to complicated and unnecessary or
                                   it may be exactly what you need should you have a overload of services etc. 
                                </p>
                                <ArticleRow text="Linkerd" />
                                <ArticleRow text="Istio" />
                                <ArticleRow text="Consul" />
                                <button onClick={() => push('storage')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="storage"
                            render={({ push }) => (
                              <div>
                                <h1>Do you need storage for your applications?</h1>
                                <p>
                                    For auto-provisioning block storage, your cloud-providers CSI driver will get you started. For 
                                    more cutomizable storage features, Rook can help you out.
                                </p>
                                <ArticleRow text="Storage provided by cloud provider" />
                                <ArticleRow text="Rook" />
                                <button onClick={() => push('observability')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="observability"
                            render={({ push }) => (
                              <div>
                                <h1>How can you get observability in the clusters?</h1>
                                <p>TODO: NEED TO BE EXPANDED.</p>
                                <p>Monitoring, logging, alerting and distributed tracing are critical components. Each tool
                                    is vital and must be considered wisely.
                                </p>
                                <ArticleRow text="Cloud provider services" />
                                <ArticleRow text="Honeycomb" />
                                <ArticleRow text="Datadog" />
                                <ArticleRow text="Self-hosted ELK, Prometheus, Grafana, Kibana, Elastic search" />
                                <ArticleRow text="Relic" />
                                <button onClick={() => push('credentials')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="credentials"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle credentials?</h1>
                                <p>If you use K8S secrets you need to decide if you inject them as env vars or volume mounts.</p>
                                <p>You still need to consider a source of truth outside of the cluster.</p>
                                <ArticleRow text="K8S secrets" />
                                <ArticleRow text="Vault" />
                                <ArticleRow text="Cloud provider secret stores" />
                                <button onClick={() => push('dev-env')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="dev-env"
                            render={({ push }) => (
                              <div>
                                <h1>What is the right local developer environment?</h1>
                                <p>Giving developers a local environment where they can test everything in a
                                    representative and matching way is important for a team's performance and ability to debug.
                                    Depending on your budget, it may be local clusters or remote clusters (or namespaces in a remote cluster).
                                </p>
                                <ArticleRow text="Docker compose" />
                                <ArticleRow text="Tilt" />
                                <ArticleRow text="Skaffold" />
                                <ArticleRow text="Local cluster (kind, k3d, docker desktop, etc.)" />
                                <button onClick={() => push('security')}>Next</button>
                              </div>
                            )}
                          />
                          <Step
                            id="back-clusters"
                            render={({ push }) => (
                              <div>
                                <h1>How should you backup clusters? NEEDS WORK</h1>
                                <p>Should a disaster occur, you need the ability to restore your cluster. Velero is a great and free option,
                                    but if you are using GitOps, redeploying that and pointing it at your configuration repo(s) may be sufficient.
                                </p>
                                <ArticleRow text="Velero" />
                                <ArticleRow text="Kasten" />
                                <ArticleRow text="Gitops Redeploy" />
                              </div>
                            )}
                          />
                          <Step
                            id="security"
                            render={({ push }) => (
                              <div>
                                <h1>How should you handle security in your cluster?</h1>
                                <p>Not only should you setup decent RBAC, network policies, but also add security measures like container image - 
                                    and dependency scanning, and checking potential misconfigurations. 
                                </p>
                                <ArticleRow text="Snyk" />
                                <ArticleRow text="Falco" />
                                <ArticleRow text="Aqua" />
                                <ArticleRow text="Kubescape" />
                                <ArticleRow text="Various Admission Controllers" />
                                <button onClick={() => push('back-clusters')}>Next</button>
                              </div>
                            )}
                          />
                        </Steps>
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
                  
                </div>
              )}
            />
      </div>
    </div>
);

export default SkipAStep;