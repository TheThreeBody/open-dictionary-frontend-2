import homeLogic from './pages/home/HomeLogic';
import loginLogic from './pages/login/LoginLogic';
import addwordLogic from './pages/addword/AddwordLogic';

export default[
    ...homeLogic,
    ...loginLogic,
    ...addwordLogic,
];