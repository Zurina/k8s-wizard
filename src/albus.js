import React from "react";
import "./exampleAnimation.scss";
import Security from "./box-components/security"
import IAC from "./box-components/iac"
import EnvIsolation from "./box-components/envIsolation"
import ContainerRegistry from "./box-components/containerRegistry"
import ApplicationPackaging from "./box-components/applicationPackaging"
import VersionControl from "./box-components/versionControl"
import RepositoryStructure from "./box-components/repositoryStructure"
import CI from "./box-components/CI"
import CD from "./box-components/CD"
import Traffic from "./box-components/traffic"
import Networking from "./box-components/networking"
import ServiceMesh from "./box-components/serviceMesh"
import Storage from "./box-components/storage"
import Observability from "./box-components/observability"
import Credentials from "./box-components/credentials"
import DevEnv from "./box-components/devEnv"
import BackupClusters from "./box-components/backupClusters"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Wizard, Steps, Step } from 'react-albus';
import ArticleRow from "./utilities/articleRow";

const Albus = () => (
	<div className="row pad-t">
      <div className="col-xs-6 col-xs-offset-3">
            <Wizard
              render={({ step, steps }) => (
                <div>
                  <TransitionGroup>
                    <CSSTransition
                      key={step.id}
                      classNames="fade-enter "
                      timeout={0}
                    >
                      <div className="example-steps">
                        <Steps key={step.id} step={step}>
                          <Step
                            id="introduction"
                            render={({ push }) => (
                              <div>
                                <h1>Should you even use Kubernetes?</h1>
                                <h3>If you can say yes to the following, then yes:</h3>
                                <ul>
                                    <li>Do you operate many different applications?</li>
                                    <li>Are they containerized or do you plan to containerize them?</li>
                                    <li>Have you ruled out the Container as a Service options (Cloud run, Apprunner, Fargatte and so on)?</li>
                                </ul>
                                <p>So in the end, it comes down to whether you are operating many, containerized, microservices k8s
                                   can provide a great base for building an app platform. If you have a single monolithic app,
                                   you will almost certainly be better served by a different approach!</p>
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
                                <ArticleRow name="PAAS" />
                                <ArticleRow name="Containers as a Service" />
                                <ArticleRow name="Serverless" />
                                <ArticleRow name="Hashicorp Nomad" />
                                <ArticleRow name="One or few VMs to keep things simple" />
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
                                <ArticleRow name="Kubeadm" />
                                <ArticleRow name="Kops" />
                                <ArticleRow name="Kubespray" />
                                <ArticleRow name="Rancher" />
                                <ArticleRow name="Talos" />
                                <ArticleRow name="Portainer" />
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
                                <ArticleRow name="Google Kubernetes Engine" />
                                <ArticleRow name="Linode Kubernetes Engine" />
                                <ArticleRow name="Elastic Kubernetes Engine" />
                                <ArticleRow name="Azure Kubernetes Engine" />
                                <ArticleRow name="Vultr Kubernetes Engine" />
                                <ArticleRow name="Digital Ocean Kubernetes" />
                                <ArticleRow name="Civo Kubernetes" />
                                <ArticleRow name="Oracle Kubernetes Engine" />
                                <ArticleRow name="Openshift" />
                                <ArticleRow name="IBM Kubernetes" />
                                <ArticleRow name="OVHcloud Kubernetes" />
                                <ArticleRow name="Alibaba Cloud Kubernetes" />
                                <ArticleRow name="Tencent Kubernetes" />
                                <button onClick={() => push('infrastructure-as-code')}>Next</button>
                              </div>
                            )}
                          />
						  <Step
                            id="infrastructure-as-code"
                            render={({ push }) => (
								<div className="boxes-container">
									<IAC />
									<EnvIsolation />
									<ContainerRegistry />
									<ApplicationPackaging />
									<VersionControl />
									<RepositoryStructure />
									<CI />
									<CD />
									<Traffic />
									<Networking />
									<ServiceMesh />
									<Storage />
									<Observability />
									<Credentials />
									<DevEnv />
									<BackupClusters />
									<DevEnv />
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

export default Albus;
