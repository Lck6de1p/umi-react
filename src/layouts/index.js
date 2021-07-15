import {ErrorBoundary, MenuBar} from '@/components';
function BasicLayout(props) {
  const pathname = window.location.pathname
  const paths = ['/', '/order', '/user']

  return (
    <div>
      <MenuBar 
      show={paths.includes(pathname)}
      pathname={pathname}
      />
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
