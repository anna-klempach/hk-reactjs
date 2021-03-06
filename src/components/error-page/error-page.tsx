import * as React from 'react';
import { useDispatch } from 'react-redux';
import useRouter from '../../hooks/use-router';
import { setQueryParams } from '../../redux/actions';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import './error-page.scss';

export const ErrorPage = (): React.ReactElement => {
  const router = useRouter();

  const onClickBack = (): void => {
    router.history.push('/');
  }
  
  return (
    <div className="app-container">
      <div className="app-container__inner">
        <div className="error-header">
          <Logo />
        </div>
        <div className="error-main">
          <h1>Page Not Found</h1>
          <p className="error-type">404</p>
          <button className="button-secondary" onClick={onClickBack}>GO BACK TO HOME</button>
        </div>
      </div>
      <Footer />
    </div>
)};
