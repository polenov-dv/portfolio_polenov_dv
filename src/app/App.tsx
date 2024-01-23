import "./styles/index.scss"
import { Home } from "pages/Home";
import { useSelector } from 'react-redux';
import { selectSetting } from "redux/setting/selectors";

const App = () => {

	const { theme } = useSelector(selectSetting);
	return (

		<div className={`app ${theme}`}>
			<Home />
		</div >
	);
};

export default App;