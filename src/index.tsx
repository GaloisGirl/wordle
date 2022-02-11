import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles, initializeIcons } from '@fluentui/react';

import './index.css';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

initializeIcons();
ReactDOM.render(<App />, document.body);


