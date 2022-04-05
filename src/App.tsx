
import { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import RoutesWay from './routes/RoutesWay';


const App: FC = () => {
    return (
        <div className="App">
            <RoutesWay />
        </div>
    );
};

export default hot(App);
