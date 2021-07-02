import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./render";
import state from "./redux/state";
import './index.css';

renderEntireTree(state);

reportWebVitals();
