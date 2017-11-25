import homeLogic from './pages/home/HomeLogic';
import loginLogic from './pages/login/LoginLogic';
import addwordLogic from './pages/addword/AddwordLogic';
import reviewLogic from './pages/review/ReviewLogic';

export default[
    ...homeLogic,
    ...loginLogic,
    ...addwordLogic,
    ...reviewLogic,
];