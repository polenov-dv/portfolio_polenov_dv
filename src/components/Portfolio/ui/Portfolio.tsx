import { Description } from 'components/Description';
import cls from './Portfolio.module.scss';
import { useTranslation } from 'react-i18next';
import { Project as ProjectModel } from 'shared/models/Project/Project';
import { projects } from "shared/data/Projects/projects.js";
import { ProjectCard } from 'components/ProjectCard';


interface PortfolioProps {
	selectProject: (project: ProjectModel) => void;
}

export const Portfolio = ({ selectProject }: PortfolioProps) => {

	const { t } = useTranslation();

	return (
		<div id='portfolio-path' className={cls.content}>
			<Description title={t('Портфолио')} text={t('Мои проекты')} />
			<div className={cls.projects}>
				{
					projects.map((project: ProjectModel) => (
						<ProjectCard key={project.id} project={project} selectProject={selectProject} />
					))
				}
			</div>
		</div>
	);
};
