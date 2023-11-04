import "@fortawesome/fontawesome-free/css/all.min.css";
import { render } from 'react-dom'; // Corrected import
import  App from './App'; // Assuming App is a default export
import './index.css';

const rootElement = document.getElementById('app');
if (rootElement) {
  render(<App />, rootElement);
}
