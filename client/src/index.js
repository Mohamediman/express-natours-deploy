import ReactDOM from 'react-dom';
import App from './App';

// trustedTypes.createPolicy('default', {
//     createScriptURL: (input) => {
//       if (new URL(input).origin === 'https://js.stripe.com') {
//         return input;
//       }
//       return undefined;
//     }
//   });

ReactDOM.render(<App />, document.getElementById('root'));

