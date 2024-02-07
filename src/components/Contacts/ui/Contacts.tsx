import { useState, useRef } from 'react';
import cls from './Contacts.module.scss';
import { Description } from 'components/Description';
import { useTranslation } from 'react-i18next';
import Phone from 'shared/assets/icon/phone.svg';
import Mail from 'shared/assets/icon/mail.svg';
import emailjs from '@emailjs/browser';
import Github from 'shared/assets/icon/github.svg';
import Telegram from 'shared/assets/icon/telegram.svg';
import Vk from 'shared/assets/icon/vk.svg';
import Whatsapp from 'shared/assets/icon/whatsapp.svg';

export const Contacts = () => {

	const { t } = useTranslation();
	const form = useRef();
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [textMessage, setTextMessage] = useState('');

	const clearData = () => {
		setEmail('');
		setUserName('');
		setTextMessage('');
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		emailjs.sendForm('service_69wtvyl', 'template_66r2m6x', form.current, 'DNX6quCOV7Lx4C0JF')
			.then((response) => {
				console.log('SUCCESS!', response);
				clearData();
			}, (error) => {
				console.log('FAILED...', error);
				clearData();
			});
	}

	return (
		<div id='contacts-path' className={cls.content}>
			<Description title={t('Контакты')} text={t('Связаться')} />
			<div className={cls.info}>
				<div className={cls.contacts}>
					<ul className={cls.address}>
						<li className={cls.address_title}>
							{t('Адрес')}
						</li>
						<li className={cls.address_item}>
							{t('Российская Федерация')}
						</li>
						<li className={cls.address_item}>
							<a className={cls.address_link} href="tel:+79595243430">
								<Phone />
								+7-959-524-34-30
							</a>
						</li>
						<li className={cls.address_item}>
							<a className={cls.address_link} href="mailto:polenovdimaprok@gmail.com">
								<Mail />
								polenovdimaprok@gmail.com
							</a>
						</li>
					</ul>

					<div className={cls.social}>
						<p className={cls.social_title}>
							{t('Соцсети')}
						</p>
						<ul className={cls.social_list}>
							<li className={cls.social_item}>
								<a className={cls.social_link} href="https://vk.com/id272160444">
									<Vk />
								</a>
							</li>
							<li className={cls.social_item}>
								<a className={cls.social_link} href="https://wa.me/+79595243430">
									<Whatsapp />
								</a>
							</li>
							<li className={cls.social_item}>
								<a className={cls.social_link} href="https://t.me/+79595243430">
									<Telegram />
								</a>
							</li>
							<li className={cls.social_item}>
								<a className={`${cls.social_link} ${cls.github}`} href="https://github.com/polenov-dv">
									<Github />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className={cls.form_wrapper}>
					<p className={cls.title_form}>
						{t('Напишите мне')}
					</p>
					<form ref={form} className={cls.form} onSubmit={handleSubmit}>
						<fieldset className={cls.form_content}>
							<fieldset className={cls.form_input_fieldset}>
								<input
									name="fullName"
									type="text"
									className={cls.form_input}
									placeholder={t('Как вас зовут?')}
									value={userName}
									onChange={e => setUserName(e.target.value)}
								/>

								<input
									name="email"
									type="email"
									className={cls.form_input}
									placeholder={t('Ваша электронная почта?')}
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</fieldset>

							<fieldset className={cls.form_group}>
								<textarea
									name="message"
									className={cls.form_area}
									placeholder={t('Текст сообщения')}
									value={textMessage}
									onChange={e => setTextMessage(e.target.value)}
								>
								</textarea>
							</fieldset>

							<div className={cls.btn_wrapper}>
								<button
									className={cls.btn}
									type='submit'
								>
									{t('Отправить')}
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};
