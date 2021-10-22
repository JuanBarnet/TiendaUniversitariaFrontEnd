import type { AppProps } from 'next/app'
import AuthProvider from '../contexts/AuthContext';

import "../styles/prueba.css";
import "../styles/sideBarMenu.scss";
import "../styles/SideBarMenuItemView.scss";
import "../styles/login/login.scss";
import "bootstrap-css-only/css/bootstrap.min.css";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp
