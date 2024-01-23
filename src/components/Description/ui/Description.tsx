import cls from './Description.module.scss';

interface DescriptionProps {
	title: string;
	text: string;
}

export const Description = ({ title, text }: DescriptionProps) => {
	return (
		<div className={cls.desc}>
			<h2 className={cls.desc_title}>
				{title}
			</h2>
			<h4 className={cls.desc_text}>
				{text}
			</h4>
		</div>
	);
};
