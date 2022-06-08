import React from "react";
import "./styles/exampleAnimation.scss";
import "./styles/buttons.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Wizard, Steps } from "react-albus";
import ShouldYouUseK8s from './steps/shouldYouUseK8s'
import NoNeedForK8s from './steps/noNeedForK8s'
import SelfHostK8s from './steps/selfHostK8s'
import OnPremiseHosting from './steps/onPremiseHosting'
import CloudHosting from './steps/cloudHosting'
import HybridHosting from './steps/hybridHosting'
import ToolBoxes from './steps/toolBoxes'

const Albus = (props) => (
	<div className="row pad-t">
		<div className="col-xs-6 col-xs-offset-3">
			<Wizard
				render={({ step }) => (
					<div>
						<TransitionGroup>
							<CSSTransition key={step.id} classNames="fade-enter " timeout={0}>
								<div className="example-steps">
									<Steps key={step.id} step={step}>
										<ShouldYouUseK8s id="introduction" updateEnvState={props.updateEnvState}/>
										<NoNeedForK8s id="no-need" updateEnvState={props.updateEnvState}/>
										<SelfHostK8s id="self-host-k8s" updateEnvState={props.updateEnvState}/>
										<OnPremiseHosting id="on-premise-hosting" updateEnvState={props.updateEnvState}/>
										<CloudHosting id="cloud-hosting" updateEnvState={props.updateEnvState}/>
										<HybridHosting id="hybrid-hosting" updateEnvState={props.updateEnvState}/>
										<ToolBoxes envState={props.envState} id="tool-boxes" updateEnvState={props.updateEnvState}/>
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
