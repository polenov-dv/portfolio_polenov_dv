import cls from './ProgressSkill.module.scss';

interface ProgressSkillProps {
	completed: string,
	skill: string
}

export const ProgressSkill = ({ completed, skill }: ProgressSkillProps) => {

	return (
		<div className={cls.content_wrapper}>
			<div className={cls.desc_wrapper}>
				<p className={cls.desc}>
					{skill}
				</p>
				<span>
					{`${completed}%`}
				</span>
			</div>

			<div className={cls.content} >
				<div className={cls.filler} style={{ width: `${completed}%` }}>
					<span className={cls.label_bar}></span>
				</div>
			</div>
		</div>
	);
};
