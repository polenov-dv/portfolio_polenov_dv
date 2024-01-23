import cls from './ProjectCard.module.scss';
import { Project as ProjectModel } from 'shared/models/Project/Project';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
	project: ProjectModel;
	selectProject: (project: ProjectModel) => void;
}

export const ProjectCard = ({ project, selectProject }: ProjectCardProps) => {

	const { t } = useTranslation();

	return (
		<div
			className={cls.content_wrapper}
			style={{ backgroundImage: `url(${project.bgImage})` }}
			onClick={() => selectProject(project)}
		>
			<div className={cls.content}>
				<p className={cls.name}>
					{t('Проект')}
					{` ${project.id}`}
				</p>
			</div>
		</div>
	);
};

