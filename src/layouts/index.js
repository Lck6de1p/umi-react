import {ErrorBoundary, MenuBar} from '@/components';
import { StoreProvider } from 'think-react-store';
import * as store from '../stores';
function BasicLayout(props) {
  const pathname = window.location.pathname
  const paths = ['/', '/order', '/user']

  return (
    <StoreProvider store={store}>
      <MenuBar 
      show={paths.includes(pathname)}
      pathname={pathname}
      />
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default BasicLayout;
