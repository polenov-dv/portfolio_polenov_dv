import { Header } from "components/Header";
import { useEffect } from 'react';
import cls from './Home.module.scss';
import { Switcher } from "components/Switcher";
import { useState } from "react";
import { MainSection } from "components/MainSection/ui/MainSection";
import { Contacts } from "components/Contacts";
import { AboutMe } from "components/AboutMe";
import { Resume } from "components/Resume";
import { Portfolio } from "components/Portfolio";
import { Project as ProjectModel } from "shared/models/Project/Project";
import { ModalProject } from "components/ModalProject";
import ArrowUp from 'shared/assets/icon/arrow-circle-up.svg';
export const Home = () => {

	const [openSwitcher, setOpenSwitcher] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectModel | undefined>(undefined);
	const [modal, setModal] = useState(false);
	const [scroll, setScroll] = useState(0);

	const selectProject = (project: ProjectModel) => {
		setSelectedProject(project);
		setModal(true);
	}

	const closeModal = () => {
		setModal(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	return (
		<div className={cls.content}>
			<ModalProject visible={modal} onClose={closeModal} project={selectedProject} />
			<Header scroll={scroll} />
			<main className={cls.content_main}>
				<div
					className={openSwitcher ? `${cls.switcher_wrapper} ${cls.switcher_active}` : cls.switcher_wrapper}>
					<Switcher status={openSwitcher} open={setOpenSwitcher} />
				</div>
				<MainSection />
				<AboutMe />
				<Resume />
				<Portfolio selectProject={selectProject} />
				<Contacts />
				{
					scroll > document.documentElement.clientHeight - 1 &&
					<div className={cls.arrow_up_wrapper}>
						<a href="#main-path">
							<ArrowUp className={cls.arrow_up} />
						</a>
					</div>
				}
			</main >
		</div>
	);
};
