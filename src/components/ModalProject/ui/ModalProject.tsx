
import cls from './ModalProject.module.scss';
import { Project as ProjectModel } from "shared/models/Project/Project";
import Close from 'shared/assets/icon/close.svg';
import { useTranslation } from 'react-i18next';

interface Props {
	visible: boolean;
	project: ProjectModel;
	onClose: () => void;
}

export const ModalProject = ({ onClose, project, visible }: Props) => {

	const { t } = useTranslation();

	const modalClasses = [cls.modalWindow];
	if (visible) {
		modalClasses.push(cls.active);
	}

	return (
		<div
			className={modalClasses.join(' ')}
			onClick={() => onClose()}
		>
			<div
				className={cls.content}
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<div className={cls.close_modal} onClick={() => onClose()}>
					<Close />
				</div>

				<p className={cls.title}>
					{t('Проект')} {project?.id}: {project?.name}
				</p>

				<div className={cls.info}>

					{
						project &&
						<div
							className={cls.pick}
							style={{ backgroundImage: `url(${project.bgImage})` }}
						>
						</div>
					}

					<ul className={cls.desc_list}>
						<li className={cls.desc_item}>
							<span>
								{t('Описание')}:
							</span>
						</li>
						<li className={cls.desc_item}>
							{t(`${project?.description}`)}
						</li>
						<li className={cls.desc_item}>
							<span>
								{t('Технологии')}:
							</span>
						</li>
						<li className={cls.desc_item}>
							{project?.technologies}
						</li>
						<li className={cls.desc_item}>
							<span>URL:</span>
						</li>
						<li className={cls.desc_item}>
							<a
								href={`${project?.url}`}
								className={cls.desc_link}
							>
								{project?.url}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div >
	)
}