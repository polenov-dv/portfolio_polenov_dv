import cls from './Switch.module.scss';

interface SwitchProps {
	isOn: boolean;
	id: string;
	handleToggle: (value: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
	const { isOn, id, handleToggle } = props;
	return (
		<>
			<input
				className={cls.switch_checkbox}
				id={id}
				type="checkbox"
				checked={isOn}
				onChange={() => handleToggle(!isOn)}
			/>
			<label
				className={cls.switch_label}
				htmlFor={id}
			>
				<span className={cls.switch_button} />
			</label>
		</>
	);
};
