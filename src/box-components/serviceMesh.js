import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/service-mesh.png";
import Context from "../context/context";

const IAC = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Service Mesh",
		description:
			"Service meshes improves service discovery, security and observability of networking within the cluster. Depending on your situation and your needs, a service mesh might be way to complicated and unnecessary or it may be exactly what you need should you have a overload of services etc. ",
		technologies: ["Linkerd", "Istio", "Consul"],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Service Mesh</h2>
				<span className="description">
					Service Mesh helps you omit manuel configurations and makes setup
					repeatable.
				</span>
				<div className="box">
					<div
						className="icon_bg"
						style={{ backgroundImage: "url(" + iconBackground + ")" }}
					></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Service Mesh</p>
			</div>
			<MyModal
				openModal={openModal}
				content={content}
				setToolState={setToolState}
				toolState={toolState[content.title]}
			/>
		</div>
	);
};

export default IAC;
