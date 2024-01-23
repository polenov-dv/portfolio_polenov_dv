import shopImg from 'shared/assets/images/shop.png';
import articleImg from 'shared/assets/images/article.png';
import postImg from 'shared/assets/images/post.png';
import polenovImg from 'shared/assets/images/polenov_dv.png';
import instagramImg from 'shared/assets/images/instagram.png';
import candleImg from 'shared/assets/images/candle.png';

const projects = [
	{
		id: 1,
		name: "Kideria",
		title: "Интернет магазин детских игрушек",
		description: "Проект содержит основной функционал типового интернет-магазина, а именно: получение данных из бэкенда, отображение карточек товаров, сортировка/фильтрация товаров, добавление товаров в корзину, оформление заказа и тд....",
		technologies: "HTML5, CSS3, React, Redux Toolkit, TypeScript",
		bgImage: shopImg,
		bgColor: "#e6b980",
		url: "https://github.com/polenov-dv/soft-toys-shop"
	},
	{
		id: 2,
		name: "Article",
		title: "Портал образовательных ресурсов",
		description: "Проект по созданию/редактированию/поиску статей. Детальнее на странице <О сайте> данного проетка",
		technologies: "HTML5, CSS3, React, TypeScript",
		bgImage: articleImg,
		bgColor: "#fe9088",
		url: "https://github.com/polenov-dv/react-article-project"
	},
	{
		id: 3,
		name: "Post",
		title: "Всё обо Всём",
		description: "Проект по работе с постами. Детальнее на странице <О сайте> данного проетка",
		technologies: "HTML5, CSS3, React, TypeScript",
		bgImage: postImg,
		bgColor: "#f3e5d6",
		url: "https://github.com/polenov-dv/react-post-project"
	},
	{
		id: 4,
		name: "Portfolio",
		title: "Портфолио",
		description: "Визитная карточка фронтенд разработчика",
		technologies: "HTML5, CSS3, React, TypeScript",
		bgImage: polenovImg,
		bgColor: "#1881a1",
		url: "https://github.com/polenov-dv/portfolio_polenov_dv"
	},
	{
		id: 5,
		name: "InstaPanchmen",
		title: "Инстраграмм",
		description: "Проект интерфейса популярной социальной сети - инстраграмм",
		technologies: "HTML5, CSS3, React, TypeScript",
		bgImage: instagramImg,
		bgColor: "#afc76f",
		url: "https://github.com/polenov-dv/react-instagram"
	},
	{
		id: 6,
		name: "HM Candler",
		title: "Лендинг",
		description: "Проект лендинга по продаже ароматических свечей",
		technologies: "HTML5, CSS3, React, TypeScript",
		bgImage: candleImg,
		bgColor: "#1881a1",
		url: "https://github.com/polenov-dv/layout-candler"
	}
];

export { projects }