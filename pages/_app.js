// Import Bootstrap CSS globally
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the global styles
import "../styles/globals.css";

// Import necessary dependencies
import { Provider } from 'react-redux';
import store from "../store/store";
import { ThemeProvider } from 'next-themes';

// Main App component
export default function App({ Component, pageProps }) {
  return (
    // Wrap the entire application with ThemeProvider and Redux Provider
    <ThemeProvider>
      <Provider store={store}>
        {/* Render the main component of the page */}
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
